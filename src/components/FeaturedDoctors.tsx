
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FeaturedDoctors = () => {
  const navigate = useNavigate();

  const featuredDoctors = [
    {
      id: 1,
      name: "Dr. Reena",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.9,
      image: "https://dtnext-prod-new.s3.ap-south-1.amazonaws.com/h-upload/2025/05/04/750x450_863176-untitled1.jpg",
      nextAvailable: "Today 2:00 PM",
      consultationFee: 150,
      patients: "2,500+",
      phone: "+1 (555) 123-0001"
    },
    {
      id: 2,
      name: "Dr. shiva Karthik",
      specialty: "Neurologist",
      experience: "12 years",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/d0/c9/48/d0c948048d6e2d5a38cd17fd3ab274c0.jpg",
      nextAvailable: "Tomorrow 10:00 AM",
      consultationFee: 200,
      patients: "3,200+",
      phone: "+1 (555) 123-0002"
    },
    {
      id: 3,
      name: "Dr. Teju",
      specialty: "Pediatrician",
      experience: "10 years",
      rating: 4.9,
      image: "https://i.ytimg.com/vi/yV1j6Mx7DjQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEwgWihlMA8=&rs=AOn4CLCChClX3-Sxz0ndAx9Anu_BsKEhbg",
      nextAvailable: "Today 4:30 PM",
      consultationFee: 120,
      patients: "1,800+",
      phone: "+1 (555) 123-0003"
    },
    {
      id: 4,
      name: "Dr. Arjun Reddy",
      specialty: "Orthopedic Surgeon",
      experience: "18 years",
      rating: 4.7,
      image: "https://i.pinimg.com/736x/b7/36/7a/b7367a08b751c562f0ab320815ce10b7.jpg",
      nextAvailable: "Tomorrow 3:00 PM",
      consultationFee: 250,
      patients: "4,100+",
      phone: "+1 (555) 123-0004"
    }
  ];

  const handleBookAppointment = (e: React.MouseEvent, doctorId: number) => {
    e.stopPropagation();
    console.log(`Booking appointment with doctor ID: ${doctorId}`);
    // Since we removed the book-appointment route, let's show an alert for now
    alert(`📅 Booking appointment with doctor ID: ${doctorId}\nThis feature will be available soon!`);
  };

  const handleViewProfile = (e: React.MouseEvent, doctorId: number) => {
    e.stopPropagation();
    console.log(`Viewing profile for doctor ID: ${doctorId}`);
    navigate(`/doctor/${doctorId}`);
  };

  const handleCallDoctor = (e: React.MouseEvent, doctorId: number) => {
    e.stopPropagation();
    const doctor = featuredDoctors.find(d => d.id === doctorId);
    if (doctor) {
      console.log(`Calling ${doctor.name}`);
      alert(`📞 Calling ${doctor.name}\nPhone: ${doctor.phone}\nSpecialty: ${doctor.specialty}`);
    }
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full max-w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Top Rated</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Meet Our Expert Doctors
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Book appointments with our highly qualified and experienced medical professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
          {featuredDoctors.map((doctor) => (
            <Card key={doctor.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white border-0 w-full max-w-full">
              <CardContent className="p-0">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500 text-white font-semibold flex items-center space-x-1 text-xs">
                      <Star className="h-3 w-3 fill-current" />
                      <span>{doctor.rating}</span>
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-white/90 text-gray-900 font-semibold text-xs">
                      {doctor.patients} patients
                    </Badge>
                  </div>
                </div>

                <div className="p-3 md:p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm md:text-base">{doctor.specialty}</p>
                    <p className="text-gray-600 text-xs md:text-sm flex items-center">
                      <Users className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      {doctor.experience} experience
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs md:text-sm border-t pt-3">
                    <div className="flex items-center text-green-600">
                      <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      <span className="font-medium">{doctor.nextAvailable}</span>
                    </div>
                    <div className="text-gray-900 font-bold text-sm md:text-base">
                      ${doctor.consultationFee}
                    </div>
                  </div>

                  <div className="flex gap-2 w-full">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2"
                      onClick={(e) => handleBookAppointment(e, doctor.id)}
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      Book Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="px-2 md:px-3 border-blue-600 text-blue-600 hover:bg-blue-50 text-xs"
                      onClick={(e) => handleViewProfile(e, doctor.id)}
                    >
                      Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      className="px-2 md:px-3 border-green-600 text-green-600 hover:bg-green-50"
                      onClick={(e) => handleCallDoctor(e, doctor.id)}
                    >
                      <Phone className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4"
            onClick={() => navigate("/doctors")}
          >
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};
