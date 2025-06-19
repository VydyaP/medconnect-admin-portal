
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600 mt-2">Manage your healthcare platform</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="doctors" className="flex items-center gap-2">
              <UserCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Doctors</span>
            </TabsTrigger>
            <TabsTrigger value="chatlogs" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Chat Logs</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <HeadphonesIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Support</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <AdminStats />
          </TabsContent>

          <TabsContent value="users">
            <UsersManagement />
          </TabsContent>

          <TabsContent value="appointments">
            <AppointmentsManagement />
          </TabsContent>

          <TabsContent value="doctors">
            <DoctorsManagement />
          </TabsContent>

          <TabsContent value="chatlogs">
            <ChatLogsManagement />
          </TabsContent>

          <TabsContent value="analytics">
            <SystemAnalytics />
          </TabsContent>

          <TabsContent value="content">
            <ContentManagement />
          </TabsContent>

          <TabsContent value="support">
            <SupportTickets />
          </TabsContent>

          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
