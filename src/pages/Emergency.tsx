
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, MapPin, Heart, Users, Ambulance, Shield, Stethoscope, Activity } from "lucide-react";

const Emergency = () => {
  const emergencyServices = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      description: "24/7 emergency medical assistance",
      contact: "+1 (555) 911-HELP",
      available: "Always Available"
    },
    {
      icon: Ambulance,
      title: "Ambulance Service",
      description: "Rapid response ambulance dispatch",
      contact: "+1 (555) 911-AMBU",
      available: "3-5 minutes"
    },
    {
      icon: Heart,
      title: "Cardiac Emergency",
      description: "Specialized cardiac emergency care",
      contact: "+1 (555) 911-CARD",
      available: "24/7 Cardiac Team"
    },
    {
      icon: Activity,
      title: "Trauma Center",
      description: "Level 1 trauma and critical care",
      contact: "+1 (555) 911-TRAUMA",
      available: "Immediate Response"
    }
  ];

  const emergencyDepartments = [
    {
      name: "Main Emergency Department",
      address: "123 Medical Center Drive, Healthcare City",
      phone: "+1 (555) 123-EMER",
      waitTime: "15 minutes",
      status: "Open",
      services: ["General Emergency", "Trauma Care", "Pediatric Emergency"]
    },
    {
      name: "North Campus Emergency",
      address: "456 North Medical Blvd, Healthcare City",
      phone: "+1 (555) 456-EMER",
      waitTime: "8 minutes",
      status: "Open",
      services: ["General Emergency", "Fast Track", "Mental Health Crisis"]
    },
    {
      name: "Children's Emergency Center",
      address: "789 Pediatric Way, Healthcare City",
      phone: "+1 (555) 789-KIDS",
      waitTime: "12 minutes",
      status: "Open",
      services: ["Pediatric Emergency", "NICU Transport", "Child Psychology"]
    }
  ];

  const urgentSymptoms = [
    "Chest pain or pressure",
    "Difficulty breathing",
    "Severe bleeding",
    "Loss of consciousness",
    "Severe allergic reaction",
    "Signs of stroke",
    "High fever with confusion",
    "Severe burns",
    "Poisoning",
    "Severe head injury"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Emergency Medical Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              When every second counts, our emergency team is ready to provide immediate, 
              life-saving medical care 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                24/7 Available
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Level 1 Trauma Center
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Expert Emergency Team
              </Badge>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
              <p className="text-xl text-gray-600">Call immediately if you're experiencing a medical emergency</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-red-200 hover:border-red-400">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                      <service.icon className="h-10 w-10 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-red-600 mb-2">{service.contact}</div>
                      <Badge className="bg-green-100 text-green-800">{service.available}</Badge>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Departments */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Department Locations</h2>
              <p className="text-xl text-gray-600">Find the nearest emergency department with current wait times</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {emergencyDepartments.map((dept, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <span className="text-gray-600">{dept.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900 font-semibold">{dept.phone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-green-500" />
                        <span className="text-green-600 font-semibold">Wait: {dept.waitTime}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{dept.status}</Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {dept.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* When to Call Emergency */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">When to Call Emergency Services</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Call 911 or our emergency hotline immediately if you or someone else is experiencing any of these symptoms:
                </p>
                <div className="grid gap-3">
                  {urgentSymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                    <Stethoscope className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Emergency Response Time</h3>
                    <p className="text-gray-600 mb-4">Our average emergency response time is under 3 minutes</p>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-4">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Emergency: 911
                    </Button>
                    <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                      Emergency Preparedness Tips
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;
