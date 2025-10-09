import React, { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import HotelCard from "./HotelCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FilterModal from "./FilterModal";

interface Hotel {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  priceRange: string;
  rating: number;
  amenities: string[];
}

interface HotelsListProps {
  hotels?: Hotel[];
  onHotelSelect?: (hotelId: string) => void;
}

const HotelsList = ({
  hotels = [
    {
      id: "1",
      name: "Mayon View Resort & Spa",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1740&q=80",
      description:
        "Luxury resort with stunning views of Mayon Volcano, featuring a spa, infinity pool, and fine dining restaurant.",
      location: "Legazpi City, Albay",
      priceRange: "₱5,000 - ₱12,000",
      rating: 4.8,
      amenities: [
        "Free WiFi",
        "Swimming Pool",
        "Restaurant",
        "Spa",
        "Fitness Center",
      ],
    },
    {
      id: "2",
      name: "Albay Boutique Hotel",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1470&q=80",
      description:
        "Charming boutique hotel in the heart of Legazpi City with traditional Filipino design elements and modern amenities.",
      location: "Legazpi City, Albay",
      priceRange: "₱3,000 - ₱6,000",
      rating: 4.5,
      amenities: [
        "Free WiFi",
        "Breakfast Included",
        "Air Conditioning",
        "Room Service",
      ],
    },
    {
      id: "3",
      name: "Daraga Homestay",
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1470&q=80",
      description:
        "Authentic Filipino homestay experience with local hosts, home-cooked meals, and cultural immersion opportunities.",
      location: "Daraga, Albay",
      priceRange: "₱1,500 - ₱2,500",
      rating: 4.7,
      amenities: [
        "Free WiFi",
        "Breakfast Included",
        "Local Guide",
        "Cultural Activities",
      ],
    },
    {
      id: "4",
      name: "Cagsawa Ruins Inn",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Budget-friendly accommodation near the historic Cagsawa Ruins with basic amenities and friendly staff.",
      location: "Cagsawa, Albay",
      priceRange: "₱1,000 - ₱2,000",
      rating: 4.0,
      amenities: ["Free WiFi", "Air Conditioning", "Tour Arrangements"],
    },
    {
      id: "5",
      name: "Tabaco Bay Resort",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1749&q=80",
      description:
        "Beachfront resort in Tabaco City with water sports activities, seafood restaurant, and relaxing ocean views.",
      location: "Tabaco City, Albay",
      priceRange: "₱4,000 - ₱8,000",
      rating: 4.3,
      amenities: [
        "Beachfront",
        "Swimming Pool",
        "Restaurant",
        "Water Sports",
        "Free WiFi",
      ],
    },
    {
      id: "6",
      name: "Tiwi Hot Springs Hotel",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Relaxing hotel with natural hot spring pools, spa treatments, and scenic mountain views in Tiwi.",
      location: "Tiwi, Albay",
      priceRange: "₱3,500 - ₱7,000",
      rating: 4.6,
      amenities: [
        "Hot Springs",
        "Spa",
        "Restaurant",
        "Mountain View",
        "Free WiFi",
      ],
    },
  ],
  onHotelSelect = (id) => console.log(`Hotel selected: ${id}`),
}: HotelsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    price: { min: "", max: "" },
    rating: { min: "", max: "" },
    amenity: [] as string[],
  });

  // --- FILTERING LOGIC ---
  useEffect(() => {
    let result = hotels;

    // Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(term) ||
          hotel.location.toLowerCase().includes(term) ||
          hotel.description.toLowerCase().includes(term)
      );
    }

    // Price Range
    if (filters.price.min || filters.price.max) {
      result = result.filter((hotel) => {
        const [lowStr, highStr] = hotel.priceRange
          .replace(/[₱,]/g, "")
          .split(" - ")
          .map((v) => parseInt(v.trim(), 10));

        const low = isNaN(lowStr) ? 0 : lowStr;
        const high = isNaN(highStr) ? Infinity : highStr;
        const min = filters.price.min ? parseInt(filters.price.min) : 0;
        const max = filters.price.max ? parseInt(filters.price.max) : Infinity;

        return high >= min && low <= max;
      });
    }

    // Rating Range
    if (filters.rating.min || filters.rating.max) {
      result = result.filter((hotel) => {
        const rating = hotel.rating;
        const min = filters.rating.min ? parseFloat(filters.rating.min) : 0;
        const max = filters.rating.max ? parseFloat(filters.rating.max) : 5;
        return rating >= min && rating <= max;
      });
    }

    // Amenity Filter
    if (filters.amenity.length > 0) {
      result = result.filter((hotel) =>
        filters.amenity.every((a) =>
          hotel.amenities.some(
            (hA) => hA.toLowerCase() === a.toLowerCase()
          )
        )
      );
    }

    setFilteredHotels(result);
  }, [searchTerm, filters, hotels]);

  const clearFilters = () => {
    setSearchTerm("");
    setFilters({
      price: { min: "", max: "" },
      rating: { min: "", max: "" },
      amenity: [],
    });
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          {/* --- HEADER --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Accommodations in Albay
            </h2>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search hotels..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowFilters(true)}
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              {(searchTerm ||
                filters.price.min ||
                filters.price.max ||
                filters.rating.min ||
                filters.rating.max ||
                filters.amenity.length > 0) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="flex-shrink-0 gap-1"
                >
                  <X className="h-4 w-4" /> Clear
                </Button>
              )}
            </div>
          </div>

          {/* --- FILTER MODAL --- */}
          {showFilters && (
            <FilterModal
              onClose={() => setShowFilters(false)}
              filters={filters}
              setFilters={setFilters}
            />
          )}

          {/* --- HOTEL LIST --- */}
          {filteredHotels.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No hotels found
              </h3>
              <p className="text-gray-500 max-w-md">
                We couldn't find any hotels matching your search criteria. Try
                adjusting your filters or search term.
              </p>
              <Button onClick={clearFilters} className="mt-4">
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="flex justify-center">
                  <HotelCard
                    {...hotel}
                    onClick={() => onHotelSelect(hotel.id)}
                  />
                </div>
              ))}
            </div>
          )}

          {filteredHotels.length > 0 && (
            <div className="text-center text-gray-500 mt-4">
              Showing {filteredHotels.length} of {hotels.length} accommodations
              in Albay
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelsList;
