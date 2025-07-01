import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { User, Calendar, FileText, Shield, Heart, Menu, Phone, Pill } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Pharmacy", href: "/pharmacy", icon: Pill },
    { name: "Lab Tests", href: "/lab-tests", icon: Calendar },
    { name: "Health Records", href: "/health-records", icon: FileText },
    { name: "Insurance", href: "/insurance", icon: Shield },
    { name: "Blood Bank", href: "/blood-bank", icon: Heart },
    { name: "My Profile", href: "/profile", icon: User },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-25 h-25 rounded-lg overflow-hidden">
              <img
                src="/heart.png"
                alt="Heart Beat Logo"
                className="w-full h-full object-contain"
              />
            </div>
           
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Emergency & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-red-600 text-red-600 hover:bg-red-50 flex items-center space-x-2"
              onClick={() => navigate("/emergency")}
            >
              <Phone className="h-4 w-4" />
              <span>Emergency</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-blue-600"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-6">
                {/* Mobile Emergency Button */}
                <Button
                  variant="outline"
                  className="w-full justify-start border-red-600 text-red-600 hover:bg-red-50"
                  onClick={() => {
                    navigate("/emergency");
                    setIsOpen(false);
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency
                </Button>

                {/* Navigation Links */}
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}

                {/* Auth Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      navigate("/login");
                      setIsOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      navigate("/register");
                      setIsOpen(false);
                    }}
                  >
                    Register
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
