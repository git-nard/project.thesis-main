import React from "react";
import TouristSpotCard from "./TouristSpotsCard";

const spots = [
  {
    id: "1",
    name: "Mayon Volcano",
    image:
      "https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?auto=format&fit=crop&w=1000&q=80",
    description:
      'Known as the "Perfect Cone" for its symmetrical shape, Mayon Volcano is the most iconic landmark in Albay.',
    location: "Albay Province, Philippines",
    category: "Natural Wonder",
    openingHours: "Open 24 hours",
  },
  {
    id: "2",
    name: "Cagsawa Ruins",
    image:
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80",
    description:
      "Historic ruins of a 16th-century church destroyed by Mayon's eruption in 1814.",
    location: "Daraga, Albay, Philippines",
    category: "Historical Site",
    openingHours: "6:00 AM - 6:00 PM",
  },
];

const TouristSpotsList = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Tourist Spots in Albay
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((spot) => (
          <TouristSpotCard key={spot.id} {...spot} />
        ))}
      </div>
    </div>
  );
};

export default TouristSpotsList;
