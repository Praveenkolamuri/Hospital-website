import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Home, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LabTestsSection = () => {
  const navigate = useNavigate();

  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "Blood Tests",
      price: 25.99,
      originalPrice: 35.99,
      duration: "2-4 hours",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop",
      homeCollection: true,
      fasting: false,
      popular: true
    },
    {
      id: 2,
      name: "Lipid Profile",
      category: "Cholesterol Tests",
      price: 45.99,
      originalPrice: 55.99,
      duration: "4-6 hours",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
      homeCollection: true,
      fasting: true,
      popular: false
    },
    {
      id: 3,
      name: "Diabetes Panel",
      category: "Blood Sugar",
      price: 35.99,
      originalPrice: 45.99,
      duration: "3-5 hours",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop",
      homeCollection: true,
      fasting: true,
      popular: true
    },
    {
      id: 4,
      name: "Thyroid Function Test",
      category: "Hormone Tests",
      price: 55.99,
      originalPrice: 69.99,
      duration: "6-8 hours",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop",
      homeCollection: true,
      fasting: false,
      popular: false
    }
  ];

  const handleBookTest = (e: React.MouseEvent, testId: number) => {
    e.stopPropagation();
    const test = labTests.find(t => t.id === testId);
    if (test) {
      console.log(`Booking test: ${test.name}`);
      navigate("/book-test");
    }
  };

  const handleGetQuote = (e: React.MouseEvent, testId: number) => {
    e.stopPropagation();
    const test = labTests.find(t => t.id === testId);
    if (test) {
      console.log(`Getting quote for: ${test.name}`);
      navigate("/get-quote");
    }
  };

  const handleScheduleCollection = (e: React.MouseEvent, testId: number) => {
    e.stopPropagation();
    const test = labTests.find(t => t.id === testId);
    if (test) {
      console.log(`Scheduling home collection for: ${test.name}`);
      navigate("/book-test");
    }
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full max-w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Lab Tests</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Diagnostic Lab Tests
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Book comprehensive lab tests with home sample collection and digital reports
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
          {labTests.map((test) => (
            <Card key={test.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white border-0 w-full max-w-full">
              <CardContent className="p-0">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={test.image} 
                    alt={test.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {test.popular && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-orange-500 text-white font-semibold text-xs">
                        Popular
                      </Badge>
                    </div>
                  )}
                  {test.homeCollection && (
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-blue-500 text-white font-semibold text-xs flex items-center space-x-1">
                        <Home className="h-3 w-3" />
                        <span>Home Collection</span>
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-3 md:p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">{test.name}</h3>
                    <p className="text-purple-600 font-semibold text-sm md:text-base">{test.category}</p>
                    <div className="flex items-center space-x-2 text-xs">
                      <Clock className="h-3 w-3 text-gray-500" />
                      <span className="text-gray-600">Results in {test.duration}</span>
                    </div>
                    {test.fasting && (
                      <Badge variant="outline" className="text-xs text-red-600 border-red-600">
                        Fasting Required
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs md:text-sm border-t pt-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${test.price}</span>
                      <span className="text-sm text-gray-500 line-through">${test.originalPrice}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs border-purple-600 text-purple-600 hover:bg-purple-50"
                      onClick={(e) => handleGetQuote(e, test.id)}
                    >
                      Get Quote
                    </Button>
                  </div>

                  <div className="flex gap-2 w-full">
                    <Button 
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs py-2"
                      onClick={(e) => handleBookTest(e, test.id)}
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      Book Test
                    </Button>
                    <Button 
                      variant="outline" 
                      className="px-2 md:px-3 border-blue-600 text-blue-600 hover:bg-blue-50 text-xs"
                      onClick={(e) => handleScheduleCollection(e, test.id)}
                    >
                      <Home className="h-3 w-3" />
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
            className="bg-purple-600 hover:bg-purple-700 px-6 md:px-8 py-3 md:py-4"
            onClick={() => navigate("/lab-tests")}
          >
            View All Tests
          </Button>
        </div>
      </div>
    </section>
  );
};
