import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Clock, Utensils } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const RestaurantDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-500 text-lg">No restaurant data available.</p>
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
    document.title = `${name} - Restaurant Details`;
  }, [name]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16 flex-1">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-2 mb-6"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <p className="text-gray-600">{cuisine}</p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-md mb-8">
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          {description}
        </p>

        {/* Details */}
        <div className="space-y-3 text-gray-700 mb-8">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-500" />
            <span>{openingHours}</span>
          </div>
          <div className="flex items-center">
            <Utensils className="w-5 h-5 mr-2 text-blue-500" />
            <span>{priceRange}</span>
          </div>
        </div>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-8">
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

        {/* Directions */}
        <Button
          className="mt-6"
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

export default RestaurantDetailsPage;
