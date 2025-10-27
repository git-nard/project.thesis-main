import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TourismActivitiesDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500">No tourism activity data available.</p>
        <Button className="mt-4" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  const { name, image, description, municipality, category, openingHours } = state;

  useEffect(() => {
    document.title = name
      ? `${name} - Tourism Activity Details`
      : "Tourism Activity Details";
  }, [name]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-2 mb-6"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-6">{category || "Tourism Activity"}</p>

        {/* Image */}
        <div className="rounded-lg overflow-hidden mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {municipality}
        </div>

        {/* Opening Hours */}
        {openingHours && (
          <p className="text-gray-600 mb-6">⏰ {openingHours}</p>
        )}

        {/* Get Directions Button (with route) */}
        <div className="flex gap-4 mt-6">
          <Button
            onClick={() =>
              window.open(
                `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodeURIComponent(
                  name + " " + municipality
                )}`,
                "_blank"
              )
            }
            className="bg-black hover:bg-gray-800 text-white"
          >
            Get Directions
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TourismActivitiesDetailsPage;
