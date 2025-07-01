
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, FileText, Hospital, Plus, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ServicesGrid = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: "Doctor Consultation",
      description: "Book appointments with certified doctors across 40+ specialties",
      features: ["Video & In-person consultations", "Same-day appointments", "Prescription management"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      path: "/doctors"
    },
    {
      icon: FileText,
      title: "Online Pharmacy",
      description: "Order medicines online with guaranteed authenticity and fast delivery",
      features: ["Prescription upload", "Express delivery", "Genuine medicines"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      path: "/pharmacy"
    },
    {
      icon: Hospital,
      title: "Diagnostic Tests",
      description: "Book lab tests and health checkups with home sample collection",
      features: ["Home sample collection", "Digital reports", "Expert consultation"],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      path: "/lab-tests"
    },
    {
      icon: Plus,
      title: "Health Records",
      description: "Securely store and manage your medical history and documents",
      features: ["Secure cloud storage", "Easy sharing", "AI-powered insights"],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      path: "/health-records"
    },
    {
      icon: Check,
      title: "Insurance Services",
      description: "Compare and purchase health insurance plans that suit your needs",
      features: ["Plan comparison", "Easy claims", "Cashless treatment"],
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      path: "/insurance"
    },
    {
      icon: Calendar,
      title: "Blood Bank",
      description: "Find blood donors and request blood units for emergencies",
      features: ["Emergency requests", "Donor network", "Blood availability"],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      buttonColor: "bg-red-600 hover:bg-red-700",
      path: "/blood-bank"
    }
  ];

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Services</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultations to prescriptions, we provide comprehensive healthcare services 
            designed to make medical care accessible and convenient for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group ${service.color} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <Check className={`h-4 w-4 ${service.iconColor}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${service.buttonColor} text-white font-semibold`}
                  onClick={() => handleServiceClick(service.path)}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
