import React from "react";
import Navbar from "@/components/layout/Navbar";
import AttractionsList from "@/components/attractions/AttractionsList";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AttractionsPage = () => {
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

        <h1 className="text-4xl font-bold mb-2">
          Tourist Attractions in Albay
        </h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover the natural wonders, historical sites, and cultural landmarks
          that make Albay a must-visit destination in the Philippines.
        </p>

        <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Explore Mayon Volcano</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Known as the "Perfect Cone" for its symmetrical shape, Mayon
                Volcano is an active stratovolcano and the most iconic landmark
                in Albay. Standing at 2,462 meters (8,077 feet), it offers
                breathtaking views and exciting activities for adventure
                seekers.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                    •
                  </span>
                  <span>ATV rides around the lava trail</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                    •
                  </span>
                  <span>Hiking and trekking tours</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                    •
                  </span>
                  <span>Photography spots at Cagsawa Ruins</span>
                </div>
              </div>
              <Button className="mt-4">View Mayon Volcano Tours</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Mayon Volcano"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <AttractionsList />
      </div>

      <Footer />
    </div>
  );
};

export default AttractionsPage;
