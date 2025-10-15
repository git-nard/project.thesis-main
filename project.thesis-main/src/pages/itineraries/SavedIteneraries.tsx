import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Eye, Luggage } from "lucide-react";

interface Itinerary {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  days: any[];
}

const SavedIteneraries: React.FC = () => {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("userItineraries");
    if (stored) setItineraries(JSON.parse(stored));
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Saved Itineraries</h1>
        <Link to="/itineraries/create">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            + Create New
          </Button>
        </Link>
      </div>

      {itineraries.length === 0 ? (
        <p className="text-gray-600 text-center mt-10">
          You have no saved itineraries yet. Start creating your adventure!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header Banner */}
              <div className="h-40 bg-gradient-to-r from-blue-400 to-sky-300 flex items-center justify-center rounded-t-2xl">
                <Luggage className="w-12 h-12 text-white opacity-90" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-800 mb-2 truncate">
                  {itinerary.title}
                </h2>

                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  {itinerary.startDate} → {itinerary.endDate}
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <Luggage className="w-4 h-4" />
                  {itinerary.days.length}{" "}
                  {itinerary.days.length === 1 ? "Day" : "Days"}
                </div>

                <div className="flex justify-between items-center">
                  <Link to={`/itinerary/${itinerary.id}`}>
                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-600 hover:bg-blue-50 flex items-center gap-2 rounded-full px-4"
                    >
                      <Eye className="w-4 h-4" /> View
                    </Button>
                  </Link>

                  <Button
                    variant="ghost"
                    onClick={() => {
                      const filtered = itineraries.filter(
                        (i) => i.id !== itinerary.id
                      );
                      setItineraries(filtered);
                      localStorage.setItem(
                        "userItineraries",
                        JSON.stringify(filtered)
                      );
                    }}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full px-3"
                  >
                    <Luggage className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedIteneraries;
