import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TouristSpotDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If user navigates directly (no state passed)
  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500">No tourist spot data available.</p>
        <Button className="mt-4" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  const { name, image, description, location, category, openingHours } = state;

  useEffect(() => {
    document.title = name ? `${name} - Tourist Spot Details` : "Tourist Spot Details";
  })

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-2 mb-6"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>

        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-6">{category}</p>

        {/* Image */}
        <div className="rounded-lg overflow-hidden mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Details */}
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <p className="text-gray-600 mb-6">{openingHours}</p>

        <Button
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${encodeURIComponent(
                name + " " + location
              )}`,
              "_blank"
            )
          }
        >
          View on Google Maps
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default TouristSpotDetailsPage;
