
import { Hospital, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const footerSections = [
    {
      title: "Quick Services",
      links: [
        { name: "Doctor Consultation", path: "/doctors" },
        { name: "Online Pharmacy", path: "/pharmacy" },
        { name: "Lab Tests", path: "/lab-tests" },
        { name: "Health Records", path: "/health-records" },
        { name: "Emergency Care", path: "/emergency" },
        { name: "Ambulance Service", path: "/emergency" }
      ]
    },
    {
      title: "Medical Specialties",
      links: [
        { name: "Cardiology", path: "/doctors?specialty=cardiology" },
        { name: "Neurology", path: "/doctors?specialty=neurology" },
        { name: "Orthopedics", path: "/doctors?specialty=orthopedics" },
        { name: "Pediatrics", path: "/doctors?specialty=pediatrics" },
        { name: "Dermatology", path: "/doctors?specialty=dermatology" },
        { name: "Oncology", path: "/doctors?specialty=oncology" }
      ]
    },
    {
      title: "Patient Services",
      links: [
        { name: "Book Appointment", path: "/doctors" },
        { name: "Health Insurance", path: "/insurance" },
        { name: "Medical Records", path: "/health-records" },
        { name: "Blood Bank", path: "/blood-bank" },
        { name: "Patient Portal", path: "/health-records" },
        { name: "Feedback", path: "/contact" }
      ]
    },
    {
      title: "About Hospital",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Doctors", path: "/doctors" },
        { name: "Facilities", path: "/facilities" },
        { name: "Careers", path: "/careers" },
        { name: "News & Events", path: "/news" },
        { name: "Quality Care", path: "/quality" }
      ]
    }
  ];

  const handleLinkClick = (path: string) => {
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      window.open(path, '_blank');
    }
  };

  const handleSocialClick = (platform: string) => {
    const socialLinks = {
      facebook: "https://facebook.com/medicareplus",
      twitter: "https://twitter.com/medicareplus",
      instagram: "https://instagram.com/medicareplus",
      linkedin: "https://linkedin.com/company/medicareplus"
    };
    window.open(socialLinks[platform as keyof typeof socialLinks], '_blank');
  };

  const handleEmergencyCall = () => {
    window.open("tel:+15559111435", "_self");
  };

  const handleAppointmentCall = () => {
    window.open("tel:+15551234273", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:info@medicareplus.com", "_self");
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=123+Medical+Center+Drive+Healthcare+City", "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 w-full">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Hospital Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <Hospital className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold">Heart-Beat</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Your trusted healthcare partner providing comprehensive medical services with cutting-edge technology and compassionate care for over 25 years.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={handleEmergencyCall}>
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="font-semibold text-red-400 hover:text-red-300 transition-colors">Emergency: +1 (555) 911-HELP</div>
                  <div className="text-gray-400 text-sm">24/7 Emergency Services</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer" onClick={handleAppointmentCall}>
                <Phone className="h-5 w-5 text-green-400" />
                <div>
                  <div className="font-semibold hover:text-green-300 transition-colors">Appointments: +1 (555) 123-CARE</div>
                  <div className="text-gray-400 text-sm">Mon-Sat: 8AM-8PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer" onClick={handleEmailClick}>
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 hover:text-white transition-colors">info@Heart-Beat.com</span>
              </div>
              <div className="flex items-start space-x-3 cursor-pointer" onClick={handleDirections}>
                <MapPin className="h-5 w-5 text-red-400 mt-1" />
                <div className="hover:text-gray-200 transition-colors">
                  <div className="text-gray-300">123 Medical Center Drive</div>
                  <div className="text-gray-400">Healthcare City, HC 12345</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button 
                      onClick={() => handleLinkClick(link.path)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:underline text-left w-full"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hospital Hours */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-blue-400" />
            <h3 className="text-xl font-semibold">Hospital Hours</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-green-400">Emergency Department</div>
              <div className="text-gray-400">24/7 - Always Open</div>
            </div>
            <div>
              <div className="font-semibold text-blue-400">General Services</div>
              <div className="text-gray-400">Mon-Sat: 6:00 AM - 10:00 PM</div>
              <div className="text-gray-400">Sunday: 8:00 AM - 8:00 PM</div>
            </div>
            <div>
              <div className="font-semibold text-purple-400">Pharmacy</div>
              <div className="text-gray-400">Mon-Sun: 7:00 AM - 11:00 PM</div>
            </div>
          </div>
        </div>

        {/* Social Media & Awards */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center md:text-left">
              <div className="text-yellow-400 font-semibold">⭐ JCI Accredited Hospital</div>
              <div className="text-gray-400 text-sm">ISO 9001:2015 Certified</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © 2024 Heart-Beat Hospital. All rights reserved.
            </div>
            <div className="text-gray-500 text-xs mt-1">
              Licensed Healthcare Provider | NABH Accredited
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <button onClick={() => handleLinkClick('/privacy')} className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</button>
              <button onClick={() => handleLinkClick('/terms')} className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</button>
              <button onClick={() => handleLinkClick('/cookies')} className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</button>
              <button onClick={() => handleLinkClick('/hipaa')} className="text-gray-400 hover:text-white transition-colors text-sm">HIPAA Compliance</button>
              <button onClick={() => handleLinkClick('/accessibility')} className="text-gray-400 hover:text-white transition-colors text-sm">Accessibility</button>
            </div>
            <div className="text-gray-500 text-xs">
              Made with ❤️ for better healthcare
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
