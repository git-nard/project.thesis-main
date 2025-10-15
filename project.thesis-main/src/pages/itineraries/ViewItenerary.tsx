// src/pages/ViewItenerary.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  ChevronLeft,
  MapPin,
  Plane,
  Luggage,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Activity {
  time: string;
  description: string;
}

interface ItineraryDay {
  dayNumber: number;
  activities: Activity[];
}

interface Itinerary {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
}

const ViewItenerary: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userItineraries");
    if (stored) {
      const parsed = JSON.parse(stored) as Itinerary[];
      const found = parsed.find((i) => i.id === id);
      if (found) setItinerary(found);
    }
  }, [id]);

  if (!itinerary) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-600">
        <p className="text-lg mb-4">Itinerary not found.</p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Fixed header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-blue-100 px-6 py-3 flex items-center justify-between">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-blue-700"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>
        <h1 className="text-xl font-bold text-blue-900 truncate">
          {itinerary.title}
        </h1>
        <Link to="/saved-itineraries">
          <Button variant="outline" className="text-blue-600 border-blue-400">
            <Luggage className="w-4 h-4 mr-1" /> Saved
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border border-blue-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 sm:mb-0">
              {itinerary.title}
            </h2>
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar className="w-4 h-4" />
              {itinerary.startDate} → {itinerary.endDate}
            </div>
          </div>
        </div>

        {/* Day-by-Day Timeline */}
        {itinerary.days.map((day) => (
          <div
            key={day.dayNumber}
            className="mb-10 bg-gradient-to-r from-blue-100 to-sky-50 rounded-2xl shadow-sm p-6 border border-blue-100"
          >
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              🗓️ Day {day.dayNumber}
            </h3>

            <div className="space-y-4">
              {day.activities.length === 0 ? (
                <p className="text-gray-500 italic">
                  No activities added for this day.
                </p>
              ) : (
                day.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100"
                  >
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {act.time || "—"} — {act.description}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}

        <div className="text-center mt-8">
          <Link to="/create-itinerary">
            <Button className="bg-blue-600 text-white rounded-full px-6 py-3 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-1" /> Add New Itinerary
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewItenerary;
