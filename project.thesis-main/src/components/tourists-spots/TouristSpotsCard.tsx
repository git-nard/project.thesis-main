import React from "react";
import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

interface TouristSpotCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  category: string;
  openingHours?: string;
}

const TouristSpotCard = ({
  id,
  name,
  image,
  description,
  location,
  category,
  openingHours = "Open 24 hours",
}: TouristSpotCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-[350px] h-[400px] overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 bg-black/70 text-white"
        >
          {category}
        </Badge>
        <button className="group absolute top-3 left-3 bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-500">
  <i className="fa-solid fa-bookmark text-red-500 transition-all duration-300 group-hover:text-white"></i>
</button>




      </div>

      {/* Header */}
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-xl font-bold truncate">{name}</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-4 flex-grow">
        <CardDescription className="text-sm line-clamp-3">
          {description}
        </CardDescription>
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-gray-500" />
            <span className="truncate">{location}</span>
          </div>
          <div>{openingHours}</div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            navigate(`/tourist-spots/${id}`, {
              state: {
                id,
                name,
                image,
                description,
                location,
                category,
                openingHours,
              },
            })
          }
        >
          View Details
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600"
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${encodeURIComponent(name + " " + location)}`,
              "_blank"
            )
          }
        >
          <MapPin className="w-4 h-4 mr-1" /> Map
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TouristSpotCard;
