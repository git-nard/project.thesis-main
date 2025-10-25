import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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

import { saveSpot, isSpotSaved } from "../../savedSpots";
import { getCurrentUser } from "../../Auth";

interface HotelCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  location?: string;
  priceRange?: string;
  onClick?: () => void;
}

const HotelCard = ({
  id = "1",
  name = "Mayon View Resort & Spa",
  image = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1740&q=80",
  description = "Luxury resort with stunning views of Mayon Volcano, featuring a spa, infinity pool, and fine dining restaurant.",
  location = "Legazpi City, Albay",
  priceRange = "₱5,000 - ₱12,000",
  onClick = () => console.log("Hotel card clicked"),
}: HotelCardProps) => {
  const navigate = useNavigate();
  const uniqueId = `hotel-${id}`;

  const [saved, setSaved] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getCurrentUser());
    setSaved(isSpotSaved(uniqueId));
  }, [uniqueId]);

  const handleSave = () => {
    if (!user) {
      if (
        window.confirm(
          "You need to sign up or log in to save this hotel. Go to sign-up?"
        )
      ) {
        navigate("/register");
      }
      return;
    }

    const newSpot = {
      id: uniqueId,
      name,
      image,
      description,
      location,
      priceRange,
      type: "hotel",
    };

    const result = saveSpot(newSpot);
    setSaved(result);
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

        {/* Price Range Badge */}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {priceRange}
          </Badge>
        </div>

        {/* Save (Bookmark) Button */}
        <button
          onClick={handleSave}
          className={`group absolute top-2 left-2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            saved ? "bg-red-500" : "bg-white hover:bg-red-500"
          }`}
        >
          <i
            className={`fa-solid fa-bookmark text-lg transition-all duration-300 ${
              saved ? "text-white" : "text-red-500 group-hover:text-white"
            }`}
          ></i>
        </button>
      </div>

      {/* Info Section */}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="mr-1 h-4 w-4 text-gray-500" />
          {location}
        </CardDescription>
      </CardHeader>

      {/* Description Section */}
      <CardContent>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
      </CardContent>

      {/* Footer Section */}
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
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
