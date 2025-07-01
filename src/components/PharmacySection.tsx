import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Clock, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PharmacySection = () => {
  const navigate = useNavigate();

  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      price: 12.99,
      originalPrice: 15.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      inStock: true,
      prescription: false,
      fastDelivery: true
    },
    {
      id: 2,
      name: "Vitamin D3 Tablets",
      category: "Supplements",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=300&fit=crop",
      inStock: true,
      prescription: false,
      fastDelivery: true
    },
    {
      id: 3,
      name: "Antibiotics Course",
      category: "Prescription",
      price: 45.99,
      originalPrice: 55.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
      inStock: true,
      prescription: true,
      fastDelivery: false
    },
    {
      id: 4,
      name: "Blood Pressure Monitor",
      category: "Medical Devices",
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
      inStock: true,
      prescription: false,
      fastDelivery: true
    }
  ];

  const handleAddToCart = (e: React.MouseEvent, medicineId: number) => {
    e.stopPropagation();
    const medicine = medicines.find(m => m.id === medicineId);
    if (medicine) {
      console.log(`Adding ${medicine.name} to cart`);
      navigate("/add-to-cart");
    }
  };

  const handleBuyNow = (e: React.MouseEvent, medicineId: number) => {
    e.stopPropagation();
    const medicine = medicines.find(m => m.id === medicineId);
    if (medicine) {
      console.log(`Buying ${medicine.name} now`);
      navigate("/cart");
    }
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-white w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full max-w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Online Pharmacy</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Order Medicines Online
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get authentic medicines delivered to your doorstep with express delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
          {medicines.map((medicine) => (
            <Card key={medicine.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white border-0 w-full max-w-full">
              <CardContent className="p-0">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={medicine.image} 
                    alt={medicine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500 text-white font-semibold flex items-center space-x-1 text-xs">
                      <Star className="h-3 w-3 fill-current" />
                      <span>{medicine.rating}</span>
                    </Badge>
                  </div>
                  {medicine.fastDelivery && (
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-blue-500 text-white font-semibold text-xs flex items-center space-x-1">
                        <Truck className="h-3 w-3" />
                        <span>Fast Delivery</span>
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-3 md:p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">{medicine.name}</h3>
                    <p className="text-green-600 font-semibold text-sm md:text-base">{medicine.category}</p>
                    {medicine.prescription && (
                      <Badge variant="outline" className="text-xs text-orange-600 border-orange-600">
                        Prescription Required
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs md:text-sm border-t pt-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${medicine.price}</span>
                      <span className="text-sm text-gray-500 line-through">${medicine.originalPrice}</span>
                    </div>
                    <div className={`text-xs font-medium ${medicine.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {medicine.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>

                  <div className="flex gap-2 w-full">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs py-2"
                      onClick={(e) => handleAddToCart(e, medicine.id)}
                      disabled={!medicine.inStock}
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      className="px-2 md:px-3 border-green-600 text-green-600 hover:bg-green-50 text-xs"
                      onClick={(e) => handleBuyNow(e, medicine.id)}
                      disabled={!medicine.inStock}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 px-6 md:px-8 py-3 md:py-4"
            onClick={() => navigate("/pharmacy")}
          >
            View All Medicines
          </Button>
        </div>
      </div>
    </section>
  );
};
