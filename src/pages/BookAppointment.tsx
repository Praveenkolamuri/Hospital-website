
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, MapPin } from "lucide-react";

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");

  const doctors = [
    { id: "1", name: "Dr. Sarah Chen", specialty: "Cardiologist", fee: 150 },
    { id: "2", name: "Dr. Michael Johnson", specialty: "Neurologist", fee: 200 },
    { id: "3", name: "Dr. Emily Rodriguez", specialty: "Pediatrician", fee: 120 },
    { id: "4", name: "Dr. James Wilson", specialty: "Orthopedic Surgeon", fee: 250 },
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleBookAppointment = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime || !patientName || !patientPhone) {
      alert("Please fill in all required fields");
      return;
    }
    
    const doctor = doctors.find(d => d.id === selectedDoctor);
    alert(`✅ Appointment Booked Successfully!\n\nDoctor: ${doctor?.name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nPatient: ${patientName}\nConsultation Fee: $${doctor?.fee}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Book Appointment</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Schedule your consultation with our expert doctors. Choose your preferred date, time, and specialist.
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Schedule Your Appointment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Doctor *</label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.id}>
                          {doctor.name} - {doctor.specialty} (${doctor.fee})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Date *</label>
                  <Input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Available Time Slots *</label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Patient Name *</label>
                  <Input 
                    placeholder="Enter full name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <Input 
                    placeholder="Enter phone number"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="Enter email address"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="pt-6 border-t">
                <Button 
                  onClick={handleBookAppointment}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
