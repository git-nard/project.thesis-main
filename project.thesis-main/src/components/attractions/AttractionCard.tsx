import React from "react";
import { MapPin, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface AttractionCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  location?: string;
  openingHours?: string;
  onClick?: () => void;
}

const AttractionCard = ({
  id = "1",
  name = "Mayon Volcano",
  image = "https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  description = 'Known as the "Perfect Cone" for its symmetrical shape, Mayon Volcano is an active stratovolcano and a popular tourist destination in Albay.',
  location = "Albay Province, Philippines",
  openingHours = "Open 24 hours",
  onClick = () => console.log("Attraction card clicked"),
}: AttractionCardProps) => {
  return (
    <Card className="w-full max-w-[350px] h-[400px] overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
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

        <div className="mt-3 space-y-1">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1 text-gray-500" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1 text-gray-500" />
            <span>{openingHours}</span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link
          to={`/attractions/${id}`}
          state={{ name, image, description, location, openingHours }}
        >
          <Button
            className="bg-black hover:bg-gray-800 text-white"
            size="sm"
          >
            View Details
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600"
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${encodeURIComponent(
                name + " " + location
              )}`,
              "_blank"
            )
          }
        >
          <MapPin className="w-4 h-4 mr-1" /> Directions
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AttractionCard;
