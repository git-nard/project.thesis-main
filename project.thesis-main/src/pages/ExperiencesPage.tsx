import React from "react";
import Navbar from "@/components/layout/Navbar";
import FeaturedExperiences from "@/components/featured/FeaturedExperiences";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ExperiencesPage = () => {
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

        <h1 className="text-4xl font-bold mb-2">Experiences in Albay</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover unique activities and experiences that will make your visit
          to Albay unforgettable, from volcano hiking to cultural immersion.
        </p>

        <FeaturedExperiences
          title="Unforgettable Experiences"
          subtitle="Explore the best activities and adventures that Albay has to offer"
        />
      </div>

      <Footer />
    </div>
  );
};

export default ExperiencesPage;
