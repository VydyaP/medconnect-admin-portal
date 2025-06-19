
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Edit, Trash2, MessageCircle, Ban } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 987-6543",
      joinDate: "2024-01-15",
      lastActive: "2024-06-18",
      appointments: 5,
      status: "active",
      type: "patient"
    },
    {
      id: 2,
      name: "Alice Johnson",
      email: "alice.johnson@email.com",
      phone: "+1 (555) 876-5432",
      joinDate: "2024-02-22",
      lastActive: "2024-06-19",
      appointments: 12,
      status: "active",
      type: "patient"
    },
    {
      id: 3,
      name: "Robert Davis",
      email: "robert.davis@email.com",
      phone: "+1 (555) 765-4321",
      joinDate: "2024-03-10",
      lastActive: "2024-05-15",
      appointments: 3,
      status: "inactive",
      type: "patient"
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma.wilson@email.com",
      phone: "+1 (555) 654-3210",
      joinDate: "2024-04-05",
      lastActive: "2024-06-19",
      appointments: 8,
      status: "active",
      type: "premium"
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || user.type === filterType;
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'patient': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-1 gap-4 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search users..."
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
              <SelectItem value="patient">Patient</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Users Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-gray-900">2,847</div>
          <div className="text-sm text-gray-500">Total Users</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-green-600">2,456</div>
          <div className="text-sm text-gray-500">Active Users</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-purple-600">391</div>
          <div className="text-sm text-gray-500">Premium Users</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-orange-600">1,234</div>
          <div className="text-sm text-gray-500">Active This Month</div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Join Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Last Active</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Appointments</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="text-sm text-gray-500">{user.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={getTypeColor(user.type)}>
                      {user.type}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-gray-900">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-gray-900">
                    {new Date(user.lastActive).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-gray-900">{user.appointments}</td>
                  <td className="py-4 px-4">
                    <Badge className={getStatusColor(user.status)}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" title="View Details">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="Edit User">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="Send Message">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-orange-600" title="Suspend User">
                        <Ban className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600" title="Delete User">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
