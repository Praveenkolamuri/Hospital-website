
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Home, FileText, CheckCircle } from "lucide-react";

const BookTest = () => {
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({
    testName: "Complete Blood Count (CBC)",
    patientName: "",
    phone: "",
    email: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    homeCollection: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          <div className="max-w-2xl mx-auto px-4 py-16 text-center">
            <CheckCircle className="h-24 w-24 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Booked Successfully!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your {formData.testName} has been scheduled. You'll receive a confirmation SMS and email shortly.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Booking Details</h2>
              <div className="space-y-2 text-left">
                <p><strong>Test:</strong> {formData.testName}</p>
                <p><strong>Patient:</strong> {formData.patientName}</p>
                <p><strong>Date:</strong> {formData.preferredDate}</p>
                <p><strong>Time:</strong> {formData.preferredTime}</p>
                <p><strong>Collection:</strong> {formData.homeCollection ? "Home Collection" : "Lab Visit"}</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Book Lab Test</h1>
            <p className="text-xl">Schedule your diagnostic test with home collection</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Test Booking Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="testName">Selected Test</Label>
                  <Input
                    id="testName"
                    value={formData.testName}
                    readOnly
                    className="bg-gray-100"
                  />
                </div>

                <div>
                  <Label htmlFor="patientName">Patient Name *</Label>
                  <Input
                    id="patientName"
                    value={formData.patientName}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address for Home Collection</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Input
                      id="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="homeCollection"
                    checked={formData.homeCollection}
                    onChange={(e) => setFormData({...formData, homeCollection: e.target.checked})}
                  />
                  <Label htmlFor="homeCollection" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Home Collection (Free)
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Test Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookTest;
