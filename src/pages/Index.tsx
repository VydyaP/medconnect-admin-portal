
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, UserCog, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-[#3EB489] to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">MedCare Platform</h1>
          <p className="text-gray-600">Professional Healthcare Management System</p>
        </div>
        
        <div className="space-y-4">
          <Link to="/dashboard" className="block">
            <Button className="w-full bg-[#3EB489] hover:bg-[#35A078] text-white py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm">
              <UserCog className="h-5 w-5 mr-2" />
              User Dashboard
            </Button>
          </Link>
          
          <Link to="/admin-panel" className="block">
            <Button className="w-full bg-gradient-to-r from-[#3EB489] to-emerald-500 hover:from-[#35A078] hover:to-emerald-600 text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-sm">
              <Shield className="h-5 w-5 mr-2" />
              Admin Panel
            </Button>
          </Link>
          
          <Link to="/auth" className="block">
            <Button variant="outline" className="w-full py-3 rounded-lg border-2 border-gray-200 hover:border-[#3EB489] hover:text-[#3EB489] transition-colors duration-200 font-medium">
              Login / Register
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Secure • Reliable • Professional</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
