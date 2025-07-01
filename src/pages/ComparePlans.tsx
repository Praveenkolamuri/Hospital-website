
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Shield, Star, Users } from "lucide-react";

const ComparePlans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29,
      period: "month",
      popular: false,
      features: {
        "Doctor Consultations": "5 per month",
        "Emergency Coverage": true,
        "Prescription Discounts": "10%",
        "Lab Tests": "Basic only",
        "Hospital Network": "Limited",
        "Telemedicine": true,
        "Family Coverage": false,
        "Dental Coverage": false,
        "Vision Coverage": false,
        "Mental Health": "Basic",
        "Preventive Care": true,
        "Specialist Visits": "Limited"
      }
    },
    {
      id: 2,
      name: "Premium Plan",
      price: 89,
      period: "month",
      popular: true,
      features: {
        "Doctor Consultations": "Unlimited",
        "Emergency Coverage": true,
        "Prescription Discounts": "25%",
        "Lab Tests": "Comprehensive",
        "Hospital Network": "Extensive",
        "Telemedicine": true,
        "Family Coverage": "Up to 4",
        "Dental Coverage": true,
        "Vision Coverage": true,
        "Mental Health": "Full Coverage",
        "Preventive Care": true,
        "Specialist Visits": "Unlimited"
      }
    },
    {
      id: 3,
      name: "Family Plan",
      price: 149,
      period: "month",
      popular: false,
      features: {
        "Doctor Consultations": "Unlimited",
        "Emergency Coverage": true,
        "Prescription Discounts": "30%",
        "Lab Tests": "Comprehensive",
        "Hospital Network": "Premium",
        "Telemedicine": true,
        "Family Coverage": "Up to 6",
        "Dental Coverage": true,
        "Vision Coverage": true,
        "Mental Health": "Full Coverage",
        "Preventive Care": true,
        "Specialist Visits": "Unlimited"
      }
    }
  ];

  const allFeatures = [
    "Doctor Consultations",
    "Emergency Coverage", 
    "Prescription Discounts",
    "Lab Tests",
    "Hospital Network",
    "Telemedicine",
    "Family Coverage",
    "Dental Coverage",
    "Vision Coverage",
    "Mental Health",
    "Preventive Care",
    "Specialist Visits"
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-600" />
      ) : (
        <X className="h-5 w-5 text-red-600" />
      );
    }
    return <span className="text-sm font-medium">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Compare Insurance Plans</h1>
            <p className="text-xl mb-8">Choose the perfect healthcare plan for you and your family</p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Comprehensive Coverage
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Family Plans Available
              </Badge>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {allFeatures.map((feature) => (
                      <div key={feature} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">{feature}</span>
                        <div className="flex items-center">
                          {renderFeatureValue(plan.features[feature as keyof typeof plan.features])}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                    size="lg"
                  >
                    Select {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help Choosing?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Individual</h3>
                  <p className="text-gray-600">Basic Plan recommended for single coverage</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Couple</h3>
                  <p className="text-gray-600">Premium Plan offers excellent value for two</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Family</h3>
                  <p className="text-gray-600">Family Plan provides comprehensive coverage for all</p>
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

export default ComparePlans;
