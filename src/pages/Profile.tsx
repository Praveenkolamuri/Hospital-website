
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, FileText, Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

const Profile = () => {
  const userProfile = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    dateOfBirth: "January 15, 1985",
    bloodType: "A+",
    allergies: ["Peanuts", "Penicillin"],
    emergencyContact: "Jane Smith - +1 (555) 987-6543"
  };

  const recentAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Chen",
      specialty: "Cardiologist",
      date: "2024-01-15",
      time: "2:00 PM",
      status: "Completed"
    },
    {
      id: 2,
      doctor: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      date: "2024-01-10",
      time: "10:00 AM",
      status: "Completed"
    }
  ];

  const upcomingAppointments = [
    {
      id: 3,
      doctor: "Dr. Michael Johnson",
      specialty: "Neurologist",
      date: "2024-01-25",
      time: "3:00 PM",
      status: "Scheduled"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">My Profile</h1>
                <p className="text-xl">Welcome back, {userProfile.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Personal Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Full Name</label>
                      <p className="text-lg font-semibold">{userProfile.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                      <p className="text-lg">{userProfile.dateOfBirth}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-lg flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {userProfile.email}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Phone</label>
                      <p className="text-lg flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {userProfile.phone}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-600">Address</label>
                      <p className="text-lg flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {userProfile.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Medical Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Blood Type</label>
                      <Badge className="bg-red-100 text-red-800 text-lg px-3 py-1">
                        {userProfile.bloodType}
                      </Badge>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Emergency Contact</label>
                      <p className="text-lg">{userProfile.emergencyContact}</p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-600">Known Allergies</label>
                      <div className="flex gap-2 mt-1">
                        {userProfile.allergies.map((allergy, index) => (
                          <Badge key={index} variant="outline" className="text-orange-600 border-orange-600">
                            {allergy}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Appointments Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-semibold">{appointment.doctor}</h4>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {appointment.date} at {appointment.time}
                      </p>
                      <Badge className="bg-green-100 text-green-800 text-xs mt-2">
                        {appointment.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Recent Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAppointments.map((appointment) => (
                    <div key={appointment.id} className="border-l-4 border-gray-300 pl-4 py-2">
                      <h4 className="font-semibold">{appointment.doctor}</h4>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {appointment.date} at {appointment.time}
                      </p>
                      <Badge className="bg-gray-100 text-gray-800 text-xs mt-2">
                        {appointment.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book New Appointment
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Health Records
                  </Button>
                  <Button variant="outline" className="w-full">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
