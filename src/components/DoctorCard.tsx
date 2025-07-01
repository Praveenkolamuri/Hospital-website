
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: string;
  nextAvailable: string;
  consultationFee: number;
}

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border-0 shadow-lg">
      <CardContent className="p-0">
        {/* Doctor Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={doctor.image} 
            alt={doctor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500 text-white font-semibold">
              ⭐ {doctor.rating}
            </Badge>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Doctor Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
            <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
            <p className="text-gray-600 text-sm flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {doctor.experience} experience
            </p>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-green-600">
              <Clock className="h-4 w-4 mr-1" />
              <span className="font-medium">{doctor.nextAvailable}</span>
            </div>
            <div className="text-gray-900 font-bold">
              ${doctor.consultationFee}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              <Calendar className="h-4 w-4 mr-1" />
              Book Now
            </Button>
            <Button variant="outline" className="px-4 border-blue-600 text-blue-600 hover:bg-blue-50">
              View Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
