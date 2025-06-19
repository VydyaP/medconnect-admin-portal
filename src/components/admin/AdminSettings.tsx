
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const AdminSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [autoApproval, setAutoApproval] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Platform Information</CardTitle>
              <CardDescription>Basic information about your healthcare platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" defaultValue="Find Your Doctor" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input id="support-email" type="email" defaultValue="support@doctorfinder.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="platform-description">Platform Description</Label>
                <Textarea 
                  id="platform-description" 
                  defaultValue="Connect with verified healthcare professionals and book appointments online."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Support Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="est">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (EST)</SelectItem>
                      <SelectItem value="cst">Central Time (CST)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>Set your platform's operating hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Weekdays</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="09:00">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00">8:00 AM</SelectItem>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="flex items-center">to</span>
                    <Select defaultValue="18:00">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Saturday</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="10:00">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="flex items-center">to</span>
                    <Select defaultValue="15:00">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Sunday</Label>
                  <div className="text-sm text-gray-500 bg-gray-50 p-2 rounded">
                    Closed
                  </div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Update Hours</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how users receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-gray-500">Send appointment confirmations and reminders via email</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <p className="text-sm text-gray-500">Send appointment reminders via SMS</p>
                </div>
                <Switch
                  id="sms-notifications"
                  checked={smsNotifications}
                  onCheckedChange={setSmsNotifications}
                />
              </div>
              <Separator />
              <div className="space-y-4">
                <Label>Email Templates</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">Appointment Confirmation</Button>
                  <Button variant="outline">Appointment Reminder</Button>
                  <Button variant="outline">Doctor Verification</Button>
                  <Button variant="outline">Password Reset</Button>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Configuration</CardTitle>
              <CardDescription>Set consultation fees and platform charges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="consultation-fee">Base Consultation Fee ($)</Label>
                  <Input id="consultation-fee" type="number" defaultValue="45" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platform-fee">Platform Fee (%)</Label>
                  <Input id="platform-fee" type="number" defaultValue="10" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="specialist-fee">Specialist Fee ($)</Label>
                  <Input id="specialist-fee" type="number" defaultValue="80" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency-fee">Emergency Fee ($)</Label>
                  <Input id="emergency-fee" type="number" defaultValue="150" />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Specialty Pricing</Label>
                <div className="space-y-2">
                  {[
                    { specialty: 'General Practitioner', fee: 45 },
                    { specialty: 'Dentist', fee: 60 },
                    { specialty: 'Cardiologist', fee: 120 },
                    { specialty: 'Dermatologist', fee: 90 },
                    { specialty: 'Pediatrician', fee: 55 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">{item.specialty}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">$</span>
                        <Input type="number" defaultValue={item.fee} className="w-20" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Update Pricing</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure platform behavior and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-approval">Auto-approve Doctor Registration</Label>
                  <p className="text-sm text-gray-500">Automatically approve new doctor registrations</p>
                </div>
                <Switch
                  id="auto-approval"
                  checked={autoApproval}
                  onCheckedChange={setAutoApproval}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <p className="text-sm text-gray-500">Put the platform in maintenance mode</p>
                </div>
                <Switch
                  id="maintenance-mode"
                  checked={maintenanceMode}
                  onCheckedChange={setMaintenanceMode}
                />
              </div>
              <Separator />
              <div className="space-y-4">
                <Label>Security Settings</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input id="session-timeout" type="number" defaultValue="30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                    <Input id="password-expiry" type="number" defaultValue="90" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <Label>Data Management</Label>
                <div className="flex gap-4">
                  <Button variant="outline">Export User Data</Button>
                  <Button variant="outline">Backup Database</Button>
                  <Button variant="outline" className="text-red-600 border-red-200">Clear Cache</Button>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
