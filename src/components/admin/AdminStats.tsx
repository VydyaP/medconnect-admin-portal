
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Calendar, TrendingUp, Heart, Clock } from 'lucide-react';

const AdminStats = () => {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Active Doctors",
      value: "156",
      change: "+8%",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Appointments Today",
      value: "89",
      change: "+15%",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Revenue This Month",
      value: "$24,680",
      change: "+22%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Patient Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      title: "Avg Response Time",
      value: "2.3 min",
      change: "-15%",
      icon: Clock,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-full`}>
                  <IconComponent className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system activities and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New doctor registered", time: "2 minutes ago", type: "success" },
                { action: "Appointment cancelled", time: "5 minutes ago", type: "warning" },
                { action: "Payment processed", time: "10 minutes ago", type: "success" },
                { action: "System backup completed", time: "1 hour ago", type: "info" },
                { action: "User reported issue", time: "2 hours ago", type: "error" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' :
                      activity.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                    }`} />
                    <span className="text-sm text-gray-900">{activity.action}</span>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Current system status and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { metric: "Server Uptime", value: "99.9%", status: "excellent" },
                { metric: "Database Performance", value: "Good", status: "good" },
                { metric: "API Response Time", value: "120ms", status: "good" },
                { metric: "Storage Usage", value: "67%", status: "warning" },
                { metric: "Memory Usage", value: "45%", status: "good" }
              ].map((health, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{health.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{health.value}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      health.status === 'excellent' ? 'bg-green-500' :
                      health.status === 'good' ? 'bg-blue-500' :
                      health.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminStats;
