import React, { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import HotelCard from "./HotelCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

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
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [amenityFilter, setAmenityFilter] = useState("");
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [showFilters, setShowFilters] = useState(false);

  // List of all unique amenities from all hotels
  const allAmenities = Array.from(
    new Set(hotels.flatMap((hotel) => hotel.amenities)),
  ).sort();

  // Apply filters when any filter changes
  useEffect(() => {
    let result = hotels;

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(term) ||
          hotel.location.toLowerCase().includes(term) ||
          hotel.description.toLowerCase().includes(term),
      );
    }

    // Apply price range filter
    if (priceFilter) {
      switch (priceFilter) {
        case "budget":
          result = result.filter(
            (hotel) =>
              hotel.priceRange.includes("₱1,000") ||
              hotel.priceRange.includes("₱2,000"),
          );
          break;
        case "midrange":
          result = result.filter(
            (hotel) =>
              hotel.priceRange.includes("₱3,000") ||
              hotel.priceRange.includes("₱4,000"),
          );
          break;
        case "luxury":
          result = result.filter(
            (hotel) =>
              hotel.priceRange.includes("₱5,000") ||
              hotel.priceRange.includes("₱6,000") ||
              hotel.priceRange.includes("₱7,000") ||
              hotel.priceRange.includes("₱8,000") ||
              hotel.priceRange.includes("₱9,000") ||
              hotel.priceRange.includes("₱10,000"),
          );
          break;
      }
    }

    // Apply rating filter
    if (ratingFilter) {
      const minRating = parseFloat(ratingFilter);
      result = result.filter((hotel) => hotel.rating >= minRating);
    }

    // Apply amenity filter
    if (amenityFilter) {
      result = result.filter((hotel) =>
        hotel.amenities.some(
          (amenity) => amenity.toLowerCase() === amenityFilter.toLowerCase(),
        ),
      );
    }

    setFilteredHotels(result);
  }, [searchTerm, priceFilter, ratingFilter, amenityFilter, hotels]);

  const clearFilters = () => {
    setSearchTerm("");
    setPriceFilter("");
    setRatingFilter("");
    setAmenityFilter("");
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
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
                onClick={() => setShowFilters(!showFilters)}
                className="flex-shrink-0"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              {(searchTerm || priceFilter || ratingFilter || amenityFilter) && (
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

          {showFilters && (
            <Card className="w-full bg-white">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Select value={priceFilter} onValueChange={setPriceFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any price range</SelectItem>
                        <SelectItem value="budget">
                          Budget (₱1,000 - ₱2,500)
                        </SelectItem>
                        <SelectItem value="midrange">
                          Mid-range (₱3,000 - ₱4,500)
                        </SelectItem>
                        <SelectItem value="luxury">Luxury (₱5,000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rating</label>
                    <Select
                      value={ratingFilter}
                      onValueChange={setRatingFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any rating</SelectItem>
                        <SelectItem value="3">3+ stars</SelectItem>
                        <SelectItem value="4">4+ stars</SelectItem>
                        <SelectItem value="4.5">4.5+ stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amenities</label>
                    <Select
                      value={amenityFilter}
                      onValueChange={setAmenityFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any amenities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any amenities</SelectItem>
                        {allAmenities.map((amenity) => (
                          <SelectItem key={amenity} value={amenity}>
                            {amenity}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

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
                    id={hotel.id}
                    name={hotel.name}
                    image={hotel.image}
                    description={hotel.description}
                    location={hotel.location}
                    priceRange={hotel.priceRange}
                    rating={hotel.rating}
                    amenities={hotel.amenities}
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
