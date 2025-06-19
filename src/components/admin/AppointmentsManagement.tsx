
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, Eye, Edit, X, Check } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AppointmentsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      doctor: "Dr. Sarah Wilson",
      specialty: "General Practitioner",
      date: "2024-06-20",
      time: "10:00 AM",
      duration: 30,
      status: "confirmed",
      type: "consultation",
      price: 45
    },
    {
      id: 2,
      patient: "Alice Johnson",
      doctor: "Dr. Michael Chen",
      specialty: "Dentist",
      date: "2024-06-20",
      time: "2:30 PM",
      duration: 60,
      status: "completed",
      type: "treatment",
      price: 120
    },
    {
      id: 3,
      patient: "Robert Davis",
      doctor: "Dr. Emily Rodriguez",
      specialty: "Cardiologist",
      date: "2024-06-21",
      time: "9:00 AM",
      duration: 45,
      status: "pending",
      type: "checkup",
      price: 80
    },
    {
      id: 4,
      patient: "Emma Wilson",
      doctor: "Dr. Sarah Wilson",
      specialty: "General Practitioner",
      date: "2024-06-19",
      time: "3:00 PM",
      duration: 30,
      status: "cancelled",
      type: "consultation",
      price: 45
    }
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || appointment.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'consultation': return 'bg-purple-100 text-purple-800';
      case 'treatment': return 'bg-orange-100 text-orange-800';
      case 'checkup': return 'bg-teal-100 text-teal-800';
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
              placeholder="Search appointments..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Appointments Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-gray-900">156</div>
          <div className="text-sm text-gray-500">Total Today</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-blue-600">89</div>
          <div className="text-sm text-gray-500">Confirmed</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-yellow-600">23</div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-green-600">134</div>
          <div className="text-sm text-gray-500">Completed</div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Patient</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Doctor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date & Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Duration</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="font-medium text-gray-900">{appointment.patient}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{appointment.doctor}</div>
                      <div className="text-sm text-gray-500">{appointment.specialty}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-gray-900">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <div>
                        <div>{new Date(appointment.date).toLocaleDateString()}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {appointment.time}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={getTypeColor(appointment.type)}>
                      {appointment.type}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{appointment.duration} min</td>
                  <td className="py-4 px-4 text-gray-900 font-medium">${appointment.price}</td>
                  <td className="py-4 px-4">
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" title="View Details">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="Edit Appointment">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {appointment.status === 'pending' && (
                        <>
                          <Button variant="ghost" size="sm" className="text-green-600" title="Confirm">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600" title="Cancel">
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
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

export default AppointmentsManagement;
