
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageSquare, Eye, Download, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ChatLogsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const chatLogs = [
    {
      id: 1,
      user: "John Smith",
      type: "medbot",
      startTime: "2024-06-19 10:30",
      duration: "15 min",
      messages: 24,
      status: "completed",
      topic: "Headache symptoms"
    },
    {
      id: 2,
      user: "Alice Johnson",
      type: "therapist",
      therapist: "Dr. Sarah Wilson",
      startTime: "2024-06-19 14:15",
      duration: "45 min",
      messages: 67,
      status: "completed",
      topic: "Anxiety consultation"
    },
    {
      id: 3,
      user: "Robert Davis",
      type: "medbot",
      startTime: "2024-06-19 09:45",
      duration: "8 min",
      messages: 12,
      status: "incomplete",
      topic: "Prescription inquiry"
    }
  ];

  const filteredLogs = chatLogs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || log.type === filterType;
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    return type === 'medbot' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  const getStatusColor = (status: string) => {
    return status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-1 gap-4 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search chat logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="medbot">MedBot</SelectItem>
              <SelectItem value="therapist">Therapist</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Logs
        </Button>
      </div>

      {/* Chat Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Chats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">MedBot Chats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">892</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Therapist Chats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">355</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 min</div>
          </CardContent>
        </Card>
      </div>

      {/* Chat Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Chat History</CardTitle>
          <CardDescription>View and manage all chat conversations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Topic</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Start Time</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Duration</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Messages</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 text-sm font-medium">
                            {log.user.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{log.user}</div>
                          {log.therapist && (
                            <div className="text-sm text-gray-500">with {log.therapist}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getTypeColor(log.type)}>
                        {log.type === 'medbot' ? 'MedBot' : 'Therapist'}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-gray-900">{log.topic}</td>
                    <td className="py-4 px-4 text-gray-900">{log.startTime}</td>
                    <td className="py-4 px-4 text-gray-900">{log.duration}</td>
                    <td className="py-4 px-4 text-gray-900">{log.messages}</td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(log.status)}>
                        {log.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Chat Log - {log.user}</DialogTitle>
                            <DialogDescription>
                              {log.type === 'medbot' ? 'MedBot' : 'Therapist'} conversation on {log.startTime}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-medium mb-2">Conversation Details</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>Topic: {log.topic}</div>
                                <div>Duration: {log.duration}</div>
                                <div>Messages: {log.messages}</div>
                                <div>Status: {log.status}</div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-medium">Messages</h4>
                              <div className="space-y-2 max-h-96 overflow-y-auto">
                                {/* Sample messages */}
                                <div className="flex gap-3">
                                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <MessageSquare className="h-4 w-4 text-blue-600" />
                                  </div>
                                  <div className="flex-1 bg-blue-50 p-3 rounded-lg">
                                    <div className="text-sm font-medium text-blue-900">MedBot</div>
                                    <div className="text-sm">Hello! How can I help you today?</div>
                                    <div className="text-xs text-gray-500 mt-1">10:30 AM</div>
                                  </div>
                                </div>
                                <div className="flex gap-3">
                                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <span className="text-gray-600 text-sm font-medium">
                                      {log.user.split(' ').map(n => n[0]).join('')}
                                    </span>
                                  </div>
                                  <div className="flex-1 bg-gray-50 p-3 rounded-lg">
                                    <div className="text-sm font-medium">{log.user}</div>
                                    <div className="text-sm">I've been having headaches for the past few days...</div>
                                    <div className="text-xs text-gray-500 mt-1">10:31 AM</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatLogsManagement;
