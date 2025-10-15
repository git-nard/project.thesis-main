import React from "react";
import Navbar from "@/components/layout/Navbar";
import HotelsList from "@/components/accommodations/HotelsList";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HotelsPage = () => {
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

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Accommodations in Albay</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find the perfect place to stay during your visit to Albay, from luxury
            resorts with volcano views to budget-friendly hotels in the city.
          </p>
        </div>


        <HotelsList />
      </div>

      <Footer />
    </div>
  );
};

export default HotelsPage;
