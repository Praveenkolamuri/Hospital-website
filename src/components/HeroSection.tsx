
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, FileText, Hospital, Search, MapPin, Clock, Heart, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule with top doctors",
      color: "bg-blue-500",
      path: "/doctors"
    },
    {
      icon: FileText,
      title: "Order Medicine",
      description: "Get medicines delivered",
      color: "bg-green-500",
      path: "/pharmacy"
    },
    {
      icon: Hospital,
      title: "Lab Tests",
      description: "Book diagnostic tests",
      color: "bg-purple-500",
      path: "/lab-tests"
    },
    {
      icon: Users,
      title: "Health Records",
      description: "Manage your health data",
      color: "bg-orange-500",
      path: "/health-records"
    }
  ];

  const stats = [
    { value: "500+", label: "Expert Doctors", icon: Users },
    { value: "50K+", label: "Happy Patients", icon: Heart },
    { value: "24/7", label: "Emergency Care", icon: Clock },
    { value: "25+", label: "Years Experience", icon: Hospital }
  ];

  const handleSearch = () => {
    navigate("/doctors");
  };

  const handleQuickAction = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative py-8 md:py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 w-full overflow-hidden">
      {/* Background Elements - Contained within section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 md:w-48 md:h-48 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-40 md:h-40 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6 px-2">
            Your Health is Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
              {" "}Priority
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8 px-4">
            Experience world-class healthcare services with cutting-edge technology, 
            compassionate care, and comprehensive medical solutions - all under one roof.
          </p>

          {/* Quick Search */}
          <div className="max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white rounded-2xl p-3 md:p-4 shadow-lg border border-gray-200">
              <Search className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
              <Input 
                placeholder="Search doctors, specialties, or services..." 
                className="flex-1 border-0 focus:ring-0 text-sm md:text-base"
              />
              <Button 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/doctors")}
            >
              <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-2xl"
              onClick={() => navigate("/emergency")}
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Emergency Care
            </Button>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12 px-4">
          {quickActions.map((action, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-2 w-full"
              onClick={() => handleQuickAction(action.path)}
            >
              <CardContent className="p-3 md:p-6 text-center space-y-2 md:space-y-4">
                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${action.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <action.icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-xs md:text-base">{action.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{action.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg">
              <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
