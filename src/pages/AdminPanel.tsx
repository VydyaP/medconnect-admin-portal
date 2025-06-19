
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Calendar, MessageSquare, UserCheck, BarChart, FileText, Settings, HeadphonesIcon } from 'lucide-react';

// Import admin components
import AdminStats from '@/components/admin/AdminStats';
import UsersManagement from '@/components/admin/UsersManagement';
import AppointmentsManagement from '@/components/admin/AppointmentsManagement';
import DoctorsManagement from '@/components/admin/DoctorsManagement';
import AdminSettings from '@/components/admin/AdminSettings';
import ChatLogsManagement from '@/components/admin/ChatLogsManagement';
import SystemAnalytics from '@/components/admin/SystemAnalytics';
import ContentManagement from '@/components/admin/ContentManagement';
import SupportTickets from '@/components/admin/SupportTickets';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Healthcare Admin Panel</h1>
          <p className="text-gray-600">Manage your healthcare platform with confidence</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 bg-transparent gap-1">
              <TabsTrigger 
                value="dashboard" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <BarChart className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Users</span>
              </TabsTrigger>
              <TabsTrigger 
                value="appointments" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Appointments</span>
              </TabsTrigger>
              <TabsTrigger 
                value="doctors" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <UserCheck className="h-4 w-4" />
                <span className="hidden sm:inline">Doctors</span>
              </TabsTrigger>
              <TabsTrigger 
                value="chatlogs" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Chat Logs</span>
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <BarChart className="h-4 w-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
              <TabsTrigger 
                value="content" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
              <TabsTrigger 
                value="support" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <HeadphonesIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Support</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="flex items-center gap-2 data-[state=active]:bg-[#3EB489] data-[state=active]:text-white rounded-lg px-3 py-2 transition-all duration-200"
              >
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="mt-6">
            <AdminStats />
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <UsersManagement />
          </TabsContent>

          <TabsContent value="appointments" className="mt-6">
            <AppointmentsManagement />
          </TabsContent>

          <TabsContent value="doctors" className="mt-6">
            <DoctorsManagement />
          </TabsContent>

          <TabsContent value="chatlogs" className="mt-6">
            <ChatLogsManagement />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <SystemAnalytics />
          </TabsContent>

          <TabsContent value="content" className="mt-6">
            <ContentManagement />
          </TabsContent>

          <TabsContent value="support" className="mt-6">
            <SupportTickets />
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
