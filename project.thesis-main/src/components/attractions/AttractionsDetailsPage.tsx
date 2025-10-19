import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Clock, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const AttractionDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Handle direct navigation (no state)
  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500">No attraction data available.</p>
        <Button className="mt-4" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  const {
    name,
    image,
    description,
    location,
    category,
    openingHours,
  } = state;

  useEffect(() => {
    document.title = name ? `${name} - Attraction Details` : "Attraction Details";
  }, [name]);

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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h1 className="text-4xl font-bold">{name}</h1>
          <Badge className="text-sm px-3 py-1 mt-2 md:mt-0 bg-blue-100 text-blue-700">
            {category}
          </Badge>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden mb-6 shadow-md">
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Details */}
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span>{openingHours}</span>
          </div>
        </div>

        <Button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                name + " " + location
              )}`,
              "_blank"
            )
          }
        >
          Get Directions
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default AttractionDetailsPage;
