import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedCard, { FeaturedCardProps } from "./FeaturedCard";

interface FeaturedSectionProps {
  title?: string;
  subtitle?: string;
  categories?: {
    id: string;
    label: string;
  }[];
  items?: {
    category: string;
    data: FeaturedCardProps[];
  }[];
  onViewAllClick?: (category: string) => void;
  onItemClick?: (item: FeaturedCardProps) => void;
}

const FeaturedSection = ({
  title = "Featured Experiences in Albay",
  subtitle = "Discover the most popular attractions, accommodations, and dining options in the region",
  categories = [
    { id: "all", label: "All" },
    { id: "attraction", label: "Tourist Spots" },
    { id: "hotel", label: "Hotels" },
    { id: "restaurant", label: "Restaurants" },
  ],
  items = [
    {
      category: "all",
      data: [
        {
          id: "featured-1",
          title: "Mayon Volcano",
          description:
            "The world-famous perfect cone volcano, an iconic symbol of Albay province and one of the most picturesque volcanoes in the world.",
          image:
            "https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "attraction",
          rating: 4.8,
          location: "Legazpi City, Albay",
          tags: ["Natural Wonder", "Hiking", "Photography"],
        },
        {
          id: "featured-2",
          title: "Cagsawa Ruins",
          description:
            "Historic ruins of a 16th-century Franciscan church destroyed during the 1814 eruption of Mayon Volcano, offering iconic views of the volcano.",
          image:
            "https://images.unsplash.com/photo-1596400953369-8b042b1db2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "attraction",
          rating: 4.6,
          location: "Daraga, Albay",
          tags: ["Historical", "Cultural", "Photography"],
        },
        {
          id: "featured-3",
          title: "The Oriental Legazpi",
          description:
            "Luxury hotel offering panoramic views of Mayon Volcano and Albay Gulf, featuring modern amenities and Filipino hospitality.",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "hotel",
          rating: 4.5,
          location: "Legazpi City, Albay",
          price: "₱₱₱",
          tags: ["Luxury", "Pool", "Restaurant"],
        },
        {
          id: "featured-4",
          title: "Small Talk Café",
          description:
            "Popular local restaurant known for its Bicol Express and other authentic Bicolano dishes with a modern twist.",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "restaurant",
          rating: 4.7,
          location: "Legazpi City, Albay",
          price: "₱₱",
          tags: ["Local Cuisine", "Casual Dining", "Bicolano Food"],
        },
      ],
    },
    {
      category: "attraction",
      data: [
        {
          id: "attraction-1",
          title: "Mayon Volcano",
          description:
            "The world-famous perfect cone volcano, an iconic symbol of Albay province and one of the most picturesque volcanoes in the world.",
          image:
            "https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "attraction",
          rating: 4.8,
          location: "Legazpi City, Albay",
          tags: ["Natural Wonder", "Hiking", "Photography"],
        },
        {
          id: "attraction-2",
          title: "Cagsawa Ruins",
          description:
            "Historic ruins of a 16th-century Franciscan church destroyed during the 1814 eruption of Mayon Volcano, offering iconic views of the volcano.",
          image:
            "https://images.unsplash.com/photo-1596400953369-8b042b1db2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "attraction",
          rating: 4.6,
          location: "Daraga, Albay",
          tags: ["Historical", "Cultural", "Photography"],
        },
        {
          id: "attraction-3",
          title: "Lignon Hill Nature Park",
          description:
            "A popular viewpoint offering 360-degree views of Legazpi City, Mayon Volcano, and Albay Gulf, with adventure activities like zipline and hiking trails.",
          image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "attraction",
          rating: 4.5,
          location: "Legazpi City, Albay",
          tags: ["Nature", "Adventure", "Viewpoint"],
        },
        {
          id: "attraction-4",
          title: "Sumlang Lake",
          description:
            "A serene lake offering stunning views of Mayon Volcano, where visitors can enjoy bamboo rafting, local crafts, and relaxing scenery.",
          image:
            "https://images.unsplash.com/photo-1580100586938-02822d99c4a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "attraction",
          rating: 4.4,
          location: "Camalig, Albay",
          tags: ["Lake", "Relaxation", "Scenic Views"],
        },
      ],
    },
    {
      category: "hotel",
      data: [
        {
          id: "hotel-1",
          title: "The Oriental Legazpi",
          description:
            "Luxury hotel offering panoramic views of Mayon Volcano and Albay Gulf, featuring modern amenities and Filipino hospitality.",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "hotel",
          rating: 4.5,
          location: "Legazpi City, Albay",
          price: "₱₱₱",
          tags: ["Luxury", "Pool", "Restaurant"],
        },
        {
          id: "hotel-2",
          title: "Misibis Bay Resort",
          description:
            "Exclusive island resort offering luxury villas, private beaches, water sports, and spa services with views of Mayon Volcano.",
          image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "hotel",
          rating: 4.7,
          location: "Cagraray Island, Albay",
          price: "₱₱₱₱",
          tags: ["Luxury", "Beach", "Spa"],
        },
        {
          id: "hotel-3",
          title: "Hotel St. Ellis",
          description:
            "Contemporary hotel in downtown Legazpi offering comfortable rooms, a rooftop restaurant with volcano views, and modern amenities.",
          image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "hotel",
          rating: 4.3,
          location: "Legazpi City, Albay",
          price: "₱₱",
          tags: ["Business", "City Center", "Restaurant"],
        },
        {
          id: "hotel-4",
          title: "Balay de la Rama",
          description:
            "Charming boutique hotel in a restored heritage house, offering a blend of traditional Filipino architecture and modern comforts.",
          image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "hotel",
          rating: 4.4,
          location: "Daraga, Albay",
          price: "₱₱",
          tags: ["Boutique", "Heritage", "Cozy"],
        },
      ],
    },
    {
      category: "restaurant",
      data: [
        {
          id: "restaurant-1",
          title: "Small Talk Café",
          description:
            "Popular local restaurant known for its Bicol Express and other authentic Bicolano dishes with a modern twist.",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "restaurant",
          rating: 4.7,
          location: "Legazpi City, Albay",
          price: "₱₱",
          tags: ["Local Cuisine", "Casual Dining", "Bicolano Food"],
        },
        {
          id: "restaurant-2",
          title: "1st Colonial Grill",
          description:
            "Famous for its unique Sili (chili) ice cream and traditional Bicolano dishes, offering a taste of authentic local flavors.",
          image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "restaurant",
          rating: 4.6,
          location: "Legazpi City, Albay",
          price: "₱₱",
          tags: ["Local Cuisine", "Ice Cream", "Family Dining"],
        },
        {
          id: "restaurant-3",
          title: "Balay Cena Una",
          description:
            "Elegant restaurant in a heritage house serving Filipino-Spanish fusion cuisine with a focus on local ingredients and traditional recipes.",
          image:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "restaurant",
          rating: 4.5,
          location: "Daraga, Albay",
          price: "₱₱₱",
          tags: ["Fine Dining", "Heritage", "Filipino-Spanish"],
        },
        {
          id: "restaurant-4",
          title: "DJC Halo-Halo",
          description:
            "Famous for its special halo-halo (Filipino dessert) and other local snacks and refreshments, perfect for beating the tropical heat.",
          image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "restaurant",
          rating: 4.4,
          location: "Legazpi City, Albay",
          price: "₱",
          tags: ["Desserts", "Local Snacks", "Casual"],
        },
      ],
    },
  ],
  onViewAllClick = (category) => console.log(`View all ${category} clicked`),
  onItemClick = (item) => console.log("Item clicked:", item),
}: FeaturedSectionProps) => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  // Get the current category's data
  const currentCategoryData =
    items.find((item) => item.category === activeTab)?.data || [];

  // Calculate total pages
  const totalPages = Math.ceil(currentCategoryData.length / itemsPerPage);

  // Get current page items
  const currentItems = currentCategoryData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  // Handle pagination
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(0); // Reset to first page when changing tabs
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>
        </div>

        {/* Tabs and View All */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full sm:w-auto"
          >
            <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-row gap-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 flex items-center"
            onClick={() => onViewAllClick(activeTab)}
          >
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((item) => (
              <FeaturedCard
                key={item.id}
                {...item}
                onClick={() => onItemClick(item)}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                className="h-10 w-10 rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    variant={currentPage === index ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(index)}
                    className="h-10 w-10 rounded-full"
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
                className="h-10 w-10 rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
