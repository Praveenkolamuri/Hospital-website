
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Clock, Users, Star, Briefcase, Calendar } from "lucide-react";

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Cardiac Surgeon",
      department: "Surgery",
      type: "Full-time",
      location: "Main Hospital",
      experience: "10+ years",
      salary: "$250,000 - $350,000",
      postedDate: "2 days ago",
      applicants: 12,
      urgency: "high",
      description: "Lead cardiac surgery procedures and mentor junior surgeons",
      requirements: ["MD degree", "Board certification", "Fellowship in Cardiac Surgery"]
    },
    {
      id: 2,
      title: "Registered Nurse - ICU",
      department: "Nursing",
      type: "Full-time",
      location: "ICU Department",
      experience: "3+ years",
      salary: "$65,000 - $85,000",
      postedDate: "1 day ago",
      applicants: 45,
      urgency: "high",
      description: "Provide critical care nursing in intensive care unit",
      requirements: ["BSN degree", "ICU certification", "ACLS certification"]
    },
    {
      id: 3,
      title: "Radiologist",
      department: "Radiology",
      type: "Full-time",
      location: "Imaging Center",
      experience: "5+ years",
      salary: "$180,000 - $220,000",
      postedDate: "3 days ago",
      applicants: 8,
      urgency: "medium",
      description: "Interpret medical imaging and provide diagnostic reports",
      requirements: ["MD degree", "Radiology residency", "Board certification"]
    },
    {
      id: 4,
      title: "Pharmacy Technician",
      department: "Pharmacy",
      type: "Part-time",
      location: "Main Pharmacy",
      experience: "1+ years",
      salary: "$35,000 - $45,000",
      postedDate: "5 days ago",
      applicants: 23,
      urgency: "low",
      description: "Assist pharmacists with medication preparation and dispensing",
      requirements: ["High school diploma", "Pharmacy tech certification", "Attention to detail"]
    },
    {
      id: 5,
      title: "Emergency Medicine Physician",
      department: "Emergency",
      type: "Full-time",
      location: "Emergency Department",
      experience: "5+ years",
      salary: "$200,000 - $280,000",
      postedDate: "1 week ago",
      applicants: 15,
      urgency: "high",
      description: "Provide emergency medical care and trauma response",
      requirements: ["MD degree", "Emergency Medicine residency", "ACLS/PALS certification"]
    },
    {
      id: 6,
      title: "Medical Laboratory Technologist",
      department: "Laboratory",
      type: "Full-time",
      location: "Central Lab",
      experience: "2+ years",
      salary: "$50,000 - $65,000",
      postedDate: "4 days ago",
      applicants: 18,
      urgency: "medium",
      description: "Perform complex laboratory tests and quality control",
      requirements: ["Bachelor's in Medical Technology", "ASCP certification", "Lab experience"]
    },
    {
      id: 7,
      title: "Physical Therapist",
      department: "Rehabilitation",
      type: "Full-time",
      location: "Rehab Center",
      experience: "3+ years",
      salary: "$70,000 - $90,000",
      postedDate: "6 days ago",
      applicants: 31,
      urgency: "medium",
      description: "Provide physical therapy and rehabilitation services",
      requirements: ["DPT degree", "State license", "Experience with diverse populations"]
    },
    {
      id: 8,
      title: "Health Information Manager",
      department: "Administration",
      type: "Full-time",
      location: "Administrative Office",
      experience: "4+ years",
      salary: "$60,000 - $80,000",
      postedDate: "1 week ago",
      applicants: 27,
      urgency: "low",
      description: "Manage electronic health records and data systems",
      requirements: ["Bachelor's degree", "RHIA certification", "EHR experience"]
    },
    {
      id: 9,
      title: "Pediatric Nurse Practitioner",
      department: "Pediatrics",
      type: "Full-time",
      location: "Children's Wing",
      experience: "5+ years",
      salary: "$95,000 - $120,000",
      postedDate: "3 days ago",
      applicants: 22,
      urgency: "high",
      description: "Provide advanced nursing care for pediatric patients",
      requirements: ["MSN degree", "Pediatric NP certification", "State license"]
    },
    {
      id: 10,
      title: "Biomedical Equipment Technician",
      department: "Engineering",
      type: "Full-time",
      location: "Maintenance Department",
      experience: "2+ years",
      salary: "$45,000 - $60,000",
      postedDate: "5 days ago",
      applicants: 14,
      urgency: "medium",
      description: "Maintain and repair medical equipment and devices",
      requirements: ["Associate degree", "Biomedical equipment experience", "Technical certifications"]
    },
    {
      id: 11,
      title: "Social Worker - Clinical",
      department: "Social Services",
      type: "Full-time",
      location: "Patient Services",
      experience: "2+ years",
      salary: "$48,000 - $62,000",
      postedDate: "1 week ago",
      applicants: 36,
      urgency: "low",
      description: "Provide psychosocial support and discharge planning",
      requirements: ["MSW degree", "Clinical license", "Healthcare experience"]
    },
    {
      id: 12,
      title: "Anesthesiologist",
      department: "Anesthesiology",
      type: "Full-time",
      location: "Operating Room",
      experience: "7+ years",
      salary: "$300,000 - $400,000",
      postedDate: "2 days ago",
      applicants: 6,
      urgency: "high",
      description: "Provide anesthesia care during surgical procedures",
      requirements: ["MD degree", "Anesthesiology residency", "Board certification"]
    }
  ];

  const departments = ["all", "Surgery", "Nursing", "Radiology", "Pharmacy", "Emergency", "Laboratory", "Rehabilitation", "Administration", "Pediatrics", "Engineering", "Social Services", "Anesthesiology"];
  const jobTypes = ["all", "Full-time", "Part-time", "Contract", "Per Diem"];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesType = selectedType === "all" || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Join Our Healthcare Team</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Build a rewarding career in healthcare with us. We offer competitive benefits, 
              professional development, and the opportunity to make a difference in patients' lives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                100+ Open Positions
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Great Benefits
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2 flex items-center gap-2">
                <Star className="h-4 w-4" />
                Award-Winning Workplace
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
                    placeholder="Search jobs by title or department..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
              </div>
              
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>
                      {dept === "all" ? "All Departments" : dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
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
              Available Positions ({filteredJobs.length})
            </h2>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border-0">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <Badge className={getUrgencyColor(job.urgency)}>
                          {job.urgency === "high" ? "Urgent" : job.urgency === "medium" ? "Active" : "Open"}
                        </Badge>
                        <Badge variant="outline" className="border-teal-200 text-teal-700">
                          {job.department}
                        </Badge>
                      </div>

                      <p className="text-gray-600 text-lg">{job.description}</p>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>Posted {job.postedDate}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:text-right space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-teal-600">{job.salary}</div>
                        <div className="text-sm text-gray-600">per year</div>
                      </div>

                      <div className="text-sm text-gray-600">
                        {job.applicants} applicants
                      </div>

                      <div className="flex lg:flex-col gap-3">
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                          Apply Now
                        </Button>
                        <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                          Learn More
                        </Button>
                      </div>
                    </div>
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

export default Careers;
