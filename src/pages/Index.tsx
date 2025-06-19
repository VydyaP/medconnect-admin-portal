
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, UserCog } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">MedCare Platform</h1>
          <p className="text-gray-600">Healthcare Management System</p>
        </div>
        
        <div className="space-y-4">
          <Link to="/dashboard" className="block">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
              <UserCog className="h-5 w-5 mr-2" />
              User Dashboard
            </Button>
          </Link>
          
          <Link to="/admin-panel" className="block">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
              <Shield className="h-5 w-5 mr-2" />
              Admin Panel
            </Button>
          </Link>
          
          <Link to="/auth" className="block">
            <Button variant="outline" className="w-full py-3">
              Login / Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
