
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Eye, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const DoctorsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialty: "General Practitioner",
      email: "sarah.wilson@medical.com",
      phone: "+1 (555) 123-4567",
      experience: 8,
      rating: 4.9,
      verified: true,
      status: "active",
      patients: 127,
      location: "City Medical Center"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dentist",
      email: "michael.chen@dental.com",
      phone: "+1 (555) 234-5678",
      experience: 12,
      rating: 4.7,
      verified: true,
      status: "active",
      patients: 98,
      location: "Smile Dental Clinic"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Cardiologist",
      email: "emily.rodriguez@heart.com",
      phone: "+1 (555) 345-6789",
      experience: 15,
      rating: 4.8,
      verified: false,
      status: "pending",
      patients: 0,
      location: "Heart Care Institute"
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || doctor.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
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
              placeholder="Search doctors..."
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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Doctor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Doctor</DialogTitle>
              <DialogDescription>
                Add a new healthcare professional to the platform.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Dr. John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">Specialty</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Practitioner</SelectItem>
                    <SelectItem value="dentist">Dentist</SelectItem>
                    <SelectItem value="cardiologist">Cardiologist</SelectItem>
                    <SelectItem value="dermatologist">Dermatologist</SelectItem>
                    <SelectItem value="pediatrician">Pediatrician</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" placeholder="5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location/Clinic</Label>
                <Input id="location" placeholder="Medical Center Name" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="bio">Bio/Description</Label>
                <Textarea id="bio" placeholder="Brief description about the doctor..." />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Add Doctor</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Doctors Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Doctor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Specialty</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Experience</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Patients</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredDoctors.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {doctor.name.split(' ').slice(1).map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 flex items-center gap-2">
                          {doctor.name}
                          {doctor.verified && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{doctor.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{doctor.specialty}</td>
                  <td className="py-4 px-4 text-gray-900">{doctor.experience} years</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-900">{doctor.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={getStatusColor(doctor.status)}>
                      {doctor.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{doctor.patients}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {!doctor.verified && (
                        <Button variant="ghost" size="sm" className="text-green-600">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="text-red-600">
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

export default DoctorsManagement;
