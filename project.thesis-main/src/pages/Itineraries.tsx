// src/pages/Itineraries.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Map, PlusCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Itineraries = () => {
  const itineraries = [
    {
      title: "Recommended Itineraries",
      description:
        "Explore curated travel routes across Albay — from scenic mountains to coastal adventures.",
      link: "/itineraries/recommended",
      icon: <Map className="w-16 h-16 text-blue-600" />,
      bg: "bg-gradient-to-br from-blue-100 to-blue-50",
    },
    {
      title: "Create Your Itinerary",
      description:
        "Design your personalized travel plan and discover Albay your way.",
      link: "/itineraries/create",
      icon: <PlusCircle className="w-16 h-16 text-green-600" />,
      bg: "bg-gradient-to-br from-green-100 to-green-50",
    },
  ];

  useEffect(() => {
    document.title = "Itineraries - Albay Travel";
  }, []);

  return (
    <div className="p-10 min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col">
      {/* Back to Home */}
      <div className="container mx-auto px-4 py-4">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-4 text-center text-blue-900">
        🗺️ My Itineraries
      </h1>
      <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
        Plan your adventures in Albay — explore our recommended routes or
        design your own perfect itinerary.
      </p>

      {/* Itineraries Grid */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 max-w-7xl mx-auto">
        {itineraries.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className={`${item.bg} w-full md:w-[40%] p-16 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center`}
          >
            <div className="mb-6">{item.icon}</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Itineraries;
