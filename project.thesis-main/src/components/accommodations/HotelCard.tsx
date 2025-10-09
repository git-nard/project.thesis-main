import React from "react";
import { Star, MapPin, Wifi, Coffee, Utensils } from "lucide-react";
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

interface HotelCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  location?: string;
  priceRange?: string;
  rating?: number;
  amenities?: string[];
  onClick?: () => void;
}

const HotelCard = ({
  id = "1",
  name = "Mayon View Resort & Spa",
  image = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1740&q=80",
  description = "Luxury resort with stunning views of Mayon Volcano, featuring a spa, infinity pool, and fine dining restaurant.",
  location = "Legazpi City, Albay",
  priceRange = "₱5,000 - ₱12,000",
  rating = 4.8,
  amenities = ["Free WiFi", "Swimming Pool", "Restaurant", "Spa", "Fitness Center"],
  onClick = () => console.log("Hotel card clicked"),
}: HotelCardProps) => {
  // Generate star rating display
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

  // Render amenity icons
  const renderAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes("wifi")) return <Wifi className="h-4 w-4" />;
    if (amenity.toLowerCase().includes("restaurant") || amenity.toLowerCase().includes("dining"))
      return <Utensils className="h-4 w-4" />;
    if (amenity.toLowerCase().includes("coffee") || amenity.toLowerCase().includes("breakfast"))
      return <Coffee className="h-4 w-4" />;
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
        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 3).map((amenity, index) => (
            <Badge
              key={index}
              variant="outline"
              className="flex items-center gap-1 bg-gray-50"
            >
              {renderAmenityIcon(amenity)}
              <span>{amenity}</span>
            </Badge>
          ))}
          {amenities.length > 3 && (
            <Badge variant="outline" className="bg-gray-50">
              +{amenities.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-3">
        <Link
          to={`/hotels/${id}`}
          state={{
            id,
            name,
            image,
            description,
            location,
            priceRange,
            rating,
            amenities,
          }}
        >
          <Button onClick={onClick}>View Details</Button>
        </Link>
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
                          // Fallback: use My Location if permission denied
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

export default HotelCard;
