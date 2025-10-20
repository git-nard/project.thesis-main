import React, { useState } from "react";
import { Search, MapPin, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch?: (query: string, filters: SearchFilters) => void;
  placeholder?: string;
  className?: string;
  initialQuery?: string;
  initialFilters?: SearchFilters;
  showFilters?: boolean;
}

export interface SearchFilters {
  category?: "all" | "attractions" | "hotels" | "restaurants";
  priceRange?: "any" | "budget" | "mid" | "luxury";
  rating?: number | null;
  nearMayon?: boolean;
}

const SearchBar = ({
  onSearch = () => {},
  placeholder = "Search for attractions, hotels, restaurants...",
  className = "",
  initialQuery = "",
  initialFilters = {
    category: "all",
    priceRange: "any",
    rating: null,
    nearMayon: false,
  },
  showFilters = true,
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [location, setLocation] = useState<string | null>(null);

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery("");
    setFilters(initialFilters);
    onSearch("", initialFilters);
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const useCurrentLocation = () => {
    // In a real implementation, this would use the browser's geolocation API
    setLocation("Near your location");
    // Would also update filters with coordinates
  };

  return (
    <div className={cn("w-full bg-white", className)}>
      <div className="relative flex w-full items-center rounded-lg border shadow-sm">
        {/* Search Icon */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>

        {/* Input Field */}
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="h-12 w-full rounded-lg border-0 pl-10 pr-20 text-gray-900 focus:ring-2 focus:ring-blue-500"
        />

        {/* Clear Button (shows when there's input) */}
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-16 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Filter Button */}
        {showFilters && (
          <button
            type="button"
            onClick={toggleFilters}
            className={cn(
              "absolute right-10 text-gray-400 hover:text-gray-500",
              isFilterOpen && "text-blue-500",
            )}
          >
            <Filter className="h-5 w-5" />
          </button>
        )}

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="absolute right-0 h-full rounded-l-none rounded-r-lg px-4 py-2"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Location Selector */}
      <div className="mt-2 flex items-center text-sm">
        <MapPin className="mr-1 h-4 w-4 text-gray-500" />
        {location ? (
          <span className="text-gray-700">{location}</span>
        ) : (
          <button
            onClick={useCurrentLocation}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Use my current location
          </button>
        )}
      </div>

      {/* Filters Panel */}
      {isFilterOpen && showFilters && (
        <div className="mt-3 rounded-lg border bg-white p-4 shadow-md">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {/* Category Filter */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) =>
                  handleFilterChange(
                    "category",
                    e.target.value as SearchFilters["category"],
                  )
                }
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
              >
                <option value="all">All Categories</option>
                <option value="tourist-spots">Tourist Spots</option>
                <option value="hotels">Hotels</option>
                <option value="restaurants">Restaurants</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) =>
                  handleFilterChange(
                    "priceRange",
                    e.target.value as SearchFilters["priceRange"],
                  )
                }
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
              >
                <option value="any">Any Price</option>
                <option value="budget">Budget</option>
                <option value="mid">Mid-range</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Rating
              </label>
              <select
                value={filters.rating || ""}
                onChange={(e) =>
                  handleFilterChange(
                    "rating",
                    e.target.value ? Number(e.target.value) : null,
                  )
                }
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
              >
                <option value="">Any Rating</option>
                <option value="3">3+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>

            {/* Near Mayon Checkbox */}
            <div className="flex items-center">
              <input
                id="near-mayon"
                type="checkbox"
                checked={filters.nearMayon}
                onChange={(e) =>
                  handleFilterChange("nearMayon", e.target.checked)
                }
                className="h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <label
                htmlFor="near-mayon"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                Near Mayon Volcano
              </label>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="mt-4 flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => {
                setFilters(initialFilters);
              }}
              className="text-sm"
            >
              Reset
            </Button>
            <Button
              onClick={() => {
                handleSearch();
                setIsFilterOpen(false);
              }}
              className="text-sm"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
