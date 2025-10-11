import React from "react";
import { Star, MapPin, Utensils, Clock, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  location?: string;
  cuisine?: string;
  priceRange?: string;
  rating?: number;
  openingHours?: string;
  features?: string[];
  onClick?: () => void;
}

const RestaurantCard = ({
  id = "1",
  name = "Casa Albay Bistro",
  image = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1740&q=80",
  description = "A cozy restaurant serving traditional Bicolano dishes and international favorites in a modern setting.",
  location = "Legazpi City, Albay",
  cuisine = "Filipino / Bicolano",
  priceRange = "₱300 - ₱800",
  rating = 4.7,
  openingHours = "10:00 AM - 9:00 PM",
  features = ["Dine-in", "Takeout", "WiFi", "Coffee"],
  onClick = () => console.log("Restaurant card clicked"),
}: RestaurantCardProps) => {
  // Render star rating
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half-star" className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />
      );
    }

    return stars;
  };

  // Render feature icons
  const renderFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes("wifi")) return <Coffee className="h-4 w-4" />;
    if (feature.toLowerCase().includes("dine")) return <Utensils className="h-4 w-4" />;
    if (feature.toLowerCase().includes("coffee")) return <Coffee className="h-4 w-4" />;
    if (feature.toLowerCase().includes("takeout")) return <Clock className="h-4 w-4" />;
    return null;
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {priceRange}
          </Badge>
        </div>
        <button className="group absolute top-3 left-3 bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-500">
          <i className="fa-solid fa-bookmark text-red-500 transition-all duration-300 group-hover:text-white"></i>
        </button>
      </div>

      {/* Info Section */}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <div className="flex items-center space-x-1">
            {renderRating()}
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="mr-1 h-4 w-4 text-gray-500" />
          {location}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="text-sm text-gray-700 mb-2">
          🍽️ <span className="font-medium">{cuisine}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Clock className="mr-1 h-4 w-4 text-blue-500" /> {openingHours}
        </div>

        <div className="flex flex-wrap gap-2">
          {features.slice(0, 3).map((feature, index) => (
            <Badge
              key={index}
              variant="outline"
              className="flex items-center gap-1 bg-gray-50"
            >
              {renderFeatureIcon(feature)}
              <span>{feature}</span>
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge variant="outline" className="bg-gray-50">
              +{features.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-3">
        {/* View Details button */}
        <Link
          to={`/restaurants/${id}`}
          state={{
            id,
            name,
            image,
            description,
            location,
            cuisine,
            priceRange,
            rating,
            openingHours,
            features,
            onClick
          }}
        >
          <Button onClick={onClick}>View Details</Button>
        </Link>

        {/* Directions button */}
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600"
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  const destination = encodeURIComponent(`${name} ${location}`);
                  const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;
                  window.open(mapsUrl, "_blank");
                },
                (error) => {
                  console.error("Geolocation error:", error);
                  const fallbackUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodeURIComponent(
                    name + " " + location
                  )}`;
                  window.open(fallbackUrl, "_blank");
                }
              );
            } else {
              alert("Geolocation is not supported by your browser.");
            }
          }}
        >
          <MapPin className="w-4 h-4 mr-1" /> Directions
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
