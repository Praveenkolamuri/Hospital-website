
import { Card, CardContent } from "@/components/ui/card";
import { Hospital, Users, Calendar, FileText } from "lucide-react";

export const StatisticsSection = () => {
  const stats = [
    {
      icon: Hospital,
      value: "500+",
      label: "Expert Doctors",
      description: "Certified healthcare professionals",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Happy Patients",
      description: "Satisfied with our services",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Calendar,
      value: "100K+",
      label: "Appointments",
      description: "Successfully completed",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: FileText,
      value: "24/7",
      label: "Emergency Care",
      description: "Always available for you",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has made us a leading healthcare provider
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 space-y-4">
                <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mx-auto`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
