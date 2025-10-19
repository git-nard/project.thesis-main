import React from "react";
import Header from "./layout/Header";
import HeroSection from "./home/HeroSection";
import InteractiveMap from "./map/InteractiveMap";
import AttractionsList from "./attractions/AttractionsList";
import HotelsList from "./accommodations/HotelsList";
import RestaurantsList from "./dining/RestaurantsList";
import FeaturedExperiences from "./featured/FeaturedExperiences";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onSearch={(query) => console.log(`Search query: ${query}`)} />

      {/* Hero Section */}
      <HeroSection onExploreClick={() => console.log("Explore map clicked")} />

      {/* Featured Experiences Section */}
      <section className="py-12 px-4">
        <FeaturedExperiences />
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Explore Albay
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover tourist spots, hotels, and restaurants across Albay with
              our interactive map
            </p>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* Tourist Attractions Section */}
      <section className="py-12">
        <AttractionsList />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
