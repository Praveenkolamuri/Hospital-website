
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ShoppingCart, Star, Truck, Shield, Clock } from "lucide-react";

const Pharmacy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");

  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      brand: "Tylenol",
      price: 12.99,
      originalPrice: 15.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 245,
      inStock: true,
      prescription: false,
      description: "Effective pain relief and fever reducer"
    },
    {
      id: 2,
      name: "Vitamin D3 1000IU",
      category: "Vitamins",
      brand: "Nature Made",
      price: 18.99,
      originalPrice: 22.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 189,
      inStock: true,
      prescription: false,
      description: "Supports bone and immune health"
    },
    {
      id: 3,
      name: "Amoxicillin 250mg",
      category: "Antibiotics",
      brand: "Generic",
      price: 24.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 156,
      inStock: true,
      prescription: true,
      description: "Antibiotic for bacterial infections"
    },
    {
      id: 4,
      name: "Omega-3 Fish Oil",
      category: "Supplements",
      brand: "Nordic Naturals",
      price: 32.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 298,
      inStock: true,
      prescription: false,
      description: "Heart and brain health support"
    },
    {
      id: 5,
      name: "Insulin Glargine",
      category: "Diabetes",
      brand: "Lantus",
      price: 89.99,
      originalPrice: 95.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 127,
      inStock: true,
      prescription: true,
      description: "Long-acting insulin for diabetes"
    },
    {
      id: 6,
      name: "Lisinopril 10mg",
      category: "Heart Medication",
      brand: "Prinivil",
      price: 16.99,
      originalPrice: 20.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 89,
      inStock: true,
      prescription: true,
      description: "ACE inhibitor for high blood pressure"
    },
    {
      id: 7,
      name: "Probiotics Multi-Strain",
      category: "Digestive Health",
      brand: "Garden of Life",
      price: 28.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 234,
      inStock: true,
      prescription: false,
      description: "Supports digestive and immune health"
    },
    {
      id: 8,
      name: "Albuterol Inhaler",
      category: "Respiratory",
      brand: "ProAir",
      price: 45.99,
      originalPrice: 52.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 167,
      inStock: true,
      prescription: true,
      description: "Fast-acting bronchodilator for asthma"
    },
    {
      id: 9,
      name: "Multivitamin Complex",
      category: "Vitamins",
      brand: "Centrum",
      price: 21.99,
      originalPrice: 26.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 312,
      inStock: true,
      prescription: false,
      description: "Complete daily nutrition support"
    },
    {
      id: 10,
      name: "Metformin 500mg",
      category: "Diabetes",
      brand: "Glucophage",
      price: 19.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 203,
      inStock: true,
      prescription: true,
      description: "Diabetes medication to control blood sugar"
    },
    {
      id: 11,
      name: "Calcium + Magnesium",
      category: "Supplements",
      brand: "Solgar",
      price: 25.99,
      originalPrice: 30.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 178,
      inStock: false,
      prescription: false,
      description: "Bone and muscle health support"
    },
    {
      id: 12,
      name: "Sertraline 50mg",
      category: "Mental Health",
      brand: "Zoloft",
      price: 34.99,
      originalPrice: 42.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.2,
      reviews: 95,
      inStock: true,
      prescription: true,
      description: "SSRI antidepressant medication"
    }
  ];

  const categories = ["all", "Pain Relief", "Vitamins", "Antibiotics", "Supplements", "Diabetes", "Heart Medication", "Digestive Health", "Respiratory", "Mental Health"];
  const brands = ["all", "Tylenol", "Nature Made", "Generic", "Nordic Naturals", "Lantus", "Prinivil", "Garden of Life", "ProAir", "Centrum", "Glucophage", "Solgar", "Zoloft"];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         medicine.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || medicine.category === selectedCategory;
    const matchesBrand = selectedBrand === "all" || medicine.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Online Pharmacy</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Order authentic medicines with guaranteed quality and express delivery. 
              Your health, our priority - delivered to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Free Delivery
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                100% Authentic
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Same Day Delivery
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
                    placeholder="Search medicines, supplements, health products..."
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

              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>
                      {brand === "all" ? "All Brands" : brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Available Medicines ({filteredMedicines.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMedicines.map((medicine) => (
              <Card key={medicine.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white border-0">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={medicine.image} 
                      alt={medicine.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {!medicine.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge className="bg-red-500 text-white">Out of Stock</Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      {medicine.prescription && (
                        <Badge className="bg-orange-500 text-white text-xs">Rx Required</Badge>
                      )}
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white font-semibold flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{medicine.rating}</span>
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-bold text-gray-900 text-sm">{medicine.name}</h3>
                      <p className="text-blue-600 text-xs font-semibold">{medicine.brand}</p>
                      <p className="text-gray-600 text-xs">{medicine.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">${medicine.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${medicine.originalPrice}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{medicine.category}</Badge>
                    </div>

                    <div className="text-xs text-gray-500">
                      {medicine.reviews} reviews
                    </div>

                    <Button 
                      className={`w-full font-semibold ${
                        medicine.inStock 
                          ? "bg-green-600 hover:bg-green-700 text-white" 
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!medicine.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {medicine.inStock ? "Add to Cart" : "Out of Stock"}
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

export default Pharmacy;
