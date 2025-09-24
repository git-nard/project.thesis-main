import React, { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import RestaurantCard from "./RestaurantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  address: string;
  cuisineType: string;
  priceRange: string;
}

interface RestaurantsListProps {
  restaurants?: Restaurant[];
  onRestaurantSelect?: (restaurantId: string) => void;
}

const RestaurantsList = ({
  restaurants = [
    {
      id: "1",
      name: "Bigg's Diner",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description:
        "Popular local restaurant chain serving Filipino-American comfort food with a view of Mayon Volcano.",
      rating: 4.5,
      address: "Legazpi City, Albay",
      cuisineType: "Filipino Fusion",
      priceRange: "₱₱",
    },
    {
      id: "2",
      name: "Small Talk Café",
      image:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Famous for its Bicol Express pasta and fusion dishes that blend local flavors with international cuisine.",
      rating: 4.7,
      address: "Old Albay District, Legazpi City",
      cuisineType: "Bicolano Fusion",
      priceRange: "₱₱",
    },
    {
      id: "3",
      name: "1st Colonial Grill",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Home of the famous Sili Ice Cream, featuring traditional Bicolano dishes with a modern twist.",
      rating: 4.6,
      address: "Daraga, Albay",
      cuisineType: "Traditional Bicolano",
      priceRange: "₱₱",
    },
    {
      id: "4",
      name: "Balay Cena Una",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Heritage restaurant in a Spanish colonial house serving authentic Bicolano cuisine and Spanish-influenced dishes.",
      rating: 4.8,
      address: "Daraga, Albay",
      cuisineType: "Spanish-Filipino",
      priceRange: "₱₱₱",
    },
    {
      id: "5",
      name: "Graziano's",
      image:
        "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description:
        "Italian restaurant with a Filipino twist, offering wood-fired pizzas and pasta with a view of Mayon Volcano.",
      rating: 4.4,
      address: "Legazpi City, Albay",
      cuisineType: "Italian-Filipino",
      priceRange: "₱₱₱",
    },
    {
      id: "6",
      name: "Café Legazpi",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description:
        "Cozy café serving specialty coffee, breakfast, and light meals with a relaxing ambiance and local art displays.",
      rating: 4.3,
      address: "Legazpi City, Albay",
      cuisineType: "Café",
      priceRange: "₱",
    },
  ],
  onRestaurantSelect = (id) => console.log(`Restaurant selected: ${id}`),
}: RestaurantsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState<Restaurant[]>(restaurants);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique cuisine types
  const cuisineTypes = Array.from(
    new Set(restaurants.map((restaurant) => restaurant.cuisineType)),
  ).sort();

  // Apply filters when any filter changes
  useEffect(() => {
    let result = restaurants;

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(term) ||
          restaurant.description.toLowerCase().includes(term) ||
          restaurant.cuisineType.toLowerCase().includes(term) ||
          restaurant.address.toLowerCase().includes(term),
      );
    }

    // Apply cuisine filter
    if (cuisineFilter) {
      result = result.filter(
        (restaurant) => restaurant.cuisineType === cuisineFilter,
      );
    }

    // Apply price range filter
    if (priceFilter) {
      result = result.filter(
        (restaurant) => restaurant.priceRange === priceFilter,
      );
    }

    // Apply rating filter
    if (ratingFilter) {
      const minRating = parseFloat(ratingFilter);
      result = result.filter((restaurant) => restaurant.rating >= minRating);
    }

    setFilteredRestaurants(result);
  }, [searchTerm, cuisineFilter, priceFilter, ratingFilter, restaurants]);

  const clearFilters = () => {
    setSearchTerm("");
    setCuisineFilter("");
    setPriceFilter("");
    setRatingFilter("");
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Restaurants in Albay
            </h2>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search restaurants..."
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
                <Filter className="h-4 w-4" />
              </Button>
              {(searchTerm || cuisineFilter || priceFilter || ratingFilter) && (
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
                    <label className="text-sm font-medium">Cuisine Type</label>
                    <Select
                      value={cuisineFilter}
                      onValueChange={setCuisineFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any cuisine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any cuisine</SelectItem>
                        {cuisineTypes.map((cuisine) => (
                          <SelectItem key={cuisine} value={cuisine}>
                            {cuisine}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Select value={priceFilter} onValueChange={setPriceFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any price</SelectItem>
                        <SelectItem value="₱">₱ (Budget)</SelectItem>
                        <SelectItem value="₱₱">₱₱ (Moderate)</SelectItem>
                        <SelectItem value="₱₱₱">₱₱₱ (Expensive)</SelectItem>
                        <SelectItem value="₱₱₱₱">
                          ₱₱₱₱ (Very Expensive)
                        </SelectItem>
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
                        <SelectItem value="0">Any Rating</SelectItem>
                        <SelectItem value="3">3+ stars</SelectItem>
                        <SelectItem value="4">4+ stars</SelectItem>
                        <SelectItem value="4.5">4.5+ stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {filteredRestaurants.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No restaurants found
              </h3>
              <p className="text-gray-500 max-w-md">
                We couldn't find any restaurants matching your search criteria.
                Try adjusting your filters or search term.
              </p>
              <Button onClick={clearFilters} className="mt-4">
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="flex justify-center">
                  <RestaurantCard
                    id={restaurant.id}
                    name={restaurant.name}
                    image={restaurant.image}
                    description={restaurant.description}
                    rating={restaurant.rating}
                    address={restaurant.address}
                    cuisineType={restaurant.cuisineType}
                    priceRange={restaurant.priceRange}
                    onClick={() => onRestaurantSelect(restaurant.id)}
                  />
                </div>
              ))}
            </div>
          )}

          {filteredRestaurants.length > 0 && (
            <div className="text-center text-gray-500 mt-4">
              Showing {filteredRestaurants.length} of {restaurants.length}{" "}
              restaurants in Albay
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsList;
