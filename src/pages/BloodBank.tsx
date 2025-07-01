
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Heart, MapPin, Clock, Phone, User, Calendar, Shield } from "lucide-react";

const BloodBank = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const bloodInventory = [
    {
      id: 1,
      bloodType: "O+",
      availability: "High",
      units: 45,
      location: "Main Blood Bank",
      lastDonation: "2 hours ago",
      urgency: "normal",
      compatible: ["O+", "A+", "B+", "AB+"]
    },
    {
      id: 2,
      bloodType: "O-",
      availability: "Critical",
      units: 8,
      location: "Main Blood Bank",
      lastDonation: "6 hours ago",
      urgency: "critical",
      compatible: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"]
    },
    {
      id: 3,
      bloodType: "A+",
      availability: "Moderate",
      units: 22,
      location: "Emergency Wing",
      lastDonation: "4 hours ago",
      urgency: "moderate",
      compatible: ["A+", "AB+"]
    },
    {
      id: 4,
      bloodType: "A-",
      availability: "Low",
      units: 12,
      location: "Main Blood Bank",
      lastDonation: "8 hours ago",
      urgency: "low",
      compatible: ["A-", "A+", "AB-", "AB+"]
    },
    {
      id: 5,
      bloodType: "B+",
      availability: "High",
      units: 38,
      location: "Surgery Wing",
      lastDonation: "1 hour ago",
      urgency: "normal",
      compatible: ["B+", "AB+"]
    },
    {
      id: 6,
      bloodType: "B-",
      availability: "Critical",
      units: 6,
      location: "Main Blood Bank",
      lastDonation: "12 hours ago",
      urgency: "critical",
      compatible: ["B-", "B+", "AB-", "AB+"]
    },
    {
      id: 7,
      bloodType: "AB+",
      availability: "Moderate",
      units: 18,
      location: "ICU Wing",
      lastDonation: "3 hours ago",
      urgency: "moderate",
      compatible: ["AB+"]
    },
    {
      id: 8,
      bloodType: "AB-",
      availability: "Low",
      units: 9,
      location: "Main Blood Bank",
      lastDonation: "10 hours ago",
      urgency: "low",
      compatible: ["AB-", "AB+"]
    }
  ];

  const donors = [
    {
      id: 1,
      name: "John Smith",
      age: 32,
      bloodType: "O+",
      location: "Downtown",
      lastDonation: "3 months ago",
      totalDonations: 15,
      available: true,
      verified: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 28,
      bloodType: "O-",
      location: "Central City",
      lastDonation: "2 months ago",
      totalDonations: 22,
      available: true,
      verified: true
    },
    {
      id: 3,
      name: "Michael Chen",
      age: 35,
      bloodType: "A+",
      location: "North Side",
      lastDonation: "4 months ago",
      totalDonations: 8,
      available: true,
      verified: true
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 26,
      bloodType: "B-",
      location: "East District",
      lastDonation: "1 month ago",
      totalDonations: 12,
      available: false,
      verified: true
    }
  ];

  const bloodTypes = ["all", "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
  const locations = ["all", "Main Blood Bank", "Emergency Wing", "Surgery Wing", "ICU Wing"];

  const filteredInventory = bloodInventory.filter(item => {
    const matchesSearch = item.bloodType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedBloodType === "all" || item.bloodType === selectedBloodType;
    const matchesLocation = selectedLocation === "all" || item.location === selectedLocation;
    
    return matchesSearch && matchesType && matchesLocation;
  });

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "High": return "bg-green-100 text-green-800";
      case "Moderate": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-orange-100 text-orange-800";
      case "Critical": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "critical": return "bg-red-500";
      case "low": return "bg-orange-500";
      case "moderate": return "bg-yellow-500";
      case "normal": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Blood Bank Services</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Save lives through blood donation. Find blood donors, request blood units, 
              and register as a donor to help patients in need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Heart className="h-4 w-4" />
                500+ Active Donors
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Safe & Tested
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                24/7 Emergency
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Donate Blood</h3>
                  <p className="text-gray-600 mb-4">Register as a blood donor and save lives</p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Register as Donor
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Request Blood</h3>
                  <p className="text-gray-600 mb-4">Find and request blood units for patients</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Request Blood
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Help</h3>
                  <p className="text-gray-600 mb-4">24/7 emergency blood request hotline</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Call Emergency
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Blood Inventory Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blood Inventory</h2>
            <p className="text-gray-600">Current blood stock levels and availability</p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search blood type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              
              <Select value={selectedBloodType} onValueChange={setSelectedBloodType}>
                <SelectTrigger className="h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Blood Type" />
                </SelectTrigger>
                <SelectContent>
                  {bloodTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Blood Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredInventory.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border-0">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <span className="text-2xl font-bold text-red-600">{item.bloodType}</span>
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getUrgencyColor(item.urgency)}`}></div>
                    </div>
                    <Badge className={getAvailabilityColor(item.availability)}>
                      {item.availability}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">{item.units}</div>
                    <div className="text-sm text-gray-600">units available</div>
                  </div>

                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Last donation: {item.lastDonation}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-500 mb-2">Compatible with:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.compatible.slice(0, 4).map((type, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full font-semibold ${
                      item.urgency === "critical" 
                        ? "bg-red-600 hover:bg-red-700" 
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
                  >
                    Request Blood
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Donors Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Active Donors</h2>
            <p className="text-gray-600 mb-6">Connect with verified blood donors in your area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donors.map((donor) => (
              <Card key={donor.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border-0">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-8 w-8 text-gray-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{donor.name}</h3>
                    <p className="text-gray-600 text-sm">{donor.age} years old</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Blood Type:</span>
                      <Badge className="bg-red-100 text-red-800">{donor.bloodType}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{donor.location}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Last Donation:</span>
                      <span className="font-medium">{donor.lastDonation}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Donations:</span>
                      <span className="font-medium">{donor.totalDonations}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    {donor.verified && (
                      <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                    )}
                    <Badge className={donor.available ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}>
                      {donor.available ? "Available" : "Not Available"}
                    </Badge>
                  </div>

                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                    disabled={!donor.available}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Donor
                  </Button>
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

export default BloodBank;
