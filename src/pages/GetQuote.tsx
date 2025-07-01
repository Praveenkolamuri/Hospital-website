
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, CheckCircle, DollarSign } from "lucide-react";

const GetQuote = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    coverage: "",
    familyMembers: "1"
  });

  const [quote, setQuote] = useState({
    monthlyPremium: 0,
    deductible: 0,
    coverageLimit: 0,
    savings: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate quote based on form data
    let basePrice = 50;
    if (formData.serviceType === "insurance") basePrice = 80;
    if (formData.serviceType === "lab-test") basePrice = 30;
    if (formData.serviceType === "pharmacy") basePrice = 20;

    const ageMultiplier = parseInt(formData.age) > 50 ? 1.5 : 1.2;
    const familyMultiplier = parseInt(formData.familyMembers);
    
    const monthlyPremium = Math.round(basePrice * ageMultiplier * familyMultiplier);
    const deductible = monthlyPremium * 10;
    const coverageLimit = monthlyPremium * 1000;
    const savings = Math.round(monthlyPremium * 0.3);

    setQuote({
      monthlyPremium,
      deductible,
      coverageLimit,
      savings
    });
    
    setShowQuote(true);
  };

  if (showQuote) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Personalized Quote</h1>
              <p className="text-lg text-gray-600">Based on your information, here's your customized quote</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6" />
                    Quote Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ${quote.monthlyPremium}/month
                    </div>
                    <p className="text-gray-600">Monthly Premium</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">${quote.deductible}</div>
                      <p className="text-sm text-gray-600">Annual Deductible</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">${quote.coverageLimit.toLocaleString()}</div>
                      <p className="text-sm text-gray-600">Coverage Limit</p>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-xl font-bold text-green-600">Save ${quote.savings}/month</div>
                    <p className="text-sm text-green-700">Compared to individual purchases</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Included Benefits:</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ 24/7 Emergency Coverage</li>
                      <li>✓ Free Preventive Care</li>
                      <li>✓ Prescription Drug Coverage</li>
                      <li>✓ Telemedicine Consultations</li>
                      <li>✓ Mental Health Support</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    Accept This Quote
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Service Type</Label>
                      <p className="font-medium capitalize">{formData.serviceType.replace('-', ' ')}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Name</Label>
                      <p className="font-medium">{formData.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Email</Label>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Age</Label>
                      <p className="font-medium">{formData.age} years</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Location</Label>
                      <p className="font-medium">{formData.location}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Family Members</Label>
                      <p className="font-medium">{formData.familyMembers}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full" onClick={() => setShowQuote(false)}>
                      Get New Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Get Your Quote</h1>
            <p className="text-xl">Get personalized pricing for our healthcare services</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6" />
                Quote Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="insurance">Health Insurance</SelectItem>
                      <SelectItem value="lab-test">Lab Tests</SelectItem>
                      <SelectItem value="pharmacy">Pharmacy Services</SelectItem>
                      <SelectItem value="consultation">Doctor Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      min="18"
                      max="100"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="City, State"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="familyMembers">Family Members *</Label>
                    <Select value={formData.familyMembers} onValueChange={(value) => setFormData({...formData, familyMembers: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Just me</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3">3 people</SelectItem>
                        <SelectItem value="4">4 people</SelectItem>
                        <SelectItem value="5">5+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="coverage">Coverage Preference</Label>
                    <Select value={formData.coverage} onValueChange={(value) => setFormData({...formData, coverage: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select coverage level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Coverage</SelectItem>
                        <SelectItem value="premium">Premium Coverage</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  Get My Quote
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

export default GetQuote;
