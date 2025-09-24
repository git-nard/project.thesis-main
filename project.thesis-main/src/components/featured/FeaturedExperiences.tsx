import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import AttractionCard from "../attractions/AttractionCard";
import HotelCard from "../accommodations/HotelCard";
import RestaurantCard from "../dining/RestaurantCard";

interface Experience {
  id: string;
  name: string;
  image: string;
  description: string;
  type: "attraction" | "hotel" | "restaurant";
  featured: boolean;
  seasonal: boolean;
  rating: number;
  location: string;
  category?: string;
  openingHours?: string;
  priceRange?: string;
  amenities?: string[];
  cuisineType?: string;
}

interface FeaturedExperiencesProps {
  experiences?: Experience[];
  title?: string;
  subtitle?: string;
}

const FeaturedExperiences = ({
  experiences = [
    {
      id: "1",
      name: "Mayon Volcano Hike",
      image:
        "https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Experience the thrill of hiking the perfect cone of Mayon Volcano with experienced guides and breathtaking views.",
      type: "attraction",
      featured: true,
      seasonal: false,
      rating: 4.9,
      location: "Legazpi City, Albay",
      category: "Adventure",
      openingHours: "Tours start at 5:00 AM",
    },
    {
      id: "2",
      name: "Cagsawa Ruins Festival",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Annual festival celebrating local culture with traditional dances, music, and food against the backdrop of the historic Cagsawa Ruins.",
      type: "attraction",
      featured: true,
      seasonal: true,
      rating: 4.7,
      location: "Cagsawa Ruins Park, Daraga, Albay",
      category: "Cultural",
      openingHours: "February 1-7, 8:00 AM - 10:00 PM",
    },
    {
      id: "3",
      name: "The Oriental Legazpi",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description:
        "Luxury hotel offering panoramic views of Mayon Volcano and Albay Gulf, with world-class amenities and exceptional service.",
      type: "hotel",
      featured: true,
      seasonal: false,
      rating: 4.8,
      location: "Legazpi City, Albay",
      priceRange: "₱₱₱",
      amenities: [
        "Infinity Pool",
        "Spa",
        "Fine Dining",
        "Fitness Center",
        "Conference Rooms",
      ],
    },
    {
      id: "4",
      name: "Small Talk Café",
      image:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Famous for its Bicol Express pasta and fusion dishes that blend local flavors with international cuisine.",
      type: "restaurant",
      featured: true,
      seasonal: false,
      rating: 4.6,
      location: "Old Albay District, Legazpi City",
      cuisineType: "Bicolano Fusion",
      priceRange: "₱₱",
    },
    {
      id: "5",
      name: "Sumlang Lake",
      image:
        "https://images.unsplash.com/photo-1580100586938-02822d99c4a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Picturesque lake with Mayon Volcano as backdrop, offering bamboo rafting, local crafts, and relaxation spots.",
      type: "attraction",
      featured: true,
      seasonal: false,
      rating: 4.5,
      location: "Sumlang, Camalig, Albay",
      category: "Nature",
      openingHours: "7:00 AM - 6:00 PM",
    },
    {
      id: "6",
      name: "Misibis Bay Resort",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Exclusive island resort offering private villas, water sports, and luxury amenities on the beautiful Cagraray Island.",
      type: "hotel",
      featured: true,
      seasonal: false,
      rating: 4.9,
      location: "Cagraray Island, Bacacay, Albay",
      priceRange: "₱₱₱₱",
      amenities: [
        "Private Beach",
        "Infinity Pool",
        "Spa",
        "Water Sports",
        "Multiple Restaurants",
      ],
    },
  ],
  title = "Featured Experiences",
  subtitle = "Discover the best of Albay with our handpicked seasonal attractions and top-rated experiences",
}: FeaturedExperiencesProps) => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Filter experiences based on active tab
  const filteredExperiences = experiences.filter((exp) => {
    if (activeTab === "all") return true;
    if (activeTab === "seasonal") return exp.seasonal;
    if (activeTab === "top-rated") return exp.rating >= 4.7;
    return true;
  });

  const totalPages = Math.ceil(filteredExperiences.length / itemsPerPage);
  const currentItems = filteredExperiences.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage,
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1,
    );
  };

  // Render appropriate card based on experience type
  const renderExperienceCard = (experience: Experience) => {
    switch (experience.type) {
      case "attraction":
        return (
          <AttractionCard
            id={experience.id}
            name={experience.name}
            image={experience.image}
            description={experience.description}
            rating={experience.rating}
            location={experience.location}
            category={experience.category}
            openingHours={experience.openingHours}
          />
        );
      case "hotel":
        return (
          <HotelCard
            id={experience.id}
            name={experience.name}
            image={experience.image}
            description={experience.description}
            location={experience.location}
            priceRange={experience.priceRange}
            rating={experience.rating}
            amenities={experience.amenities}
          />
        );
      case "restaurant":
        return (
          <RestaurantCard
            id={experience.id}
            name={experience.name}
            image={experience.image}
            description={experience.description}
            rating={experience.rating}
            address={experience.location}
            cuisineType={experience.cuisineType}
            priceRange={experience.priceRange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-8"
        >
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                All Experiences
              </TabsTrigger>
              <TabsTrigger value="seasonal" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Seasonal
              </TabsTrigger>
              <TabsTrigger
                value="top-rated"
                className="flex items-center gap-2"
              >
                <Award className="h-4 w-4" />
                Top Rated
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            {filteredExperiences.length === 0 && (
              <p className="text-center text-gray-500">
                No experiences available
              </p>
            )}
          </TabsContent>
          <TabsContent value="seasonal" className="mt-6">
            {filteredExperiences.length === 0 && (
              <p className="text-center text-gray-500">
                No seasonal experiences available
              </p>
            )}
          </TabsContent>
          <TabsContent value="top-rated" className="mt-6">
            {filteredExperiences.length === 0 && (
              <p className="text-center text-gray-500">
                No top-rated experiences available
              </p>
            )}
          </TabsContent>
        </Tabs>

        <div className="relative">
          {/* Navigation buttons */}
          {totalPages > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 justify-center flex-wrap md:flex-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentItems.map((experience) => (
                <motion.div
                  key={experience.id}
                  className="w-full sm:w-auto flex-1 min-w-[280px] max-w-[350px] mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {renderExperienceCard(experience)}
                  {experience.seasonal && (
                    <Badge className="mt-2 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">
                      <Calendar className="h-3 w-3 mr-1" /> Seasonal Event
                    </Badge>
                  )}
                  {experience.rating >= 4.7 && (
                    <Badge className="mt-2 ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
                      <Award className="h-3 w-3 mr-1" /> Top Rated
                    </Badge>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  variant={currentIndex === index ? "default" : "outline"}
                  size="icon"
                  className={`w-3 h-3 p-0 rounded-full ${currentIndex === index ? "bg-primary" : "bg-transparent"}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            Explore All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
