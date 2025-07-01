
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Upload, CheckCircle, MapPin, Clock, DollarSign } from "lucide-react";

const ApplyJob = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    position: "Senior Cardiologist",
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({...formData, resume: e.target.files[0]});
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          <div className="max-w-2xl mx-auto px-4 py-16 text-center">
            <CheckCircle className="h-24 w-24 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for applying for the {formData.position} position. Our HR team will review your application and contact you within 5-7 business days.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Application Details</h2>
              <div className="space-y-2 text-left">
                <p><strong>Position:</strong> {formData.position}</p>
                <p><strong>Applicant:</strong> {formData.fullName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Experience:</strong> {formData.experience} years</p>
                <p><strong>Status:</strong> Under Review</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Job Application</h1>
            <p className="text-xl">Join our team of healthcare professionals</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-6 w-6" />
                    Job Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">Senior Cardiologist</h3>
                    <Badge className="bg-blue-100 text-blue-800">Full-time</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4" />
                      <span>$250,000 - $350,000/year</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>5+ years experience required</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• MD degree with Cardiology specialization</li>
                      <li>• Board certification required</li>
                      <li>• 5+ years clinical experience</li>
                      <li>• Strong communication skills</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Application Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="position">Position Applied For</Label>
                      <Input
                        id="position"
                        value={formData.position}
                        readOnly
                        className="bg-gray-100"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Input
                          id="experience"
                          type="number"
                          value={formData.experience}
                          onChange={(e) => setFormData({...formData, experience: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Cover Letter *</Label>
                      <Textarea
                        id="coverLetter"
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                        placeholder="Tell us why you're interested in this position..."
                        rows={6}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="resume">Upload Resume *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                        <label htmlFor="resume" className="cursor-pointer">
                          <span className="text-blue-600 hover:text-blue-700">Click to upload</span>
                          <span className="text-gray-600"> or drag and drop</span>
                        </label>
                        <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
                        {formData.resume && (
                          <p className="text-sm text-green-600 mt-2">✓ {formData.resume.name}</p>
                        )}
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Submit Application
                    </Button>
                  </form>
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

export default ApplyJob;
