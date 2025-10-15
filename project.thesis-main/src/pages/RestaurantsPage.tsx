import React from "react";
import Navbar from "@/components/layout/Navbar";
import RestaurantsList from "@/components/dining/RestaurantsList";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RestaurantsPage = () => {
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
          <h1 className="text-4xl font-bold mb-2">Restaurants in Albay</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Taste the flavors of Bicol cuisine, known for its spicy dishes and
            unique culinary traditions at these local restaurants.
          </p>
        </div>


        <RestaurantsList />
      </div>

      <Footer />
    </div>
  );
};

export default RestaurantsPage;
