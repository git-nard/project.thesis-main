import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import TouristSpotsList from "../../components/tourists-spots/TouristSpotsList";
import TouristSpotCard from "@/components/tourists-spots/TouristSpotsCard";

const SavedTouristSpotsList = () => {

    const [spots, setSpots] = useState([]); // Replace with actual data fetching logic

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">

        {/* Tourist Spots List */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Saved Tourist Spots
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {spots.map((spot) => (
                <TouristSpotCard key={spot.id} {...spot} />
                ))}
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SavedTouristSpotsList;
