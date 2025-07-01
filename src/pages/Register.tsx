
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Hospital, User, Mail, Lock, Phone, Calendar, MapPin, Eye, EyeOff, Heart, Shield, FileText, Users, Award, Clock, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    zipCode: "",
    emergencyContact: "",
    emergencyPhone: "",
    bloodGroup: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
    subscribeNewsletter: false
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt:", formData);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    { icon: Stethoscope, title: "Expert Consultations", description: "Book appointments with 500+ certified specialist doctors", color: "bg-blue-500" },
    { icon: FileText, title: "Digital Pharmacy", description: "Order medicines online with same-day home delivery", color: "bg-green-500" },
    { icon: Heart, title: "Health Records", description: "Secure, lifetime digital health record management", color: "bg-red-500" },
    { icon: Shield, title: "Insurance Plans", description: "Comprehensive health insurance with cashless treatment", color: "bg-purple-500" }
  ];

  const hospitalFeatures = [
    { icon: Award, text: "JCI Accredited Hospital" },
    { icon: Clock, text: "24/7 Emergency Services" },
    { icon: Users, text: "500+ Specialist Doctors" },
    { icon: Shield, text: "HIPAA Compliant & Secure" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-100 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="flex min-h-screen relative">
        {/* Left Side - Hospital Information */}
        <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 p-8 xl:p-12 text-white flex-col justify-start">
           <div className="max-w-md mx-auto">
            {/* Hospital Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/rythem.png" 
                  alt="HeartBeat Logo" 
                  className="object-contain w-50 h-50"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Heart-Beat</h1>
                <p className="text-blue-100 text-lg">Your Lifetime Healthcare Partner</p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Join Our Healthcare Family</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-6">
                Experience world-class healthcare with cutting-edge technology, 
                compassionate care, and a commitment to your complete well-being.
              </p>
              
              {/* Hospital Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {hospitalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <feature.icon className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Complete Healthcare Ecosystem</h3>
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-4">Trusted by Thousands</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100K+</div>
                  <div className="text-blue-200 text-sm">Happy Patients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-blue-200 text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full lg:w-3/5 flex items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-2xl">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                  <Hospital className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">Heart-Beat</span>
              </div>
              <p className="text-gray-600">Join our healthcare family today</p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardHeader className="text-center pb-6 bg-gradient-to-r from-blue-50 to-green-50">
                <CardTitle className="text-2xl text-gray-900 mb-2">Create Your Patient Account</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Get started with comprehensive healthcare services tailored for you
                </CardDescription>
                <div className="flex justify-center space-x-2 mt-4">
                  <Badge variant="secondary" className="text-xs">Secure Registration</Badge>
                  <Badge variant="secondary" className="text-xs">HIPAA Compliant</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information Section */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-blue-600" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@email.com"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="text-gray-700 font-medium">Date of Birth</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                            className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-gray-700 font-medium">Gender</Label>
                        <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup" className="text-gray-700 font-medium">Blood Group</Label>
                        <Select value={formData.bloodGroup} onValueChange={(value) => updateFormData("bloodGroup", value)}>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select blood group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Address Information */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      Address Information
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-gray-700 font-medium">Street Address</Label>
                        <Input
                          id="address"
                          type="text"
                          placeholder="123 Main Street, Apt 4B"
                          value={formData.address}
                          onChange={(e) => updateFormData("address", e.target.value)}
                          className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-gray-700 font-medium">City</Label>
                          <Input
                            id="city"
                            type="text"
                            placeholder="New York"
                            value={formData.city}
                            onChange={(e) => updateFormData("city", e.target.value)}
                            className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode" className="text-gray-700 font-medium">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            type="text"
                            placeholder="10001"
                            value={formData.zipCode}
                            onChange={(e) => updateFormData("zipCode", e.target.value)}
                            className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Emergency Contact */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-red-600" />
                      Emergency Contact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact" className="text-gray-700 font-medium">Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          type="text"
                          placeholder="Emergency contact full name"
                          value={formData.emergencyContact}
                          onChange={(e) => updateFormData("emergencyContact", e.target.value)}
                          className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone" className="text-gray-700 font-medium">Contact Phone</Label>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          placeholder="+1 (555) 987-6543"
                          value={formData.emergencyPhone}
                          onChange={(e) => updateFormData("emergencyPhone", e.target.value)}
                          className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Account Security */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-green-600" />
                      Account Security
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-700 font-medium">Create Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password (8+ characters)"
                            value={formData.password}
                            onChange={(e) => updateFormData("password", e.target.value)}
                            className="pl-10 pr-12 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                            className="pl-10 pr-12 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Agreements */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => updateFormData("agreeToTerms", checked)}
                        className="mt-1"
                        required
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-relaxed">
                        I agree to the <a href="#" className="text-blue-600 hover:underline font-medium">Terms of Service</a> and 
                        <a href="#" className="text-blue-600 hover:underline font-medium ml-1">Privacy Policy</a>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="agreeToPrivacy"
                        checked={formData.agreeToPrivacy}
                        onCheckedChange={(checked) => updateFormData("agreeToPrivacy", checked)}
                        className="mt-1"
                        required
                      />
                      <Label htmlFor="agreeToPrivacy" className="text-sm text-gray-600 leading-relaxed">
                        I consent to the collection and use of my health information as described in the 
                        <a href="#" className="text-blue-600 hover:underline font-medium ml-1">HIPAA Privacy Notice</a>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onCheckedChange={(checked) => updateFormData("subscribeNewsletter", checked)}
                        className="mt-1"
                      />
                      <Label htmlFor="subscribeNewsletter" className="text-sm text-gray-600 leading-relaxed">
                        Subscribe to health tips, wellness content, and appointment reminders (optional)
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 h-12 text-lg font-semibold shadow-lg"
                    disabled={!formData.agreeToTerms || !formData.agreeToPrivacy}
                  >
                    Create My Patient Account
                  </Button>
                </form>

                <Separator className="my-6" />

                <div className="text-center">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <button 
                      onClick={() => navigate("/login")}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Sign in to your portal
                    </button>
                  </p>
                </div>

                {/* Security & Trust Indicators */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-2">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <div className="text-sm text-green-800">
                        <p className="font-semibold">HIPAA Compliant</p>
                        <p>Your health data is protected with enterprise-grade security.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-2">
                      <Award className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold">JCI Accredited</p>
                        <p>International standards for quality and patient safety.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home */}
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

export default Register;
