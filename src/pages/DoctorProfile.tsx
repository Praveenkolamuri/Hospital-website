
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, Phone, MapPin, GraduationCap, Award } from "lucide-react";

const DoctorProfile = () => {
  const { id } = useParams();

  // Mock doctor data - in a real app, this would be fetched based on the ID
  const doctor = {
    id: 1,
    name: "Dr. Sarah Chen",
    specialty: "Cardiologist",
    experience: "15 years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    nextAvailable: "Today 2:00 PM",
    consultationFee: 150,
    patients: "2,500+",
    location: "Cardiac Wing, Floor 3",
    education: "MD, Harvard Medical School",
    languages: ["English", "Mandarin"],
    bio: "Dr. Sarah Chen is a board-certified cardiologist with over 15 years of experience in cardiovascular medicine. She specializes in preventive cardiology, heart failure management, and interventional procedures.",
    qualifications: [
      "MD - Harvard Medical School (2008)",
      "Residency - Internal Medicine, Johns Hopkins (2011)",
      "Fellowship - Cardiology, Mayo Clinic (2014)",
      "Board Certified - American Board of Internal Medicine"
    ],
    specializations: [
      "Preventive Cardiology",
      "Heart Failure Management",
      "Interventional Cardiology",
      "Cardiac Imaging",
      "Hypertension Management"
    ],
    awards: [
      "Top Doctor Award 2023",
      "Excellence in Patient Care 2022",
      "Research Innovation Award 2021"
    ]
  };

  const availableSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Doctor Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{doctor.name}</h1>
                <p className="text-xl text-blue-100 mb-4">{doctor.specialty}</p>
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-current" />
                    {doctor.rating}
                  </Badge>
                  <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                    {doctor.patients} patients
                  </Badge>
                  <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                    {doctor.experience} experience
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Details */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About Dr. {doctor.name.split(' ')[1]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
                </CardContent>
              </Card>

              {/* Education & Qualifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education & Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {doctor.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card>
                <CardHeader>
                  <CardTitle>Specializations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-blue-600 border-blue-600">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Awards & Recognition */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {doctor.awards.map((award, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-green-600 font-medium">{doctor.nextAvailable}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{doctor.patients} patients treated</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-2xl font-bold text-gray-900">${doctor.consultationFee}</p>
                    <p className="text-sm text-gray-600">Consultation Fee</p>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle>Languages Spoken</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((language, index) => (
                      <Badge key={index} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Available Times */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Today</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {availableSlots.map((slot, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="w-full justify-center"
                    >
                      {slot}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Doctor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
