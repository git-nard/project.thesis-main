import React, { useEffect, useState } from "react";
import { MapPin, Clock } from "lucide-react";
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

// ✅ Correct relative imports
import { saveSpot, isSpotSaved } from "../../savedSpots";
import { getCurrentUser } from "../../Auth";

interface RestaurantCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  location?: string;
  cuisine?: string;
  priceRange?: string;
  openingHours?: string;
  features?: string[];
}

const RestaurantCard = ({
  id = "1",
  name = "Casa Albay Bistro",
  image = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1740&q=80",
  description = "A cozy restaurant serving traditional Bicolano dishes and international favorites in a modern setting.",
  location = "Legazpi City, Albay",
  cuisine = "Filipino / Bicolano",
  priceRange = "₱300 - ₱800",
  openingHours = "10:00 AM - 9:00 PM",
  features = ["Dine In", "Delivery", "Pick-Up"],
}: RestaurantCardProps) => {
  const navigate = useNavigate();
  const uniqueId = `restaurant-${id}`;

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
          "You need to sign up or log in to save this restaurant. Go to sign-up?"
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
      cuisine,
      priceRange,
      openingHours,
      features,
      type: "restaurant",
    };

    const result = saveSpot(newSpot);
    setSaved(result);
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden bg-white border hover:shadow-lg transition-all duration-300 rounded-2xl">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 font-semibold">
          {priceRange}
        </Badge>

        {/* Save / Bookmark Button */}
        <button
          onClick={handleSave}
          className={`group absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
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

      {/* Info */}
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <CardDescription className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1 text-blue-500" /> {location}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-700 mt-2 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center gap-2 text-gray-700 text-sm mb-3">
          <Clock className="h-4 w-4 text-blue-500" />
          {openingHours}
        </div>

        <div className="flex flex-wrap gap-2">
          {features.map((feature, i) => (
            <Badge
              key={i}
              variant="outline"
              className="bg-gray-50 border-gray-200 text-gray-700"
            >
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
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
            openingHours,
            features,
          }}
        >
          <Button>View Details</Button>
        </Link>

        <Button
          variant="ghost"
          className="text-blue-600"
          onClick={() =>
            window.open(
              `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodeURIComponent(
                name + " " + location
              )}`,
              "_blank"
            )
          }
        >
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
