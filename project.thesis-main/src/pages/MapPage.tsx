import React from "react";
import Navbar from "@/components/layout/Navbar";
import InteractiveMap from "@/components/map/InteractiveMap";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MapPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2">Interactive Map of Albay</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Explore tourist spots, hotels, and restaurants across Albay with our
          interactive map. Plan your itinerary by discovering what's nearby.
        </p>

        <InteractiveMap />

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Map Navigation Tips</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                •
              </span>
              <span>Use the search bar to find specific locations</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                •
              </span>
              <span>Filter by category using the tabs at the bottom</span>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-2">
                •
              </span>
              <span>
                Click on any marker to see more details about the location
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                •
              </span>
              <span>
                Use the filter button to refine your search by price, rating,
                and more
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapPage;
