
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageSquare, Clock, CheckCircle, AlertCircle, User } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const SupportTickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  const tickets = [
    {
      id: 1,
      title: "Unable to book appointment",
      user: "John Smith",
      email: "john.smith@email.com",
      status: "open",
      priority: "high",
      category: "Booking",
      created: "2024-06-19 10:30",
      lastUpdate: "2024-06-19 14:20",
      assignedTo: "Support Team A",
      description: "I'm getting an error when trying to book an appointment with Dr. Wilson."
    },
    {
      id: 2,
      title: "Payment not processed",
      user: "Alice Johnson",
      email: "alice.johnson@email.com",
      status: "in-progress",
      priority: "high",
      category: "Billing",
      created: "2024-06-19 09:15",
      lastUpdate: "2024-06-19 13:45",
      assignedTo: "Support Team B",
      description: "My payment was deducted but the appointment wasn't confirmed."
    },
    {
      id: 3,
      title: "Profile update issues",
      user: "Robert Davis",
      email: "robert.davis@email.com",
      status: "resolved",
      priority: "medium",
      category: "Account",
      created: "2024-06-18 16:20",
      lastUpdate: "2024-06-19 11:30",
      assignedTo: "Support Team A",
      description: "Cannot update my profile information and medical history."
    },
    {
      id: 4,
      title: "Chat not working",
      user: "Emma Wilson",
      email: "emma.wilson@email.com",
      status: "open",
      priority: "low",
      category: "Technical",
      created: "2024-06-19 08:45",
      lastUpdate: "2024-06-19 08:45",
      assignedTo: "Unassigned",
      description: "MedBot chat window is not loading properly on mobile."
    }
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'in-progress': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <MessageSquare className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-1 gap-4 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterPriority} onValueChange={setFilterPriority}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Open Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">23</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">18</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Resolved Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">34</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5h</div>
          </CardContent>
        </Card>
      </div>

      {/* Support Tickets */}
      <div className="space-y-4">
        {filteredTickets.map((ticket) => (
          <Card key={ticket.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  {getStatusIcon(ticket.status)}
                  <div>
                    <CardTitle className="text-lg">{ticket.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <User className="h-3 w-3" />
                      {ticket.user} • {ticket.email}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className={getStatusColor(ticket.status)}>
                    {ticket.status}
                  </Badge>
                  <Badge className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">{ticket.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex gap-4">
                    <span>Category: {ticket.category}</span>
                    <span>Assigned: {ticket.assignedTo}</span>
                  </div>
                  <div className="flex gap-4">
                    <span>Created: {ticket.created}</span>
                    <span>Updated: {ticket.lastUpdate}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Ticket #{ticket.id} - {ticket.title}</DialogTitle>
                        <DialogDescription>
                          Support ticket from {ticket.user}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Status</Label>
                            <Select defaultValue={ticket.status}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="open">Open</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="resolved">Resolved</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Priority</Label>
                            <Select defaultValue={ticket.priority}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            {ticket.description}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Add Response</Label>
                          <Textarea placeholder="Type your response to the user..." rows={4} />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Save Changes</Button>
                          <Button>Send Response</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {ticket.status !== 'resolved' && (
                    <Button size="sm" variant="outline" className="text-green-600">
                      Mark Resolved
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SupportTickets;
