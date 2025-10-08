// src/pages/Itineraries.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Map, Clock, CheckCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Itineraries = () => {
  const itineraries = [
    {
      title: "Upcoming Trips",
      description: "See your planned trips and future schedules.",
      link: "/itineraries/upcoming",
      icon: <Calendar className="w-10 h-10 text-blue-600" />,
      bg: "bg-gradient-to-br from-blue-100 to-blue-50",
    },
    {
      title: "Day Planner",
      description: "Organize your daily activities for each trip.",
      link: "/itineraries/day-planner",
      icon: <Clock className="w-10 h-10 text-pink-600" />,
      bg: "bg-gradient-to-br from-pink-100 to-pink-50",
    },
    {
      title: "Past Trips",
      description: "Review your past travel experiences and memories.",
      link: "/itineraries/past-trips",
      icon: <CheckCircle className="w-10 h-10 text-green-600" />,
      bg: "bg-gradient-to-br from-green-100 to-green-50",
    },
    {
      title: "Map Overview",
      description: "View all your trips on a travel map.",
      link: "/itineraries/map",
      icon: <Map className="w-10 h-10 text-yellow-600" />,
      bg: "bg-gradient-to-br from-yellow-100 to-yellow-50",
    },
  ];

  useEffect(() => {
    document.title = "My Itineraries - Albay Travel";
  }, []);

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
        🗓️ My Itineraries
      </h1>

      {/* Itineraries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {itineraries.map((item, idx) => (
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

export default Itineraries;
