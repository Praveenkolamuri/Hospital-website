
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Shield, Check, Star, Users, Phone } from "lucide-react";

const Insurance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCoverage, setSelectedCoverage] = useState("all");

  const insurancePlans = [
    {
      id: 1,
      name: "Basic Health Plan",
      type: "Individual",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 89,
      annualDeductible: 1500,
      maxCoverage: 50000,
      rating: 4.3,
      reviews: 456,
      features: ["Doctor Consultations", "Emergency Care", "Prescription Coverage", "Lab Tests"],
      popular: false,
      cashlessHospitals: 200
    },
    {
      id: 2,
      name: "Premium Health Plan",
      type: "Individual",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 149,
      annualDeductible: 1000,
      maxCoverage: 100000,
      rating: 4.7,
      reviews: 678,
      features: ["All Basic Features", "Specialist Consultations", "Dental Care", "Vision Care", "Mental Health"],
      popular: true,
      cashlessHospitals: 500
    },
    {
      id: 3,
      name: "Family Health Plan",
      type: "Family",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 299,
      annualDeductible: 2000,
      maxCoverage: 250000,
      rating: 4.6,
      reviews: 834,
      features: ["Covers 4 Family Members", "Maternity Coverage", "Child Vaccination", "Family Wellness"],
      popular: false,
      cashlessHospitals: 500
    },
    {
      id: 4,
      name: "Senior Citizen Plan",
      type: "Senior",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 199,
      annualDeductible: 500,
      maxCoverage: 150000,
      rating: 4.8,
      reviews: 234,
      features: ["No Age Limit", "Pre-existing Conditions", "Home Healthcare", "Ambulance Service"],
      popular: false,
      cashlessHospitals: 300
    },
    {
      id: 5,
      name: "Corporate Health Plan",
      type: "Corporate",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 125,
      annualDeductible: 750,
      maxCoverage: 200000,
      rating: 4.5,
      reviews: 567,
      features: ["Employee Coverage", "Annual Health Checkups", "Wellness Programs", "24/7 Support"],
      popular: false,
      cashlessHospitals: 600
    },
    {
      id: 6,
      name: "Critical Illness Plan",
      type: "Specialty",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 179,
      annualDeductible: 0,
      maxCoverage: 500000,
      rating: 4.4,
      reviews: 123,
      features: ["Cancer Coverage", "Heart Disease", "Stroke Coverage", "Lump Sum Payment"],
      popular: false,
      cashlessHospitals: 400
    },
    {
      id: 7,
      name: "Student Health Plan",
      type: "Student",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 45,
      annualDeductible: 1000,
      maxCoverage: 75000,
      rating: 4.2,
      reviews: 289,
      features: ["Affordable Premium", "Mental Health Support", "Sports Injury Coverage", "Telemedicine"],
      popular: false,
      cashlessHospitals: 250
    },
    {
      id: 8,
      name: "Maternity Plus Plan",
      type: "Specialty",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 225,
      annualDeductible: 500,
      maxCoverage: 100000,
      rating: 4.9,
      reviews: 345,
      features: ["Pregnancy Coverage", "Newborn Care", "Lactation Support", "Postnatal Care"],
      popular: false,
      cashlessHospitals: 350
    },
    {
      id: 9,
      name: "Dental & Vision Plan",
      type: "Specialty",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 35,
      annualDeductible: 0,
      maxCoverage: 25000,
      rating: 4.1,
      reviews: 156,
      features: ["Dental Checkups", "Eye Exams", "Prescription Glasses", "Dental Procedures"],
      popular: false,
      cashlessHospitals: 150
    },
    {
      id: 10,
      name: "International Coverage",
      type: "Travel",
      provider: "MediCare Plus Insurance",
      monthlyPremium: 95,
      annualDeductible: 2000,
      maxCoverage: 1000000,
      rating: 4.6,
      reviews: 78,
      features: ["Worldwide Coverage", "Emergency Evacuation", "Travel Assistance", "Trip Cancellation"],
      popular: false,
      cashlessHospitals: 1000
    }
  ];

  const planTypes = ["all", "Individual", "Family", "Senior", "Corporate", "Specialty", "Student", "Travel"];
  const coverageRanges = ["all", "0-75k", "75k-150k", "150k+"];

  const filteredPlans = insurancePlans.filter(plan => {
    const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plan.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || plan.type === selectedType;
    const matchesCoverage = selectedCoverage === "all" || 
                           (selectedCoverage === "0-75k" && plan.maxCoverage <= 75000) ||
                           (selectedCoverage === "75k-150k" && plan.maxCoverage > 75000 && plan.maxCoverage <= 150000) ||
                           (selectedCoverage === "150k+" && plan.maxCoverage > 150000);
    
    return matchesSearch && matchesType && matchesCoverage;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Health Insurance Plans</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Protect your health and finances with comprehensive insurance coverage. 
              Choose from a wide range of plans designed for every need and budget.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Cashless Treatment
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                600+ Network Hospitals
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                24/7 Claim Support
              </Badge>
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
                    placeholder="Search insurance plans..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Plan Type" />
                </SelectTrigger>
                <SelectContent>
                  {planTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCoverage} onValueChange={setSelectedCoverage}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Coverage Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Coverage</SelectItem>
                  <SelectItem value="0-75k">Up to $75k</SelectItem>
                  <SelectItem value="75k-150k">$75k - $150k</SelectItem>
                  <SelectItem value="150k+">$150k+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Insurance Plans ({filteredPlans.length})
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPlans.map((plan) => (
              <Card key={plan.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white border-0 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-indigo-500 text-white font-semibold">Most Popular</Badge>
                  </div>
                )}
                
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-indigo-100 text-indigo-800 mb-3">{plan.type}</Badge>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600 mt-1">{plan.provider}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{plan.rating}</span>
                        <span className="text-gray-500 text-sm">({plan.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">${plan.monthlyPremium}</div>
                      <div className="text-sm text-gray-600">per month</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl font-bold text-gray-900">${plan.annualDeductible}</div>
                      <div className="text-sm text-gray-600">deductible</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl font-bold text-green-600">${plan.maxCoverage.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">max coverage</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
                    <span>{plan.cashlessHospitals}+ Network Hospitals</span>
                    <span>Instant Policy Issuance</span>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1 border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                      Compare Plans
                    </Button>
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

export default Insurance;
