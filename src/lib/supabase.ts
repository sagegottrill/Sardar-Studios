import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key'

// Check if Supabase credentials are properly configured
if (supabaseUrl === 'your-supabase-url' || supabaseAnonKey === 'your-supabase-anon-key') {
  console.warn('⚠️ Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
  console.warn('Get these values from your Supabase project dashboard at https://supabase.com/dashboard')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  full_name: string
  company_name: string
  role: 'client' | 'admin'
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  client_id: string
  name: string
  description: string
  status: 'planning' | 'in_progress' | 'review' | 'completed'
  start_date: string
  end_date?: string
  budget: number
  created_at: string
  updated_at: string
}

export interface ProjectUpdate {
  id: string
  project_id: string
  title: string
  description: string
  status: 'info' | 'warning' | 'success'
  created_at: string
}

export interface Message {
  id: string
  project_id: string
  sender_id: string
  sender_name: string
  content: string
  is_read: boolean
  created_at: string
}

export interface File {
  id: string
  project_id: string
  name: string
  url: string
  size: number
  type: string
  uploaded_by: string
  created_at: string
}

export interface Analytics {
  id: string
  project_id: string
  date: string
  seo_rankings: Record<string, number>
  ad_spend: number
  roi: number
  social_followers: Record<string, number>
  website_traffic: number
  conversions: number
  created_at: string
}

export interface Invoice {
  id: string
  project_id: string
  amount: number
  status: 'draft' | 'sent' | 'paid' | 'overdue'
  due_date: string
  description: string
  created_at: string
}