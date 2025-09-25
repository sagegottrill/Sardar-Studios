import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import PortalNavigation from '@/components/PortalNavigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Calendar,
  Clock,
  MessageSquare,
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
  PlayCircle
} from 'lucide-react'

// Mock data - in real app this would come from Supabase
const projects = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'in_progress',
    progress: 75,
    startDate: '2024-08-01',
    dueDate: '2024-10-15',
    budget: 15000,
    description: 'Complete website overhaul with modern design and improved UX',
    milestones: [
      { id: '1', title: 'Design Phase', completed: true, dueDate: '2024-08-15' },
      { id: '2', title: 'Development', completed: true, dueDate: '2024-09-15' },
      { id: '3', title: 'Testing & QA', completed: false, dueDate: '2024-10-01' },
      { id: '4', title: 'Launch', completed: false, dueDate: '2024-10-15' }
    ],
    updates: [
      {
        id: '1',
        title: 'Homepage Design Approved',
        description: 'Client approved the new homepage design. Moving to development phase.',
        date: '2024-09-20',
        type: 'success'
      },
      {
        id: '2',
        title: 'Development Started',
        description: 'Frontend development has begun. Expected completion in 2 weeks.',
        date: '2024-09-10',
        type: 'info'
      }
    ]
  },
  {
    id: '2',
    name: 'SEO Campaign',
    status: 'review',
    progress: 90,
    startDate: '2024-07-01',
    dueDate: '2024-09-30',
    budget: 8000,
    description: 'Comprehensive SEO optimization for target keywords',
    milestones: [
      { id: '1', title: 'Keyword Research', completed: true, dueDate: '2024-07-15' },
      { id: '2', title: 'On-page Optimization', completed: true, dueDate: '2024-08-15' },
      { id: '3', title: 'Content Creation', completed: true, dueDate: '2024-09-01' },
      { id: '4', title: 'Link Building', completed: false, dueDate: '2024-09-30' }
    ],
    updates: [
      {
        id: '1',
        title: 'Keyword Rankings Improved',
        description: '3 target keywords moved up in search rankings this week.',
        date: '2024-09-18',
        type: 'success'
      }
    ]
  }
]

const Projects: React.FC = () => {
  const { user } = useAuth()
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [newUpdate, setNewUpdate] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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

  const handleAddUpdate = () => {
    // In real app, this would save to Supabase
    console.log('Adding update:', newUpdate)
    setNewUpdate('')
    setIsDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Your Projects</CardTitle>
                <CardDescription>All active and completed projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedProject?.id === project.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{project.name}</h3>
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusText(project.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Due: {project.dueDate}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            {selectedProject ? (
              <div className="space-y-6">
                {/* Project Overview */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{selectedProject.name}</CardTitle>
                        <CardDescription>{selectedProject.description}</CardDescription>
                      </div>
                      <Badge className={getStatusColor(selectedProject.status)}>
                        {getStatusText(selectedProject.status)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-600">Start Date</p>
                        <p className="font-medium">{selectedProject.startDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Due Date</p>
                        <p className="font-medium">{selectedProject.dueDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Budget</p>
                        <p className="font-medium">${selectedProject.budget.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Progress</p>
                        <p className="font-medium">{selectedProject.progress}%</p>
                      </div>
                    </div>
                    <Progress value={selectedProject.progress} className="h-3" />
                  </CardContent>
                </Card>

                {/* Project Tabs */}
                <Tabs defaultValue="milestones" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="milestones">Milestones</TabsTrigger>
                    <TabsTrigger value="updates">Updates</TabsTrigger>
                    <TabsTrigger value="files">Files</TabsTrigger>
                  </TabsList>

                  <TabsContent value="milestones" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Milestones</CardTitle>
                        <CardDescription>Track progress through project phases</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {selectedProject.milestones.map((milestone, index) => (
                          <div key={milestone.id} className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              milestone.completed ? 'bg-green-100' : 'bg-gray-100'
                            }`}>
                              {milestone.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : (
                                <Clock className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-medium ${milestone.completed ? 'line-through text-gray-500' : ''}`}>
                                {milestone.title}
                              </h4>
                              <p className="text-sm text-gray-600">Due: {milestone.dueDate}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="updates" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Project Updates</CardTitle>
                            <CardDescription>Latest news and progress updates</CardDescription>
                          </div>
                          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                              <Button size="sm">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Add Update
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Add Project Update</DialogTitle>
                                <DialogDescription>
                                  Share progress updates or request feedback from the team.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="update">Update Message</Label>
                                  <Textarea
                                    id="update"
                                    placeholder="Describe the update or question..."
                                    value={newUpdate}
                                    onChange={(e) => setNewUpdate(e.target.value)}
                                  />
                                </div>
                                <div className="flex justify-end space-x-2">
                                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                    Cancel
                                  </Button>
                                  <Button onClick={handleAddUpdate}>
                                    Send Update
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {selectedProject.updates.map((update) => (
                          <div key={update.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{update.title}</h4>
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
                  </TabsContent>

                  <TabsContent value="files" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Files</CardTitle>
                        <CardDescription>Creative assets and project deliverables</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8">
                          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">No files uploaded yet</p>
                          <Button className="mt-4">
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Files
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <PlayCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Project</h3>
                    <p className="text-gray-600">Choose a project from the list to view details and progress.</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects