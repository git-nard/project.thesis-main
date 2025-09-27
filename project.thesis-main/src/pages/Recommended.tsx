// src/pages/Recommended.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Camera, Utensils, Hotel, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Recommended = () => {
  const categories = [
    {
      title: "Tourist Spots",
      description: "Discover breathtaking destinations tailored for you.",
      link: "/tourist-spots",   
      icon: <MapPin className="w-10 h-10 text-blue-600" />,
      bg: "bg-gradient-to-br from-blue-100 to-blue-50",
    },
    {
      title: "Attractions",
      description: "Check out exciting attractions and adventures nearby.",
      link: "/attractions",
      icon: <Camera className="w-10 h-10 text-pink-600" />,
      bg: "bg-gradient-to-br from-pink-100 to-pink-50",
    },
    {
      title: "Restaurants",
      description: "Taste the best local flavors and top-rated restaurants.",
      link: "/restaurants",
      icon: <Utensils className="w-10 h-10 text-green-600" />,
      bg: "bg-gradient-to-br from-green-100 to-green-50",
    },
    {
      title: "Hotels",
      description: "Find cozy and comfortable hotels for your stay.",
      link: "/hotels",
      icon: <Hotel className="w-10 h-10 text-yellow-600" />,
      bg: "bg-gradient-to-br from-yellow-100 to-yellow-50",
    },
  ];

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-900">
        🌍 Recommended For You
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {categories.map((category, idx) => (
          <Link
            to={category.link}
            key={idx}
            className={`${category.bg} p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center`}
          >
            <div className="mb-4">{category.icon}</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {category.title}
            </h2>
            <p className="text-gray-600 text-lg">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
