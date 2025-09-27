// src/pages/Saved.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Landmark, Utensils, Bed, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Saved = () => {
  const savedCategories = [
    {
      title: "Saved Tourist Spots",
      description: "View the attractions you’ve bookmarked for later.",
      link: "/saved/spots",
      icon: <Landmark className="w-10 h-10 text-blue-600" />,
      bg: "bg-gradient-to-br from-blue-100 to-blue-50",
    },
    {
      title: "Saved Restaurants",
      description: "Check out the restaurants you want to try.",
      link: "/saved/restaurants",
      icon: <Utensils className="w-10 h-10 text-pink-600" />,
      bg: "bg-gradient-to-br from-pink-100 to-pink-50",
    },
    {
      title: "Saved Hotels",
      description: "Keep track of your favorite hotels and stays.",
      link: "/saved/hotels",
      icon: <Bed className="w-10 h-10 text-green-600" />,
      bg: "bg-gradient-to-br from-green-100 to-green-50",
    },
    {
      title: "All Saved Places",
      description: "See everything you’ve saved in one place.",
      link: "/saved/all",
      icon: <Heart className="w-10 h-10 text-red-600" />,
      bg: "bg-gradient-to-br from-red-100 to-red-50",
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
        ❤️ Saved Places
      </h1>

      {/* Saved Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {savedCategories.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className={`${item.bg} p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center`}
          >
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Saved;
