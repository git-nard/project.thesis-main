import React, { useEffect, useState } from "react";
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

// ✅ Use relative imports
import { saveSpot, isSpotSaved } from "../../savedSpots";
import { getCurrentUser } from "../../Auth";

interface TourismActivityCardProps {
  id: string;
  name: string;
  image: string;
  description?: string;
  municipality: string;
  category?: string;
}

const TourismActivitiesCard = ({
  id,
  name,
  image,
  description = "",
  municipality,
  category = "Activity",
}: TourismActivityCardProps) => {
  const navigate = useNavigate();
  const uniqueId = `activity-${id}`;

  const [saved, setSaved] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get current user and check saved state
    setUser(getCurrentUser());
    setSaved(isSpotSaved(uniqueId));
  }, [uniqueId]);

  const handleSave = () => {
    if (!user) {
      if (
        window.confirm(
          "You need to sign up or log in to save this activity. Go to sign-up?"
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
      location: municipality,
      category,
      type: "activity",
    };

    const result = saveSpot(newSpot);
    setSaved(result);
  };

  return (
    <Card className="w-full max-w-[350px] h-[400px] overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300 rounded-xl">
      {/* Image Section */}
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

        {/* Save Button (Visible Always, Works Only If Logged In) */}
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
            <span className="truncate">{municipality}</span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0 flex justify-between">
          <Button
            size="sm"
            className="bg-black hover:bg-gray-800 text-white"
            onClick={() =>
              navigate(`/tourism-activities/${id}`, {
                state: {
                  id,
                  name,
                  image,
                  description,
                  municipality,
                  category,
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
              `https://maps.google.com/?q=${encodeURIComponent(
                name + " " + municipality
              )}`,
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

export default TourismActivitiesCard;
