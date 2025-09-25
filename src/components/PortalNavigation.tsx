import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  BarChart3,
  FolderOpen,
  MessageSquare,
  FileText,
  Settings,
  LogOut
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

const PortalNavigation: React.FC = () => {
  const location = useLocation()
  const { signOut } = useAuth()

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/portal',
      icon: BarChart3,
    },
    {
      name: 'Projects',
      href: '/portal/projects',
      icon: FolderOpen,
    },
    {
      name: 'Messages',
      href: '/portal/messages',
      icon: MessageSquare,
    },
    {
      name: 'Invoices',
      href: '/portal/invoices',
      icon: FileText,
    },
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/portal" className="text-xl font-bold text-blue-600">
              Sardar Studios
            </Link>
            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default PortalNavigation