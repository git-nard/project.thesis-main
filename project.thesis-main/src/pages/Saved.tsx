import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ChevronLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSavedSpots, saveSpot } from "../savedSpots";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const Saved = () => {
  const [savedSpots, setSavedSpots] = useState<any[]>([]);

  // 🧠 Load saved items from localStorage
  useEffect(() => {
    setSavedSpots(getSavedSpots());
  }, []);

  // 🗑️ Handle Unsave with confirmation
  const handleUnsave = (spot: any) => {
    const confirmUnsave = window.confirm(
      `Are you sure you want to remove "${spot.name}" from your saved list?`
    );
    if (confirmUnsave) {
      saveSpot(spot); // saveSpot toggles → removes if already saved
      setSavedSpots(getSavedSpots());
    }
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
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-3">
          <Heart className="h-12 w-12 text-red-500" />
          <h1 className="text-5xl font-extrabold text-gray-800">Saved</h1>
        </div>
        <p className="text-gray-600 mt-3 text-xl">
          See everything you’ve saved — Hotels, Restaurants, Tourist Spots, and
          more.
        </p>
      </div>

      {/* If nothing saved */}
      {savedSpots.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          You haven’t saved anything yet.
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto px-4">
          {savedSpots.map((spot) => (
            <Card
              key={spot.id}
              className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-3 right-3 bg-red-500 hover:bg-red-600"
                  onClick={() => handleUnsave(spot)}
                >
                  <Trash2 className="h-4 w-4 text-white" />
                </Button>
              </div>

              {/* Info */}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold truncate">
                  {spot.name}
                </CardTitle>
                {spot.location && (
                  <CardDescription className="flex items-center text-sm text-gray-600">
                    {spot.location}
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {spot.description || "No description available."}
                </p>
              </CardContent>

              {/* Footer */}
              <CardFooter className="flex justify-end items-center">
                <span className="text-xs text-gray-500 capitalize">
                  {spot.type || "place"}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
