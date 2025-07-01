
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Hospital, Shield, Briefcase, Heart, Plus, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ServicesOverview = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: "Expert Doctors",
      description: "Consult with certified specialists across 40+ medical fields",
      count: "500+ Doctors",
      color: "from-blue-500 to-blue-600",
      path: "/doctors"
    },
    {
      icon: FileText,
      title: "Online Pharmacy",
      description: "Order authentic medicines with express delivery",
      count: "10,000+ Medicines",
      color: "from-green-500 to-green-600",
      path: "/pharmacy"
    },
    {
      icon: Hospital,
      title: "Lab Tests",
      description: "Comprehensive diagnostic tests with home collection",
      count: "200+ Tests",
      color: "from-purple-500 to-purple-600",
      path: "/lab-tests"
    },
    {
      icon: Plus,
      title: "Health Records",
      description: "Secure digital health record management",
      count: "AI-Powered",
      color: "from-orange-500 to-orange-600",
      path: "/health-records"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Comprehensive health insurance plans",
      count: "50+ Plans",
      color: "from-indigo-500 to-indigo-600",
      path: "/insurance"
    },
    {
      icon: Briefcase,
      title: "Careers",
      description: "Join our healthcare team",
      count: "100+ Openings",
      color: "from-teal-500 to-teal-600",
      path: "/careers"
    },
    {
      icon: Heart,
      title: "Blood Bank",
      description: "Life-saving blood donation services",
      count: "24/7 Available",
      color: "from-red-500 to-red-600",
      path: "/blood-bank"
    },
    {
      icon: Calendar,
      title: "Emergency Care",
      description: "Round-the-clock emergency medical services",
      count: "24/7 Support",
      color: "from-pink-500 to-pink-600",
      path: "/emergency"
    }
  ];

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  const handleExploreClick = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    navigate(path);
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Complete Healthcare Solutions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience world-class healthcare services designed to meet all your medical needs under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-white relative overflow-hidden w-full"
              onClick={() => handleServiceClick(service.path)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <CardContent className="p-4 md:p-6 text-center space-y-3 md:space-y-4 relative z-10">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{service.description}</p>
                  <div className={`text-xs md:text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.count}
                  </div>
                </div>
                <Button 
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold text-xs md:text-sm py-2`}
                  onClick={(e) => handleExploreClick(e, service.path)}
                >
                  Explore Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
