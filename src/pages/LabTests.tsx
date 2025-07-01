
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Calendar, Clock, FileText, Home, Star } from "lucide-react";

const LabTests = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "Basic Health",
      price: 25,
      originalPrice: 35,
      duration: "24 hours",
      fasting: false,
      homeCollection: true,
      description: "Comprehensive blood analysis including RBC, WBC, platelets",
      rating: 4.8,
      reviews: 1234,
      parameters: 18
    },
    {
      id: 2,
      name: "Lipid Profile",
      category: "Heart Health",
      price: 40,
      originalPrice: 55,
      duration: "12 hours",
      fasting: true,
      homeCollection: true,
      description: "Cholesterol, triglycerides, HDL, LDL analysis",
      rating: 4.7,
      reviews: 892,
      parameters: 8
    },
    {
      id: 3,
      name: "HbA1c (Diabetes Test)",
      category: "Diabetes",
      price: 30,
      originalPrice: 42,
      duration: "6 hours",
      fasting: false,
      homeCollection: true,
      description: "3-month average blood sugar level test",
      rating: 4.9,
      reviews: 756,
      parameters: 3
    },
    {
      id: 4,
      name: "Thyroid Function Test (TSH, T3, T4)",
      category: "Hormone Tests",
      price: 50,
      originalPrice: 70,
      duration: "24 hours",
      fasting: false,
      homeCollection: true,
      description: "Complete thyroid hormone analysis",
      rating: 4.6,
      reviews: 643,
      parameters: 5
    },
    {
      id: 5,
      name: "Liver Function Test (LFT)",
      category: "Organ Health",
      price: 35,
      originalPrice: 48,
      duration: "12 hours",
      fasting: true,
      homeCollection: true,
      description: "Comprehensive liver enzyme and function assessment",
      rating: 4.5,
      reviews: 567,
      parameters: 12
    },
    {
      id: 6,
      name: "Kidney Function Test (KFT)",
      category: "Organ Health",
      price: 32,
      originalPrice: 45,
      duration: "12 hours",
      fasting: false,
      homeCollection: true,
      description: "Creatinine, BUN, uric acid analysis",
      rating: 4.7,
      reviews: 489,
      parameters: 8
    },
    {
      id: 7,
      name: "Vitamin D Test",
      category: "Vitamin Tests",
      price: 45,
      originalPrice: 60,
      duration: "48 hours",
      fasting: false,
      homeCollection: true,
      description: "25-hydroxy vitamin D level assessment",
      rating: 4.4,
      reviews: 423,
      parameters: 2
    },
    {
      id: 8,
      name: "Iron Studies",
      category: "Mineral Tests",
      price: 55,
      originalPrice: 75,
      duration: "24 hours",
      fasting: true,
      homeCollection: true,
      description: "Serum iron, ferritin, TIBC analysis",
      rating: 4.6,
      reviews: 378,
      parameters: 6
    },
    {
      id: 9,
      name: "COVID-19 RT-PCR",
      category: "Infectious Disease",
      price: 80,
      originalPrice: 100,
      duration: "6 hours",
      fasting: false,
      homeCollection: true,
      description: "Gold standard COVID-19 detection test",
      rating: 4.8,
      reviews: 2145,
      parameters: 1
    },
    {
      id: 10,
      name: "PSA (Prostate Specific Antigen)",
      category: "Cancer Screening",
      price: 38,
      originalPrice: 52,
      duration: "24 hours",
      fasting: false,
      homeCollection: true,
      description: "Prostate cancer screening for men",
      rating: 4.5,
      reviews: 234,
      parameters: 2
    },
    {
      id: 11,
      name: "Cardiac Risk Markers",
      category: "Heart Health",
      price: 75,
      originalPrice: 95,
      duration: "24 hours",
      fasting: true,
      homeCollection: true,
      description: "Troponin, CK-MB, LDH for heart health",
      rating: 4.7,
      reviews: 312,
      parameters: 5
    },
    {
      id: 12,
      name: "Full Body Checkup",
      category: "Comprehensive",
      price: 150,
      originalPrice: 200,
      duration: "48 hours",
      fasting: true,
      homeCollection: true,
      description: "Complete health assessment with 50+ parameters",
      rating: 4.9,
      reviews: 876,
      parameters: 52
    }
  ];

  const categories = ["all", "Basic Health", "Heart Health", "Diabetes", "Hormone Tests", "Organ Health", "Vitamin Tests", "Mineral Tests", "Infectious Disease", "Cancer Screening", "Comprehensive"];
  const priceRanges = ["all", "0-50", "50-100", "100+"];

  const filteredTests = labTests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || test.category === selectedCategory;
    const matchesPrice = selectedPrice === "all" || 
                        (selectedPrice === "0-50" && test.price <= 50) ||
                        (selectedPrice === "50-100" && test.price > 50 && test.price <= 100) ||
                        (selectedPrice === "100+" && test.price > 100);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Lab Tests & Diagnostics</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Book diagnostic tests with home sample collection and digital reports. 
              Accurate results, convenient testing, expert consultation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home Collection
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Digital Reports
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Quick Results
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
                    placeholder="Search lab tests by name or condition..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-50">$0 - $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="100+">$100+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Available Tests ({filteredTests.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTests.map((test) => (
              <Card key={test.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white border-0">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-purple-100 text-purple-800">{test.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{test.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{test.name}</h3>
                    <p className="text-gray-600 text-sm">{test.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Parameters:</span>
                      <span className="font-medium">{test.parameters}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Results in:</span>
                      <span className="font-medium text-green-600">{test.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fasting required:</span>
                      <span className="font-medium">{test.fasting ? "Yes" : "No"}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {test.homeCollection && (
                      <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Home className="h-3 w-3" />
                        Home Collection
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${test.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${test.originalPrice}</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    {test.reviews} people tested
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Test
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

export default LabTests;
