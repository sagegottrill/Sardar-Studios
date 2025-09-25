# Sardar Studios - Client Portal

A modern, secure client portal for Sardar Studios built with React, TypeScript, and Vite. Features real-time analytics, project management, messaging, and invoice tracking.

## Features

### 🔐 **Secure Authentication**
- Client login/signup with Supabase
- Protected routes and session management
- Password reset functionality

### 📊 **Real-time Analytics Dashboard**
- SEO rankings tracking
- Ad spend and ROI metrics
- Social media growth analytics
- Website traffic and conversion rates
- Interactive charts and visualizations

### 📁 **Project Management**
- Project progress tracking
- Timeline and milestone management
- File sharing for creative assets
- Project updates and notifications

### 💬 **Messaging System**
- Real-time communication with team
- Project-specific conversations
- File attachments and rich messaging

### 💰 **Invoice & Payment Management**
- Invoice history and tracking
- Payment processing integration
- Multiple payment methods
- Financial reporting

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + ShadCN UI
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod validation
- **State Management**: React Query + Context API
- **Routing**: React Router v6

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sardar-studios-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Settings > API to get your project URL and anon key

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

5. **Set up database schema**
   Run the following SQL in your Supabase SQL editor:

   ```sql
   -- Enable Row Level Security
   ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

   -- Create profiles table
   CREATE TABLE profiles (
     id UUID REFERENCES auth.users(id) PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     full_name TEXT NOT NULL,
     company_name TEXT NOT NULL,
     role TEXT CHECK (role IN ('client', 'admin')) DEFAULT 'client',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Create projects table
   CREATE TABLE projects (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     client_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
     name TEXT NOT NULL,
     description TEXT,
     status TEXT CHECK (status IN ('planning', 'in_progress', 'review', 'completed')) DEFAULT 'planning',
     start_date DATE,
     end_date DATE,
     budget DECIMAL(10,2),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Create project_updates table
   CREATE TABLE project_updates (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
     title TEXT NOT NULL,
     description TEXT,
     status TEXT CHECK (status IN ('info', 'warning', 'success')) DEFAULT 'info',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Create messages table
   CREATE TABLE messages (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
     sender_id UUID REFERENCES profiles(id),
     sender_name TEXT NOT NULL,
     content TEXT NOT NULL,
     is_read BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Create files table
   CREATE TABLE files (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
     name TEXT NOT NULL,
     url TEXT NOT NULL,
     size INTEGER,
     type TEXT,
     uploaded_by UUID REFERENCES profiles(id),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Create analytics table
   CREATE TABLE analytics (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
     date DATE NOT NULL,
     seo_rankings JSONB,
     ad_spend DECIMAL(10,2) DEFAULT 0,
     roi DECIMAL(5,2) DEFAULT 0,
     social_followers JSONB,
     website_traffic INTEGER DEFAULT 0,
     conversions INTEGER DEFAULT 0,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Create invoices table
   CREATE TABLE invoices (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
     amount DECIMAL(10,2) NOT NULL,
     status TEXT CHECK (status IN ('draft', 'sent', 'paid', 'overdue')) DEFAULT 'draft',
     due_date DATE,
     description TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Set up Row Level Security policies
   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
   ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
   ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;
   ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
   ALTER TABLE files ENABLE ROW LEVEL SECURITY;
   ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
   ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

   -- Profiles policies
   CREATE POLICY "Users can view their own profile" ON profiles
     FOR SELECT USING (auth.uid() = id);

   CREATE POLICY "Users can update their own profile" ON profiles
     FOR UPDATE USING (auth.uid() = id);

   -- Projects policies
   CREATE POLICY "Clients can view their own projects" ON projects
     FOR SELECT USING (client_id = auth.uid());

   -- Project updates policies
   CREATE POLICY "Clients can view updates for their projects" ON project_updates
     FOR SELECT USING (
       project_id IN (
         SELECT id FROM projects WHERE client_id = auth.uid()
       )
     );

   -- Messages policies
   CREATE POLICY "Clients can view messages for their projects" ON messages
     FOR SELECT USING (
       project_id IN (
         SELECT id FROM projects WHERE client_id = auth.uid()
       )
     );

   CREATE POLICY "Clients can send messages to their projects" ON messages
     FOR INSERT WITH CHECK (
       project_id IN (
         SELECT id FROM projects WHERE client_id = auth.uid()
       )
       AND sender_id = auth.uid()
     );

   -- Files policies
   CREATE POLICY "Clients can view files for their projects" ON files
     FOR SELECT USING (
       project_id IN (
         SELECT id FROM projects WHERE client_id = auth.uid()
       )
     );

   -- Analytics policies
   CREATE POLICY "Clients can view analytics for their projects" ON analytics
     FOR SELECT USING (
       project_id IN (
         SELECT id FROM projects WHERE client_id = auth.uid()
       )
     );

   -- Invoices policies
   CREATE POLICY "Clients can view invoices for their projects" ON invoices
     FOR SELECT USING (
       project_id IN (
         SELECT id FROM projects WHERE client_id = auth.uid()
       )
     );

   -- Create storage bucket for files
   INSERT INTO storage.buckets (id, name, public) VALUES ('project-files', 'project-files', false);

   -- Storage policies
   CREATE POLICY "Clients can view files from their projects" ON storage.objects
     FOR SELECT USING (
       bucket_id = 'project-files' AND
       (storage.foldername(name))[1] IN (
         SELECT id::text FROM projects WHERE client_id = auth.uid()
       )
     );

   CREATE POLICY "Clients can upload files to their projects" ON storage.objects
     FOR INSERT WITH CHECK (
       bucket_id = 'project-files' AND
       (storage.foldername(name))[1] IN (
         SELECT id::text FROM projects WHERE client_id = auth.uid()
       )
     );
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Access the application**
   - Main website: http://localhost:8080
   - Client portal login: http://localhost:8080/portal/login

## Project Structure

```
src/
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── PortalNavigation.tsx # Portal navigation
│   └── ProtectedRoute.tsx   # Route protection
├── contexts/
│   ├── AuthContext.tsx      # Authentication state
│   └── AppContext.tsx       # App state
├── pages/
│   ├── Index.tsx           # Main website
│   ├── Login.tsx           # Portal login
│   ├── Signup.tsx          # Portal signup
│   ├── Portal.tsx          # Dashboard
│   ├── Projects.tsx        # Project management
│   ├── Messages.tsx        # Messaging
│   ├── Invoices.tsx        # Billing
│   └── NotFound.tsx        # 404 page
├── lib/
│   ├── supabase.ts         # Supabase client & types
│   └── utils.ts            # Utility functions
└── App.tsx                 # Main app component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting platform** (Vercel, Netlify, etc.)

3. **Set environment variables** in your hosting platform's dashboard

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Sardar Studios.
