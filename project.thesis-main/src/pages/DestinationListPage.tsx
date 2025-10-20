import React from "react";
import Navbar from "@/components/layout/Navbar";
import DestinationsList from "@/components/destinations/DestinationsLists";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DestinationListPage = () => {
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
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">Destinations in Albay</h1>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover Albay’s most iconic and hidden destinations — from scenic
              hills and beaches to historical landmarks and eco-tourism wonders.
            </p>
          </div>


        {/* Destinations List */}
        <DestinationsList />
      </div>

      <Footer />
    </div>
  );
};

export default DestinationListPage;
