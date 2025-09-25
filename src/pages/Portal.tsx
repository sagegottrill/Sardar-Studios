import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import PortalNavigation from '@/components/PortalNavigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Calendar,
  MessageSquare,
  FileText,
  Download
} from 'lucide-react'

// Mock data - in real app this would come from Supabase
const analyticsData = {
  seoRankings: [
    { keyword: 'digital marketing', position: 5, change: -2 },
    { keyword: 'SEO services', position: 3, change: 1 },
    { keyword: 'web design', position: 8, change: 0 },
    { keyword: 'social media', position: 4, change: 2 },
  ],
  trafficData: [
    { month: 'Jan', visitors: 1200, conversions: 45 },
    { month: 'Feb', visitors: 1350, conversions: 52 },
    { month: 'Mar', visitors: 1180, conversions: 38 },
    { month: 'Apr', visitors: 1420, conversions: 61 },
    { month: 'May', visitors: 1680, conversions: 73 },
    { month: 'Jun', visitors: 1890, conversions: 89 },
  ],
  socialGrowth: [
    { platform: 'Instagram', followers: 2500, growth: 12 },
    { platform: 'LinkedIn', followers: 1800, growth: 8 },
    { platform: 'Facebook', followers: 3200, growth: 15 },
  ],
  adPerformance: {
    spend: 2500,
    roi: 3.2,
    conversions: 156,
    ctr: 2.8
  }
}

const projects = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'in_progress',
    progress: 75,
    dueDate: '2024-10-15',
    description: 'Complete website overhaul with modern design and improved UX'
  },
  {
    id: '2',
    name: 'SEO Campaign',
    status: 'review',
    progress: 90,
    dueDate: '2024-09-30',
    description: 'Comprehensive SEO optimization for target keywords'
  }
]

const recentUpdates = [
  {
    id: '1',
    project: 'Website Redesign',
    title: 'Homepage Design Approved',
    description: 'Client approved the new homepage design. Moving to development phase.',
    date: '2024-09-20',
    type: 'success'
  },
  {
    id: '2',
    project: 'SEO Campaign',
    title: 'Keyword Rankings Improved',
    description: '3 target keywords moved up in search rankings this week.',
    date: '2024-09-18',
    type: 'info'
  }
]

const Portal: React.FC = () => {
  const { user, signOut } = useAuth()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in_progress': return 'bg-blue-100 text-blue-800'
      case 'review': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in_progress': return 'In Progress'
      case 'review': return 'In Review'
      default: return 'Planning'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Website Traffic</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,890</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversions</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+22% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ad Spend ROI</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2x</div>
              <p className="text-xs text-muted-foreground">+0.3x from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Social Growth</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7,500</div>
              <p className="text-xs text-muted-foreground">+35% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Analytics Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Traffic Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Website Traffic & Conversions</CardTitle>
                <CardDescription>Monthly performance over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData.trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visitors" stroke="#2563eb" strokeWidth={2} />
                    <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* SEO Rankings */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Rankings</CardTitle>
                <CardDescription>Current search engine positions for target keywords</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.seoRankings.map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{keyword.keyword}</p>
                        <p className="text-sm text-gray-600">Position #{keyword.position}</p>
                      </div>
                      <Badge variant={keyword.change > 0 ? 'default' : keyword.change < 0 ? 'destructive' : 'secondary'}>
                        {keyword.change > 0 ? '+' : ''}{keyword.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Your current projects and progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{project.name}</h4>
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusText(project.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{project.description}</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    <p className="text-xs text-gray-500">Due: {project.dueDate}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>Latest project updates and milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentUpdates.map((update) => (
                  <div key={update.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{update.title}</h4>
                      <Badge variant={update.type === 'success' ? 'default' : 'secondary'}>
                        {update.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{update.description}</p>
                    <p className="text-xs text-gray-500">{update.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download Assets
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal