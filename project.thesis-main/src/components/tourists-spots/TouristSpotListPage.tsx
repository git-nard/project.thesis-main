import React from "react";
import Navbar from "@/components/layout/Navbar";
import TouristSpotsList from "./TouristSpotsList";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TouristSpotListPage = () => {
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Tourist Spots in Albay</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore Albay’s lakes, hills, churches, and unique destinations that
              showcase the natural beauty and rich culture of the province.
            </p>
          </div>


        {/* Tourist Spots List */}
        <TouristSpotsList />
      </div>

      <Footer />
    </div>
  );
};

export default TouristSpotListPage;
