
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Upload, 
  Download, 
  Heart, 
  Activity, 
  Calendar, 
  User, 
  Shield,
  Clock,
  Plus,
  Eye,
  Share
} from "lucide-react";

const HealthRecords = () => {
  const recentRecords = [
    {
      id: 1,
      type: "Lab Test",
      title: "Complete Blood Count",
      date: "2024-01-15",
      doctor: "Dr. Sarah Chen",
      status: "Normal"
    },
    {
      id: 2,
      type: "Prescription",
      title: "Blood Pressure Medication",
      date: "2024-01-10",
      doctor: "Dr. Michael Johnson",
      status: "Active"
    },
    {
      id: 3,
      type: "Consultation",
      title: "Cardiology Checkup",
      date: "2024-01-08",
      doctor: "Dr. Sarah Chen",
      status: "Completed"
    }
  ];

  const vitals = [
    { label: "Blood Pressure", value: "120/80", unit: "mmHg", status: "Normal" },
    { label: "Heart Rate", value: "72", unit: "bpm", status: "Normal" },
    { label: "Temperature", value: "98.6", unit: "°F", status: "Normal" },
    { label: "Weight", value: "155", unit: "lbs", status: "Normal" }
  ];

  const handleUploadRecord = () => {
    // In a real app, this would open file upload dialog
    alert("File upload functionality would be implemented here");
  };

  const handleDownloadRecord = (recordId: number) => {
    // In a real app, this would download the record
    alert(`Downloading record ${recordId}`);
  };

  const handleShareRecord = (recordId: number) => {
    // In a real app, this would open sharing options
    alert(`Sharing record ${recordId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <Header />
      <main className="pt-20 w-full">
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Health Records</h1>
            <p className="text-base md:text-lg text-gray-600">
              Securely manage your medical records, test results, and health history in one place.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="records">Records</TabsTrigger>
              <TabsTrigger value="vitals">Vitals</TabsTrigger>
              <TabsTrigger value="upload">Upload</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">24</h3>
                    <p className="text-gray-600">Total Records</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">8</h3>
                    <p className="text-gray-600">Lab Tests</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">3</h3>
                    <p className="text-gray-600">Prescriptions</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRecords.map((record) => (
                      <div key={record.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{record.title}</h4>
                            <p className="text-sm text-gray-600">{record.doctor} • {record.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={record.status === "Normal" || record.status === "Active" ? "default" : "secondary"}>
                            {record.status}
                          </Badge>
                          <Button size="sm" variant="outline" onClick={() => handleDownloadRecord(record.id)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="records" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">All Records</h2>
                <Button onClick={handleUploadRecord}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Record
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentRecords.map((record) => (
                  <Card key={record.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{record.title}</h3>
                            <p className="text-gray-600">{record.type} • {record.doctor}</p>
                            <p className="text-sm text-gray-500">{record.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{record.status}</Badge>
                          <Button size="sm" variant="outline" onClick={() => handleDownloadRecord(record.id)}>
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleShareRecord(record.id)}>
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vitals" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Vital Signs</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vitals.map((vital, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <Activity className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">{vital.label}</h3>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {vital.value} <span className="text-sm font-normal text-gray-600">{vital.unit}</span>
                      </div>
                      <Badge variant={vital.status === "Normal" ? "default" : "destructive"}>
                        {vital.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upload" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="h-5 w-5" />
                    <span>Upload Health Records</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Medical Records</h3>
                    <p className="text-gray-600 mb-4">
                      Drag and drop your files here, or click to browse
                    </p>
                    <Button onClick={handleUploadRecord}>
                      Choose Files
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Supported formats: PDF, JPG, PNG (Max 10MB)
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Your Privacy is Protected</h4>
                        <p className="text-blue-700 text-sm">
                          All uploaded records are encrypted and stored securely. Only you and authorized healthcare providers can access your data.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HealthRecords;
