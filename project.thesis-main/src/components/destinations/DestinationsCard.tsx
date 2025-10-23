import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { saveSpot, isSpotSaved } from "../../savedSpots";
import { getCurrentUser } from "../../Auth";

interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  region: string;
}

const DestinationCard = ({ id, name, image, description, location, region }: DestinationCardProps) => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(isSpotSaved(`destination-${id}`));

  const handleSave = () => {
    const user = getCurrentUser();
    if (!user) {
      if (window.confirm("You need to sign up or log in to save this destination. Go to sign-up?")) {
        navigate("/register");
      }
      return;
    }

    const saved = saveSpot({ id: `destination-${id}`, name, image, description, location, region, type: "destination" });
    setIsSaved(saved);
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
        <Badge className="absolute top-3 right-3 bg-white/80 text-gray-800">{region}</Badge>

        <button
          onClick={handleSave}
          className={`group absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isSaved ? "bg-red-500" : "bg-white hover:bg-red-500"
          }`}
        >
          <i className={`fa-solid fa-bookmark text-lg transition-all duration-300 ${isSaved ? "text-white" : "text-red-500 group-hover:text-white"}`}></i>
        </button>
      </div>

      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-1 text-gray-500" /> {location}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter>
        <Link to={`/destinations/${id}`} state={{ id, name, image, description, location, region }}>
          <Button>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
