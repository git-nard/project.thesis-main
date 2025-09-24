import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Example data – you could fetch from API or JSON instead
const spots = {
  mayon: {
    name: "Mayon Volcano",
    description:
      "Known as the 'Perfect Cone' for its symmetrical shape, Mayon Volcano is an active stratovolcano and the most iconic landmark in Albay.",
    activities: [
      "ATV rides around the lava trail",
      "Hiking and trekking tours",
      "Photography at Cagsawa Ruins",
    ],
    image:
      "https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?auto=format&fit=crop&w=1170&q=80",
  },
  cagsawa: {
    name: "Cagsawa Ruins",
    description:
      "The Cagsawa Ruins are the remnants of a 16th-century Franciscan church destroyed by Mayon's eruption in 1814.",
    activities: [
      "Historical walking tours",
      "Scenic views of Mayon Volcano",
      "Souvenir shopping at local stalls",
    ],
    image:
      "https://images.unsplash.com/photo-1608977957260-0a38fdd9d3f3?auto=format&fit=crop&w=1170&q=80",
  },
};

const TouristSpotPage = () => {
  const { id } = useParams<{ id: string }>();
  const spot = id ? spots[id as keyof typeof spots] : null;

  if (!spot) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Tourist spot not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/tourist-spots">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Tourist Spots
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4">{spot.name}</h1>
            <p className="text-gray-700 mb-6">{spot.description}</p>

            <h2 className="text-xl font-semibold mb-2">Things to do:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {spot.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>

            <Button className="mt-6">Book a Tour</Button>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={spot.image}
              alt={spot.name}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TouristSpotPage;
