import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import PortalNavigation from '@/components/PortalNavigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Download,
  CreditCard,
  Calendar,
  DollarSign,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react'

// Mock data - in real app this would come from Supabase
const invoices = [
  {
    id: 'INV-2024-001',
    projectName: 'Website Redesign',
    amount: 5000,
    status: 'paid',
    dueDate: '2024-09-15',
    paidDate: '2024-09-10',
    description: 'Phase 1: Design and Planning',
    items: [
      { description: 'UI/UX Design', amount: 3000 },
      { description: 'Wireframing', amount: 1500 },
      { description: 'Client Revisions', amount: 500 }
    ]
  },
  {
    id: 'INV-2024-002',
    projectName: 'Website Redesign',
    amount: 7500,
    status: 'paid',
    dueDate: '2024-10-15',
    paidDate: '2024-10-12',
    description: 'Phase 2: Development',
    items: [
      { description: 'Frontend Development', amount: 4000 },
      { description: 'Backend Integration', amount: 2500 },
      { description: 'Testing & QA', amount: 1000 }
    ]
  },
  {
    id: 'INV-2024-003',
    projectName: 'SEO Campaign',
    amount: 3200,
    status: 'sent',
    dueDate: '2024-10-01',
    paidDate: null,
    description: 'Monthly SEO Services - September',
    items: [
      { description: 'Keyword Research', amount: 800 },
      { description: 'Content Optimization', amount: 1200 },
      { description: 'Link Building', amount: 800 },
      { description: 'Reporting', amount: 400 }
    ]
  },
  {
    id: 'INV-2024-004',
    projectName: 'Social Media Marketing',
    amount: 2800,
    status: 'overdue',
    dueDate: '2024-09-20',
    paidDate: null,
    description: 'Monthly Social Media Management - September',
    items: [
      { description: 'Content Creation', amount: 1200 },
      { description: 'Community Management', amount: 800 },
      { description: 'Ad Campaign Management', amount: 600 },
      { description: 'Analytics & Reporting', amount: 200 }
    ]
  }
]

const paymentMethods = [
  {
    id: '1',
    type: 'card',
    last4: '4242',
    brand: 'Visa',
    isDefault: true
  },
  {
    id: '2',
    type: 'bank',
    last4: '1234',
    bankName: 'Chase Bank',
    isDefault: false
  }
]

const Invoices: React.FC = () => {
  const { user } = useAuth()
  const [selectedInvoice, setSelectedInvoice] = useState<typeof invoices[0] | null>(null)
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800'
      case 'sent': return 'bg-blue-100 text-blue-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="w-4 h-4" />
      case 'sent': return <Clock className="w-4 h-4" />
      case 'overdue': return <AlertTriangle className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid': return 'Paid'
      case 'sent': return 'Sent'
      case 'overdue': return 'Overdue'
      default: return 'Draft'
    }
  }

  const totalPaid = invoices
    .filter(invoice => invoice.status === 'paid')
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  const totalOutstanding = invoices
    .filter(invoice => invoice.status !== 'paid')
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  const handlePayment = () => {
    // In real app, this would process payment through Stripe/PayPal
    console.log('Processing payment for invoice:', selectedInvoice?.id)
    setIsPaymentDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${totalPaid.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">All time payments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">${totalOutstanding.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Awaiting payment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Due</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Oct 1</div>
              <p className="text-xs text-muted-foreground">SEO Campaign</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Invoices List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>All Invoices</CardTitle>
                <CardDescription>Your complete billing history</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow
                        key={invoice.id}
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => setSelectedInvoice(invoice)}
                      >
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.projectName}</TableCell>
                        <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(invoice.status)}>
                            {getStatusIcon(invoice.status)}
                            <span className="ml-1">{getStatusText(invoice.status)}</span>
                          </Badge>
                        </TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3" />
                            </Button>
                            {invoice.status !== 'paid' && (
                              <Button
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setSelectedInvoice(invoice)
                                  setIsPaymentDialogOpen(true)
                                }}
                              >
                                Pay Now
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Invoice Details / Payment Methods */}
          <div className="space-y-6">
            {selectedInvoice ? (
              <Card>
                <CardHeader>
                  <CardTitle>Invoice Details</CardTitle>
                  <CardDescription>{selectedInvoice.id}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Project</p>
                    <p className="font-medium">{selectedInvoice.projectName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Description</p>
                    <p className="font-medium">{selectedInvoice.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Amount</p>
                    <p className="text-2xl font-bold">${selectedInvoice.amount.toLocaleString()}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Due Date</p>
                      <p className="font-medium">{selectedInvoice.dueDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <Badge className={getStatusColor(selectedInvoice.status)}>
                        {getStatusText(selectedInvoice.status)}
                      </Badge>
                    </div>
                  </div>

                  {selectedInvoice.status === 'paid' && selectedInvoice.paidDate && (
                    <div>
                      <p className="text-sm text-gray-600">Paid Date</p>
                      <p className="font-medium">{selectedInvoice.paidDate}</p>
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Line Items</h4>
                    <div className="space-y-2">
                      {selectedInvoice.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.description}</span>
                          <span>${item.amount.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select an Invoice</h3>
                    <p className="text-gray-600">Choose an invoice to view details and payment options.</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your saved payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">
                          {method.type === 'card' ? `${method.brand} **** ${method.last4}` : `${method.bankName} **** ${method.last4}`}
                        </p>
                        <p className="text-sm text-gray-600 capitalize">{method.type}</p>
                      </div>
                    </div>
                    {method.isDefault && (
                      <Badge variant="secondary">Default</Badge>
                    )}
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Dialog */}
        <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Make Payment</DialogTitle>
              <DialogDescription>
                Pay invoice {selectedInvoice?.id} for ${selectedInvoice?.amount.toLocaleString()}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="payment-method">Payment Method</Label>
                <select id="payment-method" className="w-full p-2 border rounded-md">
                  {paymentMethods.map((method) => (
                    <option key={method.id} value={method.id}>
                      {method.type === 'card' ? `${method.brand} **** ${method.last4}` : `${method.bankName} **** ${method.last4}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsPaymentDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handlePayment}>
                  Pay ${selectedInvoice?.amount.toLocaleString()}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Invoices