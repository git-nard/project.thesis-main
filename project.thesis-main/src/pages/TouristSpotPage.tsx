import React from "react";
import Navbar from "@/components/layout/Navbar";
import TouristSpotsList from "../components/tourists-spots/TouristSpotsList";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TouristSpotsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <h1 className="text-4xl font-bold mb-2">Tourist Spots in Albay</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Explore Albay’s lakes, hills, churches, and unique destinations that
          showcase the natural beauty and rich culture of the province.
        </p>

        {/* Highlight Section */}
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Discover Danao Lake</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Nestled in Polangui, Danao Lake is a tranquil crater lake
                surrounded by lush greenery. It’s perfect for boating, picnics,
                and nature appreciation.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Boating and kayaking</li>
                <li>Picnic areas with scenic views</li>
                <li>Photography and bird watching</li>
              </ul>
              <Button className="mt-4">View Danao Lake Tours</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1170&q=80"
                alt="Danao Lake"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tourist Spots List */}
        <TouristSpotsList />
      </div>

      <Footer />
    </div>
  );
};

export default TouristSpotsPage;
