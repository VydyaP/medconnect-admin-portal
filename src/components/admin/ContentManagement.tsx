
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Save, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      question: "How do I book an appointment?",
      answer: "You can book an appointment by navigating to the 'Book' section and selecting your preferred doctor and time slot.",
      category: "Appointments",
      status: "published"
    },
    {
      id: 2,
      question: "Is my medical information secure?",
      answer: "Yes, we use end-to-end encryption and comply with HIPAA regulations to ensure your medical information is completely secure.",
      category: "Privacy",
      status: "published"
    },
    {
      id: 3,
      question: "How does the MedBot work?",
      answer: "MedBot uses advanced AI to provide preliminary medical guidance. It's designed to help you understand symptoms but not replace professional medical advice.",
      category: "Technology",
      status: "draft"
    }
  ];

  const chatbotResponses = [
    {
      id: 1,
      trigger: "hello",
      response: "Hello! I'm MedBot, your AI health assistant. How can I help you today?",
      category: "Greetings",
      status: "active"
    },
    {
      id: 2,
      trigger: "headache",
      response: "I understand you're experiencing a headache. Can you tell me more about the pain? Is it throbbing, sharp, or dull?",
      category: "Symptoms",
      status: "active"
    },
    {
      id: 3,
      trigger: "emergency",
      response: "If you're experiencing a medical emergency, please call 911 immediately. I can help with non-emergency health questions.",
      category: "Emergency",
      status: "active"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Telemedicine",
      author: "Dr. Sarah Wilson",
      publishDate: "2024-06-15",
      status: "published",
      category: "Education"
    },
    {
      id: 2,
      title: "Managing Stress and Anxiety",
      author: "Dr. Michael Chen",
      publishDate: "2024-06-10",
      status: "published",
      category: "Mental Health"
    },
    {
      id: 3,
      title: "Heart Health Tips",
      author: "Dr. Emily Rodriguez",
      publishDate: "2024-06-08",
      status: "draft",
      category: "Cardiology"
    }
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="faqs" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="chatbot">Chatbot Responses</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
        </TabsList>

        <TabsContent value="faqs" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add FAQ
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New FAQ</DialogTitle>
                  <DialogDescription>Create a new frequently asked question</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="question">Question</Label>
                    <Input id="question" placeholder="Enter the question..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="answer">Answer</Label>
                    <Textarea id="answer" placeholder="Enter the answer..." rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appointments">Appointments</SelectItem>
                        <SelectItem value="privacy">Privacy</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="billing">Billing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save FAQ</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      <CardDescription>Category: {faq.category} • Status: {faq.status}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="chatbot" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search responses..."
                  className="pl-10"
                />
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Response
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add Chatbot Response</DialogTitle>
                  <DialogDescription>Create a new automated response for the chatbot</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="trigger">Trigger Keywords</Label>
                    <Input id="trigger" placeholder="Enter keywords that trigger this response..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="response">Response</Label>
                    <Textarea id="response" placeholder="Enter the chatbot response..." rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="response-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="greetings">Greetings</SelectItem>
                        <SelectItem value="symptoms">Symptoms</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Response</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {chatbotResponses.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Trigger: "{item.trigger}"</CardTitle>
                      <CardDescription>Category: {item.category} • Status: {item.status}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.response}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Article
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Article</DialogTitle>
                  <DialogDescription>Create a new informational article</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="article-title">Title</Label>
                      <Input id="article-title" placeholder="Enter article title..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="article-author">Author</Label>
                      <Input id="article-author" placeholder="Author name..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="article-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="mental-health">Mental Health</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="general">General Health</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="article-content">Content</Label>
                    <Textarea id="article-content" placeholder="Write your article content..." rows={8} />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Publish Article</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription>By {article.author}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Published: {article.publishDate}</div>
                    <div className="text-sm">Category: {article.category}</div>
                    <div className="text-sm">Status: 
                      <span className={`ml-1 px-2 py-1 rounded text-xs ${
                        article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {article.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
