import React, { useEffect, useState } from "react";
import { Clock, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Trip {
  id: number;
  destination: string;
  date: string;
  summary: string;
}

function PastTrips() {
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: 1,
      destination: "Legazpi City",
      date: "August 2024",
      summary: "Visited Lignon Hill, Embarcadero, and Albay Park.",
    },
    {
      id: 2,
      destination: "Tiwi, Albay",
      date: "May 2024",
      summary: "Relaxed at Tiwi Hot Springs and explored the pottery village.",
    },
  ]);

  useEffect(() => {
    document.title = "Past Trips - Albay Travel";
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-10">
        <Clock className="mx-auto h-12 w-12 text-gray-900 mb-3" />
        <h1 className="text-4xl font-bold text-gray-900">Past Trips</h1>
        <p className="text-gray-600 mt-2">
          Revisit your previous journeys and relive your Albay adventures.
        </p>
      </div>

      {/* Trip List */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-gray-900" />
              <h2 className="text-xl font-semibold text-gray-900">
                {trip.destination}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Calendar className="h-4 w-4" />
              <span>{trip.date}</span>
            </div>

            <p className="text-gray-700 mb-6">{trip.summary}</p>

            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                View Details
              </Button>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2">
                Revisit Plan
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {trips.length === 0 && (
        <p className="text-center text-gray-500 mt-20 italic">
          You have no past trips yet. Start exploring and your adventures will appear here!
        </p>
      )}
    </div>
  );
}

export default PastTrips;
