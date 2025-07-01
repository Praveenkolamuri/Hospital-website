
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Star, Search, Filter, MapPin, Phone } from "lucide-react";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

  const doctors = [
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
      location: "Cardiac Wing, Floor 3",
      education: "MD, Harvard Medical School",
      languages: ["English", "Mandarin"]
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
      location: "Neurology Center, Floor 2",
      education: "MD, Johns Hopkins",
      languages: ["English", "Spanish"]
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
      location: "Children's Wing, Floor 1",
      education: "MD, Stanford University",
      languages: ["English", "Spanish"]
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
      location: "Orthopedic Center, Floor 4",
      education: "MD, Mayo Clinic",
      languages: ["English"]
    },
    {
      id: 5,
      name: "Dr. Mahesh",
      specialty: "Dermatologist",
      experience: "8 years",
      rating: 4.8,
      image: "https://pbs.twimg.com/media/Eb0xxgVU0AARDvS.jpg",
      nextAvailable: "Today 1:00 PM",
      consultationFee: 130,
      patients: "1,500+",
      location: "Dermatology Clinic, Floor 2",
      education: "MD, UCLA",
      languages: ["English", "French"]
    },
    {
      id: 6,
      name: "Dr. Thalapathy vijay",
      specialty: "Gastroenterologist",
      experience: "14 years",
      rating: 4.6,
      image: "https://pbs.twimg.com/media/EQ-B9NPU8AAxj8q?format=jpg&name=900x900",
      nextAvailable: "Tomorrow 9:00 AM",
      consultationFee: 180,
      patients: "2,800+",
      location: "GI Center, Floor 3",
      education: "MD, Yale University",
      languages: ["English", "Korean"]
    },
    {
      id: 7,
      name: "Dr. Roshni",
      specialty: "Psychiatrist",
      experience: "11 years",
      rating: 4.9,
      image: "https://i.pinimg.com/736x/66/07/2b/66072b11a530a0c6f3101c4db5a01ce5.jpg",
      nextAvailable: "Today 11:00 AM",
      consultationFee: 160,
      patients: "2,200+",
      location: "Mental Health Center, Floor 1",
      education: "MD, Columbia University",
      languages: ["English"]
    },
    {
      id: 8,
      name: "Dr. Nani",
      specialty: "Ophthalmologist",
      experience: "16 years",
      rating: 4.7,
      image: "https://pbs.twimg.com/media/DwToBkKVsAAjxLr.jpg:large",
      nextAvailable: "Tomorrow 2:00 PM",
      consultationFee: 140,
      patients: "3,500+",
      location: "Eye Care Center, Floor 2",
      education: "MD, University of Michigan",
      languages: ["English", "Chinese"]
    },
    {
      id: 9,
      name: "Dr. samantha",
      specialty: "Gynecologist",
      experience: "13 years",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/30/e7/9a/30e79a3a7ac47f4da481651b0feeade8.jpg",
      nextAvailable: "Today 3:00 PM",
      consultationFee: 170,
      patients: "2,900+",
      location: "Women's Health, Floor 3",
      education: "MD, University of Texas",
      languages: ["English", "Spanish"]
    },
    {
      id: 10,
      name: "Dr. Nikhil sidharth",
      specialty: "Radiologist",
      experience: "9 years",
      rating: 4.6,
      image: "https://igimage.indiaglitz.com/tamil/gallery/movies/karthikeyan4314ygh/Karthikeyan-ms_18614_58.jpg",
      nextAvailable: "Tomorrow 10:30 AM",
      consultationFee: 190,
      patients: "1,700+",
      location: "Imaging Center, Floor 1",
      education: "MD, Duke University",
      languages: ["English", "Mandarin"]
    },
    {
      id: 11,
      name: "Dr. Trisha Krishnan",
      specialty: "Endocrinologist",
      experience: "12 years",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/37/b3/7d/37b37d9a4686332934bb423c33a91b33.jpg",
      nextAvailable: "Today 5:00 PM",
      consultationFee: 175,
      patients: "2,100+",
      location: "Endocrine Center, Floor 4",
      education: "MD, Northwestern University",
      languages: ["English"]
    },
    {
      id: 12,
      name: "Dr.Rakul Preet Singh",
      specialty: "Urologist",
      experience: "10 years",
      rating: 4.7,
      image: "https://www.bollywoodhungama.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-17-at-5.17.03-PM-1.jpeg",
      nextAvailable: "Tomorrow 1:30 PM",
      consultationFee: 165,
      patients: "1,900+",
      location: "Urology Department, Floor 3",
      education: "MD, Emory University",
      languages: ["English", "Spanish"]
    }
  ];

  const specialties = ["all", "Cardiologist", "Neurologist", "Pediatrician", "Orthopedic Surgeon", "Dermatologist", "Gastroenterologist", "Psychiatrist", "Ophthalmologist", "Gynecologist", "Radiologist", "Endocrinologist", "Urologist"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    const matchesExperience = selectedExperience === "all" || 
                             (selectedExperience === "5-10" && parseInt(doctor.experience) >= 5 && parseInt(doctor.experience) <= 10) ||
                             (selectedExperience === "10+" && parseInt(doctor.experience) > 10);
    
    return matchesSearch && matchesSpecialty && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Find Expert Doctors</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Book appointments with our certified specialists across 40+ medical fields. 
              Experience world-class healthcare with compassionate doctors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">500+ Doctors</Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">40+ Specialties</Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">24/7 Available</Badge>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search doctors by name or specialty..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
              </div>
              
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select Specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map(specialty => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty === "all" ? "All Specialties" : specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Experience</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Available Doctors ({filteredDoctors.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white border-0">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white font-semibold flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{doctor.rating}</span>
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 font-semibold">
                        {doctor.patients} patients
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
                      <p className="text-gray-600 text-sm">{doctor.education}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{doctor.experience} experience</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-green-600 font-medium">{doctor.nextAvailable}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {doctor.languages.map((lang, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm border-t pt-4">
                      <div className="text-gray-900 font-bold text-lg">
                        ${doctor.consultationFee}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        <Calendar className="h-4 w-4 mr-1" />
                        Book Now
                      </Button>
                      <Button variant="outline" className="px-4 border-blue-600 text-blue-600 hover:bg-blue-50">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
