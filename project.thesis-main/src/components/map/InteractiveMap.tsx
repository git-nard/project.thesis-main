import React, { useState } from "react";
import { MapPin, Search, Filter, Layers, X, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MapMarker {
  id: string;
  type: "attraction" | "hotel" | "restaurant";
  name: string;
  position: { lat: number; lng: number };
  rating: number;
  category?: string;
  priceRange?: string;
}

interface InteractiveMapProps {
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  markers?: MapMarker[];
  onMarkerClick?: (marker: MapMarker) => void;
  onFilterChange?: (filters: any) => void;
}

const InteractiveMap = ({
  initialCenter = { lat: 13.1391, lng: 123.7438 }, // Mayon Volcano coordinates
  initialZoom = 12,
  markers = [
    {
      id: "1",
      type: "attraction",
      name: "Mayon Volcano",
      position: { lat: 13.2552, lng: 123.6856 },
      rating: 4.8,
      category: "Natural Wonder",
    },
    {
      id: "2",
      type: "attraction",
      name: "Cagsawa Ruins",
      position: { lat: 13.1561, lng: 123.7055 },
      rating: 4.5,
      category: "Historical Site",
    },
    {
      id: "3",
      type: "hotel",
      name: "The Oriental Legazpi",
      position: { lat: 13.1391, lng: 123.7438 },
      rating: 4.3,
      priceRange: "₱₱₱",
    },
    {
      id: "4",
      type: "restaurant",
      name: "Small Talk Café",
      position: { lat: 13.1391, lng: 123.7438 },
      rating: 4.6,
      category: "Filipino",
      priceRange: "₱₱",
    },
  ],
  onMarkerClick = (marker) => console.log("Marker clicked:", marker),
  onFilterChange = (filters) => console.log("Filters changed:", filters),
}: InteractiveMapProps) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: "",
    rating: 0,
  });

  // Filter markers based on active tab and search query
  const filteredMarkers = markers.filter((marker) => {
    // Filter by type
    if (activeTab !== "all" && marker.type !== activeTab) return false;

    // Filter by search query
    if (
      searchQuery &&
      !marker.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;

    return true;
  });

  const handleFilterChange = (filterType: string, value: any) => {
    const newFilters = { ...selectedFilters, [filterType]: value };
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters({
      categories: [],
      priceRange: "",
      rating: 0,
    });
    setSearchQuery("");
    onFilterChange({});
  };

  return (
    <div className="w-full h-[600px] relative bg-gray-100 rounded-lg overflow-hidden">
      {/* Map Container - In a real implementation, this would be replaced with a map library like Google Maps or Leaflet */}
      <div className="w-full h-full bg-blue-50 relative">
        {/* Placeholder for the actual map */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.9)",
          }}
        >
          {/* Placeholder markers */}
          {filteredMarkers.map((marker) => (
            <TooltipProvider key={marker.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{
                      top: `${30 + Math.random() * 40}%`,
                      left: `${30 + Math.random() * 40}%`,
                    }}
                    onClick={() => onMarkerClick(marker)}
                  >
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <MapPin
                        className={`h-6 w-6 ${marker.type === "attraction" ? "text-green-500" : marker.type === "hotel" ? "text-blue-500" : "text-orange-500"}`}
                      />
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="font-semibold">{marker.name}</div>
                  <div className="text-xs">
                    {marker.type === "attraction"
                      ? marker.category
                      : marker.type === "restaurant"
                        ? `${marker.category} · ${marker.priceRange}`
                        : `Hotel · ${marker.priceRange}`}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-white rounded-md shadow-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="pl-9 pr-4 py-2 w-full"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="bg-white"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white">
                  <Layers className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Change map layers</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <Card className="w-full bg-white shadow-md">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs h-7"
                >
                  Clear All
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Natural Wonder",
                      "Historical Site",
                      "Beach",
                      "Adventure",
                      "Cultural",
                    ].map((category) => (
                      <Toggle
                        key={category}
                        variant="outline"
                        size="sm"
                        pressed={selectedFilters.categories.includes(category)}
                        onPressedChange={(pressed) => {
                          const newCategories = pressed
                            ? [...selectedFilters.categories, category]
                            : selectedFilters.categories.filter(
                                (c) => c !== category,
                              );
                          handleFilterChange("categories", newCategories);
                        }}
                      >
                        {category}
                      </Toggle>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Price Range
                  </label>
                  <Select
                    value={selectedFilters.priceRange}
                    onValueChange={(value) =>
                      handleFilterChange("priceRange", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any price range</SelectItem>
                      <SelectItem value="₱">₱ (Budget)</SelectItem>
                      <SelectItem value="₱₱">₱₱ (Moderate)</SelectItem>
                      <SelectItem value="₱₱₱">₱₱₱ (Expensive)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Rating
                  </label>
                  <Select
                    value={selectedFilters.rating.toString()}
                    onValueChange={(value) =>
                      handleFilterChange("rating", parseInt(value))
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any rating</SelectItem>
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
      </div>

      {/* Map Type Tabs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-white shadow-md">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="attraction">Attractions</TabsTrigger>
            <TabsTrigger value="hotel">Hotels</TabsTrigger>
            <TabsTrigger value="restaurant">Restaurants</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 z-20">
        <Card className="bg-white shadow-md">
          <CardContent className="p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>Attractions</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span>Hotels</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span>Restaurants</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;
