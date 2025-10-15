// pages/TourismActivitiesPage.tsx
import React from "react";
import Navbar from "@/components/layout/Navbar";
import TourismActivitiesList from "@/components/tourism-activities/TourismActivitiesList";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TourismActivitiesPage = () => {
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
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Tourism Activities in Albay</h1>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover Albay’s activities across all municipalities — from cultural workshops and farm visits to island-hopping and adventure tours.
          </p>
        </div>


        {/* Full Activities Grid */}
        <TourismActivitiesList />
      </div>

      <Footer />
    </div>
  );
};

export default TourismActivitiesPage;

/* Small featured card component (kept in the same file for convenience) */
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LinkFeatured({ id, title, img, category, municipality }: { id: string; title: string; img: string; category: string; municipality: string; }) {
  const navigate = useNavigate();
  return (
    <Card className="h-[260px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-36 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <Badge className="absolute top-3 right-3 bg-black/70 text-white">{category}</Badge>
        <button
          className="group absolute top-3 left-3 bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-500"
          onClick={() => {}}
          aria-hidden
        >
          <i className="fa-solid fa-bookmark text-red-500 group-hover:text-white"></i>
        </button>
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-semibold truncate">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0 text-sm text-gray-600 flex-grow">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>{municipality}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" onClick={() => navigate(`/tourism-activities/${id}`)}>
          View Details
        </Button>
        <Button variant="ghost" size="sm" className="text-blue-600" onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(title + " " + municipality)}`, "_blank")}>
          <MapPin className="w-4 h-4 mr-1" /> Map
        </Button>
      </CardFooter>
    </Card>
  );
}
