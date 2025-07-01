import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, Eye, EyeOff, Shield, Clock, Users, Award, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  const quickServices = [
    { icon: Clock, title: "24/7 Emergency", desc: "Round-the-clock care" },
    { icon: Users, title: "500+ Doctors", desc: "Expert specialists" },
    { icon: Shield, title: "Secure Records", desc: "HIPAA compliant" },
    { icon: Award, title: "JCI Accredited", desc: "World-class quality" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative flex min-h-screen">
        {/* Left Side - Hospital Information */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 p-12 text-white flex-col justify-center">
          <div className="max-w-md mx-auto">
            {/* Hospital Header */}
    <div className="flex items-center space-x-8 mb-8">
  <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">

    <img 
      src="/rythem.png" 
      alt="HeartBeat Logo" 
      className="object-contain w-full h-full"
    />
  </div>
  <div className="flex flex-col">
    <h1 className="text-5xl font-bold leading-tight">Heart-Beat</h1>
    <p className="text-blue-100 text-xl">Excellence in Healthcare Since 1998</p>
  </div>
</div> 
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Welcome Back to Your Health Portal</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Access your complete healthcare ecosystem - from booking appointments with top specialists 
                to managing prescriptions and viewing your medical history.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <service.icon className="h-8 w-8 mb-3 text-blue-100" />
                  <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                  <p className="text-blue-100 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-4">Need Immediate Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-200" />
                  <div>
                    <p className="font-medium">Emergency: +1 (555) 911-HELP</p>
                    <p className="text-blue-200 text-sm">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-200" />
                  <div>
                    <p className="font-medium">123 Health Street, Medical District</p>
                    <p className="text-blue-200 text-sm">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center">
                  <img 
                    src="/rythem.png" 
                    alt="HeartBeat Logo" 
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Heart-Beat</h1>
                  <p className="text-gray-600">Patient Portal</p>
                </div>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardHeader className="text-center pb-8 bg-gradient-to-r from-blue-50 to-green-50">
                <CardTitle className="text-2xl text-gray-900 mb-2">Patient Portal Login</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Secure access to your complete healthcare dashboard
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="patient@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-semibold">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your secure password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pl-10 pr-12 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-600">Keep me signed in</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Forgot password?
                    </a>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 h-12 text-lg font-semibold shadow-lg">
                    Access Patient Portal
                  </Button>
                </form>

                <Separator className="my-6" />

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    New to Heart-Beat?{" "}
                    <button 
                      onClick={() => navigate("/register")}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Create Patient Account
                    </button>
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Quick Access</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs h-10"
                      onClick={() => navigate("/emergency")}
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Emergency
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs h-10"
                      onClick={() => navigate("/doctors")}
                    >
                      <Users className="h-4 w-4 mr-1" />
                      Book Appointment
                    </Button>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">
                      <p className="font-semibold">Your privacy is protected</p>
                      <p>We use bank-level encryption and comply with HIPAA regulations to keep your health information secure.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <button 
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                ← Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
