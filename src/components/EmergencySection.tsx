
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Phone, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EmergencySection = () => {
  const navigate = useNavigate();

  const handleEmergencyCall = () => {
    // In a real app, this would initiate an emergency call
    window.open("tel:+15559111435", "_self");
  };

  const handleDirections = () => {
    // Open Google Maps with hospital location
    window.open("https://maps.google.com/?q=123+Medical+Center+Drive+Healthcare+City", "_blank");
  };

  const handleEmergencyTips = () => {
    navigate("/emergency");
  };

  return (
    <section className="py-8 md:py-20 px-4 bg-red-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            24/7 Emergency Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our emergency department is always ready to provide immediate medical care when you need it most
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <Card className="bg-white border-0 shadow-lg w-full">
              <CardContent className="p-4 md:p-8">
                <div className="flex items-center space-x-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Plus className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">Emergency Hotline</h3>
                    <p className="text-sm md:text-base text-gray-600">Available 24/7 for immediate assistance</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
                    <span className="text-lg md:text-2xl font-bold text-red-600">+1 (555) 911-HELP</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                    <span className="text-sm md:text-base text-gray-700">123 Medical Center Drive, Healthcare City</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                    <span className="text-sm md:text-base text-gray-700">Average response time: 8 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <Card className="bg-white border-0 shadow-lg text-center p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-sm md:text-base text-gray-700">Emergency Care</div>
              </Card>
              <Card className="bg-white border-0 shadow-lg text-center p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">8 min</div>
                <div className="text-sm md:text-base text-gray-700">Avg Response</div>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg w-full">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Plus className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 text-center">
              Need Immediate Help?
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 text-center">
              Our emergency department is equipped with state-of-the-art facilities and experienced medical staff ready to handle any medical emergency.
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white text-sm md:text-lg py-3 md:py-4"
                onClick={handleEmergencyCall}
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Call Emergency: +1 (555) 911-HELP
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-red-600 text-red-600 hover:bg-red-50 text-sm md:text-lg py-3 md:py-4"
                onClick={handleDirections}
              >
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Get Directions
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-sm md:text-lg py-3 md:py-4"
                onClick={handleEmergencyTips}
              >
                Emergency Preparedness Tips
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
