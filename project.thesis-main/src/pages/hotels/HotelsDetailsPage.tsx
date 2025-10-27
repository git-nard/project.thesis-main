import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const HotelDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Handle direct access without state
  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-500">No hotel data available.</p>
        <Button className="mt-4" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  const { name, image, description, location, category, hours } = state;

  useEffect(() => {
    document.title = name ? `${name} - Hotel Details` : "Hotel Details";
  }, [name]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* ✅ Back Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-2 mb-6 text-gray-800 hover:text-blue-600"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>

        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-6">
          {category || "Hotel / Accommodation"}
        </p>

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
        {location && (
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        )}

        {/* Operating Hours */}
        {hours && <p className="text-gray-600 mb-6">{hours}</p>}

        {/* ✅ Get Directions Button (with Route) */}
        <Button
          className="bg-black hover:bg-gray-800 text-white"
          onClick={() =>
            window.open(
              `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodeURIComponent(
                name + " " + location
              )}`,
              "_blank"
            )
          }
        >
          <MapPin className="mr-2 h-4 w-4" />
          Get Directions
        </Button>
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetailPage;
