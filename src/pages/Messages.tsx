import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import PortalNavigation from '@/components/PortalNavigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
  MessageSquare,
  Send,
  Plus,
  Search,
  Clock,
  Check,
  CheckCheck
} from 'lucide-react'

// Mock data - in real app this would come from Supabase
const conversations = [
  {
    id: '1',
    projectName: 'Website Redesign',
    lastMessage: 'The homepage design has been approved. Moving to development phase.',
    lastMessageTime: '2024-09-20T10:30:00Z',
    unreadCount: 2,
    participants: ['Sarah Johnson', 'Mike Chen'],
    messages: [
      {
        id: '1',
        sender: 'Sarah Johnson',
        senderRole: 'Project Manager',
        content: 'Hi! I wanted to update you on the website redesign project. We\'ve completed the design phase and are ready to move into development.',
        timestamp: '2024-09-20T09:00:00Z',
        isRead: true
      },
      {
        id: '2',
        sender: 'Mike Chen',
        senderRole: 'Developer',
        content: 'The development team has started working on the new homepage. We expect to have a prototype ready for review by next week.',
        timestamp: '2024-09-20T10:30:00Z',
        isRead: false
      },
      {
        id: '3',
        sender: 'Sarah Johnson',
        senderRole: 'Project Manager',
        content: 'Great! Let us know if you have any questions about the timeline or features.',
        timestamp: '2024-09-20T11:15:00Z',
        isRead: false
      }
    ]
  },
  {
    id: '2',
    projectName: 'SEO Campaign',
    lastMessage: 'Keyword rankings have improved significantly this month.',
    lastMessageTime: '2024-09-18T14:20:00Z',
    unreadCount: 0,
    participants: ['Alex Rivera', 'Emma Davis'],
    messages: [
      {
        id: '1',
        sender: 'Alex Rivera',
        senderRole: 'SEO Specialist',
        content: 'Your SEO campaign is showing great results! Three of your target keywords have moved up in search rankings.',
        timestamp: '2024-09-18T14:20:00Z',
        isRead: true
      }
    ]
  }
]

const Messages: React.FC = () => {
  const { user } = useAuth()
  const [selectedConversation, setSelectedConversation] = useState<typeof conversations[0] | null>(null)
  const [newMessage, setNewMessage] = useState('')
  const [isNewConversationOpen, setIsNewConversationOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return

    // In real app, this would save to Supabase
    console.log('Sending message:', newMessage)
    setNewMessage('')
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    } else {
      return date.toLocaleDateString()
    }
  }

  const filteredConversations = conversations.filter(conversation =>
    conversation.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="text-sm text-gray-600">Communicate with your project team</p>
          </div>
          <Dialog open={isNewConversationOpen} onOpenChange={setIsNewConversationOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Message
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Start New Conversation</DialogTitle>
                <DialogDescription>
                  Create a new message thread for a specific project or topic.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="project">Project</Label>
                  <Input id="project" placeholder="Select project..." />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message subject..." />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message..."
                    rows={4}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsNewConversationOpen(false)}>
                    Cancel
                  </Button>
                  <Button>Send Message</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Conversations</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[480px]">
                  <div className="space-y-1">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`p-4 cursor-pointer hover:bg-gray-50 border-b ${
                          selectedConversation?.id === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                        }`}
                        onClick={() => setSelectedConversation(conversation)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-sm">{conversation.projectName}</h3>
                          {conversation.unreadCount > 0 && (
                            <Badge variant="destructive" className="text-xs">
                              {conversation.unreadCount}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                          {conversation.lastMessage}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatTime(conversation.lastMessageTime)}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Message Thread */}
          <div className="lg:col-span-2">
            {selectedConversation ? (
              <Card className="h-full flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{selectedConversation.projectName}</CardTitle>
                      <CardDescription>
                        {selectedConversation.participants.join(', ')}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">
                      {selectedConversation.messages.length} messages
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col p-0">
                  {/* Messages */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {selectedConversation.messages.map((message) => (
                        <div key={message.id} className="flex space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>
                              {message.sender.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-sm">{message.sender}</span>
                              <Badge variant="secondary" className="text-xs">
                                {message.senderRole}
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {formatTime(message.timestamp)}
                              </span>
                              {message.isRead ? (
                                <CheckCheck className="w-3 h-3 text-blue-500" />
                              ) : (
                                <Check className="w-3 h-3 text-gray-400" />
                              )}
                            </div>
                            <p className="text-sm text-gray-700">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex space-x-2">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                        rows={2}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="self-end"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Conversation</h3>
                  <p className="text-gray-600">Choose a conversation from the list to view messages.</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages