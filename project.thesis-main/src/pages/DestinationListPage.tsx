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
        <h1 className="text-4xl font-bold mb-2">Destinations in Albay</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover Albay’s most iconic and hidden destinations — from scenic
          hills and beaches to historical landmarks and eco-tourism wonders.
        </p>

        {/* Highlight Section */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Featured Destination: Ligñon Hill</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Ligñon Hill Nature Park offers a panoramic view of Mayon Volcano,
                Albay Gulf, and Legazpi City. The hill features an observatory deck,
                zipline, and a scenic hiking trail perfect for adventure seekers.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Perfect view of Mayon Volcano</li>
                <li>Adventure activities like zipline and trekking</li>
                <li>Sunrise and sunset viewing spots</li>
              </ul>
              <Button className="mt-4">Explore Ligñon Hill</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://source.unsplash.com/1200x800/?Lignon%20Hill,Mayon%20Volcano"
                alt="Ligñon Hill"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Destinations List */}
        <DestinationsList />
      </div>

      <Footer />
    </div>
  );
};

export default DestinationListPage;
