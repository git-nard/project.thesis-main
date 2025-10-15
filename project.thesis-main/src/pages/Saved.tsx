import React from "react";
import { Link } from "react-router-dom";
import { Heart, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Saved = () => {
  const allSaved = {
    title: "All Saved",
    description: "See everything you’ve saved in one place.",
    link: "/saved/all",
    icon: <Heart className="w-20 h-20 text-red-500" />, // red heart
    bg: "bg-gradient-to-br from-red-100 via-pink-100 to-red-50",
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-4">
        <div className="mb-6">
          <Link to="/">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-700 hover:text-red-500"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-3">
          <Heart className="h-12 w-12 text-red-500" />
          <h1 className="text-6xl font-extrabold text-gray-800">Saved</h1>
        </div>
        <p className="text-gray-600 mt-3 text-xl">
          See everything you’ve saved, all in one place.
        </p>
      </div>

      {/* Larger All Saved Card */}
      <div className="flex justify-center">
        <Link
          to={allSaved.link}
          className={`${allSaved.bg} p-20 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center w-full max-w-5xl min-h-[400px]`}
        >
          <div className="mb-6">{allSaved.icon}</div>
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            {allSaved.title}
          </h2>
          <p className="text-gray-700 text-2xl max-w-2xl leading-relaxed">
            {allSaved.description}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Saved;
