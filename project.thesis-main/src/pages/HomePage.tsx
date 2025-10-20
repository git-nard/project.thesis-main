import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/search/SearchBar";
import FeaturedSection from "../components/featured/FeaturedSection";
import MapPreview from "@/components/map/MapPreview";
import { Compass, Hotel, Utensils } from "lucide-react";
import Footer from "@/components/layout/Footer";

const HomePage = () => {
  // Handler for search functionality
  const handleSearch = (query: string, filters: any) => {
    console.log("Search query:", query, "Filters:", filters);
    // In a real app, this would navigate to search results or filter content
  };

  // Handler for hero CTA button
  const handleExploreClick = () => {
    // Smooth scroll to categories section
    document.getElementById("categories-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Handler for view all clicks in featured section
  const handleViewAllClick = (category: string) => {
    console.log(`View all ${category} clicked`);
    // In a real app, this would navigate to the respective category page
  };

  // Handler for featured item clicks
  const handleFeaturedItemClick = (item: any) => {
    console.log("Featured item clicked:", item);
    // In a real app, this would navigate to the detail page for the item
  };

  // Handler for view full map click
  const handleViewFullMapClick = () => {
    console.log("View full map clicked");
    // In a real app, this would navigate to the interactive map page
  };

  // Handler for map location clicks
  const handleMapLocationClick = (location: any) => {
    console.log("Map location clicked:", location);
    // In a real app, this would show a popup or navigate to the location detail
  };

  // Handler for category card clicks
  const handleCategoryClick = (categoryId: string) => {
    console.log(`Category ${categoryId} clicked`);
    // In a real app, this would navigate to the respective category page
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        onSearch={(searchTerm: string) => handleSearch(searchTerm, {})}
        onCtaClick={handleExploreClick}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Global Search Bar (centered below hero) */}
        <div className="container mx-auto -mt-8 px-4 relative z-20">
          <div className="mx-auto max-w-3xl">
            <SearchBar
              onSearch={handleSearch}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        
        {/* Categories Section */}
        <div id="categories-section">
          <section className="w-full py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <div className="mb-10 text-center">
                <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Explore Albay
                </h2>
                <p className="mx-auto max-w-2xl text-gray-600">
                  Discover the best tourist spots, accommodations, and dining
                  options in Albay, Philippines.
                </p>
              </div>

              {/* Category Cards */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Tourist Spots Card */}
                <div
                  className="group h-full w-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg bg-white hover:border-green-400 rounded-lg border"
                  onClick={() => handleCategoryClick("attractions")}
                >
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Compass className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold">Tourist Spots</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm text-gray-600">
                      Explore the natural wonders and cultural heritage sites of
                      Albay, including the iconic Mayon Volcano.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center text-sm font-medium transition-colors text-green-600 group-hover:text-green-700">
                      Explore Tourist Spots
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Accommodations Card */}
                <div
                  className="group h-full w-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg bg-white hover:border-blue-400 rounded-lg border"
                  onClick={() => handleCategoryClick("hotels")}
                >
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Hotel className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold">Accommodations</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm text-gray-600">
                      Find the perfect place to stay, from luxury resorts with
                      volcano views to budget-friendly hotels in the city.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center text-sm font-medium transition-colors text-blue-600 group-hover:text-blue-700">
                      Explore Accommodations
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Restaurants Card */}
                <div
                  className="group h-full w-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg bg-white hover:border-orange-400 rounded-lg border"
                  onClick={() => handleCategoryClick("restaurants")}
                >
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Utensils className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold">Restaurants</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm text-gray-600">
                      Taste the flavors of Bicol cuisine, known for its spicy
                      dishes and unique culinary traditions.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center text-sm font-medium transition-colors text-orange-600 group-hover:text-orange-700">
                      Explore Restaurants
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Featured Section */}
        <FeaturedSection
          onViewAllClick={handleViewAllClick}
          onItemClick={handleFeaturedItemClick}
        />

        {/* Map Preview Section */}
        <div className="container mx-auto my-16 px-4">
          <MapPreview
            onViewFullMap={handleViewFullMapClick}
            onLocationClick={handleMapLocationClick}
          />
        </div>

        {/* Call to Action Section */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Explore Albay?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Plan your perfect trip to Albay and discover the beauty of Mayon
              Volcano, local cuisine, and Filipino hospitality.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                to="/tourist-spots"
                className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 shadow-md transition-colors hover:bg-blue-50"
              >
                Explore Tourist Spots
              </Link>
              <Link
                to="/map"
                className="rounded-full border border-white bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Interactive Map
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
