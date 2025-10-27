import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Clock, Utensils } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const RestaurantsDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-500">No restaurant data available.</p>
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
    cuisine,
    priceRange,
    openingHours,
    features,
  } = state;

  useEffect(() => {
    document.title = name
      ? `${name} - Restaurant Details`
      : "Restaurant Details";
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

        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-6">
          {cuisine || "Restaurant"} {priceRange && `• ${priceRange}`}
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

        {/* Opening Hours */}
        {openingHours && (
          <p className="text-gray-600 mb-2">
            <Clock className="inline w-4 h-4 mr-1" /> {openingHours}
          </p>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Available Options</h2>
            <div className="flex flex-wrap gap-2">
              {features.map((feature: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Get Directions Button (Route-based) */}
        <div className="flex gap-4 mt-6">
          <Button
            onClick={() =>
              window.open(
                `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodeURIComponent(
                  name + " " + location
                )}`,
                "_blank"
              )
            }
            className="bg-black hover:bg-gray-800 text-white"
          >
            <MapPin className="mr-2 h-4 w-4" />
            Get Directions
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantsDetailsPage;
