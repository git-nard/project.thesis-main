import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import InteractiveMap from "@/components/map/InteractiveMap";
import Footer from "@/components/layout/Footer";
import AttractionsList from "@/components/attractions/AttractionsList";

const HomePage = () => {
  const topTouristSpots = [
    {
      id: "1",
      rank: 1,
      name: "Cagsawa Ruins",
      municipality: "Daraga",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8c/40/87/cagsawa-ruins-park.jpg?w=1200&h=1200&s=1",
      description:
        "Historic ruins from the 1814 Mayon eruption, a symbol of Albay’s resilience.",
      domestic: 583597,
      foreign: 1960,
      total: 585557,
    },
    {
      id: "2",
      rank: 2,
      name: "Albay Parks and Wildlife",
      municipality: "Legazpi City",
      image:
        "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Albay-1.jpg",
      description:
        "A family-friendly eco-park home to local wildlife and lush greenery.",
      domestic: 303964,
      foreign: 2794,
      total: 306758,
    },
    {
      id: "3",
      rank: 3,
      name: "Highlands Park",
      municipality: "Legazpi City",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/fa/99/7b/the-parks-conservancy.jpg?w=900&h=-1&s=1",
      description:
        "A scenic viewpoint offering breathtaking panoramas of Mayon Volcano and Legazpi.",
      domestic: 229219,
      foreign: 1396,
      total: 230615,
    },
    {
      id: "4",
      rank: 4,
      name: "Sumlang Lake",
      municipality: "Camalig",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/a9/63/d8/img-20171230-083653-largejpg.jpg?w=1200&h=-1&s=1",
      description:
        "A tranquil lake with bamboo rafts and a stunning view of Mayon.",
      domestic: 113268,
      foreign: 1341,
      total: 114609,
    },
    {
      id: "5",
      rank: 5,
      name: "Kawa-Kawa Hill",
      municipality: "Ligao City",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2b/59/d2/img-20180326-100821-largejpg.jpg?w=1200&h=-1&s=1",
      description:
        "A spiritual and nature park known for its Stations of the Cross and scenic hilltop view.",
      domestic: 68024,
      foreign: 56,
      total: 68080,
    },
  ];

  const featuredAttractions = [
    {
      id: "1",
      name: "Mayon Volcano",
      image:
        "https://albay.gov.ph/wp-content/uploads/2020/02/joenabells_20200226_120826_0.jpg",
      description:
        'Known as the "Perfect Cone" for its symmetrical shape, Mayon Volcano is an active stratovolcano and a popular tourist destination in Albay.',
      location: "Albay Province, Philippines",
      category: "Natural Wonder",
      openingHours: "Open 24 hours",
    },
    {
      id: "2",
      name: "Cagsawa Ruins",
      image:
        "https://www.southeastasianarchaeology.com/wp-content/uploads/2022/05/Cagsawa-Ruins-The-Philippines.jpg",
      description:
        "Historic ruins of a 16th-century Franciscan church destroyed by the 1814 eruption of Mayon Volcano. The bell tower remains standing and is an iconic symbol of Albay.",
      location: "Daraga, Albay, Philippines",
      category: "Historical Site",
      openingHours: "6:00 AM - 6:00 PM",
    },
    {
      id: "3",
      name: "Sumlang Lake",
      image:
        "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Sumlang-9.jpg",
      description:
        "A serene lake offering stunning views of Mayon Volcano and traditional bamboo rafts for tourists to enjoy the scenery.",
      location: "Camalig, Albay, Philippines",
      category: "Natural Wonder",
      openingHours: "7:00 AM - 5:00 PM",
    },
    {
      id: "4",
      name: "Lignon Hill Nature Park",
      image:
        "https://gttp.images.tshiftcdn.com/375966/x/0/lignon-hill-nature-park.jpg",
      description:
        "A popular viewpoint offering panoramic views of Legazpi City, Mayon Volcano, and Albay Gulf. Features ziplines and hiking trails.",
      location: "Legazpi City, Albay, Philippines",
      category: "Nature Park",
      openingHours: "5:00 AM - 9:00 PM",
    },
    {
      id: "5",
      name: "Hoyop-Hoyopan Cave",
      image:
        "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Hoyop-2.jpg.crdownload.jpg",
      description:
        "A natural cave with interesting rock formations and a cool breeze flowing through it, hence its name which means 'blowing wind'.",
      location: "Camalig, Albay, Philippines",
      category: "Natural Wonder",
      openingHours: "8:00 AM - 5:00 PM",
    },
    {
      id: "6",
      name: "Kawa-Kawa Hill",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2b/59/d2/img-20180326-100821-largejpg.jpg?w=1200&h=-1&s=1",
      description:
        "A hill shaped like an inverted bowl featuring life-sized Stations of the Cross and offering panoramic views of Mayon Volcano.",
      location: "Ligao City, Albay, Philippines",
      category: "Religious Site",
      openingHours: "6:00 AM - 6:00 PM",
    },
  ];

  const handleSearch = (query: string, filters: any) => {
    console.log("Search query:", query, "Filters:", filters);
  };

  const handleExploreClick = () => {
    document.getElementById("top-destinations")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        onSearch={(searchTerm: string) => handleSearch(searchTerm, {})}
        onCtaClick={handleExploreClick}
      />

      {/* Top 5 Tourist Destinations Section */}
      <section id="top-destinations" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              TOP 5 TOURIST DESTINATIONS
            </h2>
            <p className="text-gray-600 mt-2">
              Based on annual visitor statistics - discover Albay’s most visited
              landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {topTouristSpots.map((spot) => (
              <div
                key={spot.id}
                className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5 text-left">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {spot.name}
                    </h3>
                    <span className="text-sm font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      #{spot.rank}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">{spot.description}</p>

                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Municipality:</strong> {spot.municipality}
                  </p>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      🏠 <strong>Domestic:</strong> {spot.domestic.toLocaleString()}
                    </p>
                    <p>
                      ✈️ <strong>Foreign:</strong> {spot.foreign.toLocaleString()}
                    </p>
                    <p>
                      🌍 <strong>Total:</strong> {spot.total.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <div className="container mx-auto my-16 px-4">
        <InteractiveMap />
      </div>

      {/* Featured Attractions Section */}
      <AttractionsList
        attractions={featuredAttractions}
        title="Featured Attractions"
        description="Explore the most popular natural wonders, historical sites, and cultural landmarks in Albay."
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
