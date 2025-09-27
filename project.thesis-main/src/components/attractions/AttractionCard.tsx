import React from "react";
import { Star, MapPin, Clock, ExternalLink } from "lucide-react";
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
import { Link } from "react-router-dom";

interface AttractionCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  rating?: number;
  location?: string;
  category?: string;
  openingHours?: string;
  onClick?: () => void;
}

const AttractionCard = ({
  id = "1",
  name = "Mayon Volcano",
  image = "https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  description = 'Known as the "Perfect Cone" for its symmetrical shape, Mayon Volcano is an active stratovolcano and a popular tourist destination in Albay.',
  rating = 4.8,
  location = "Albay Province, Philippines",
  category = "Natural Wonder",
  openingHours = "Open 24 hours",
  onClick = () => console.log("Attraction card clicked"),
}: AttractionCardProps) => {
  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400 half-filled"
          />,
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Card className="w-full max-w-[350px] h-[400px] overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
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
      </div>

      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-xl font-bold truncate">{name}</CardTitle>
        <div className="flex items-center mt-1 space-x-1">
          {renderStars()}
          <span className="text-sm ml-1 text-gray-600">
            {rating.toFixed(1)}
          </span>
        </div>
      </CardHeader>

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

      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link to={`/attractions/${id}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600"
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${encodeURIComponent(name + " " + location)}`,
              "_blank",
            )
          }
        >
          <MapPin className="w-4 h-4 mr-1" /> Map
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AttractionCard;
