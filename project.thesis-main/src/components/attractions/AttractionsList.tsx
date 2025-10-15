import React, { useState, useEffect } from "react";
import { Search, Filter, X, ChevronDown } from "lucide-react";
import AttractionCard from "./AttractionCard";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface Attraction {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  location: string;
  category: string;
  openingHours: string;
}

interface AttractionsListProps {
  attractions?: Attraction[];
  title?: string;
  description?: string;
}

export const AttractionsList = ({
  attractions = [
    {
      id: "1",
      name: "Mayon Volcano",
      image:
        "https://albay.gov.ph/wp-content/uploads/2020/02/joenabells_20200226_120826_0.jpg",
      description:
        'Known as the "Perfect Cone" for its symmetrical shape, Mayon Volcano is an active stratovolcano and a popular tourist destination in Albay.',
      rating: 4.8,
      location: "Albay Province, Philippines",
      category: "Natural Wonder",
      openingHours: "Open 24 hours",
    },
    {
      id: "2",
      name: "Cagsawa Ruins",
      image:
        "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Historic ruins of a 16th-century Franciscan church destroyed by the 1814 eruption of Mayon Volcano. The bell tower remains standing and is an iconic symbol of Albay.",
      rating: 4.6,
      location: "Daraga, Albay, Philippines",
      category: "Historical Site",
      openingHours: "6:00 AM - 6:00 PM",
    },
    {
      id: "3",
      name: "Sumlang Lake",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "A serene lake offering stunning views of Mayon Volcano and traditional bamboo rafts for tourists to enjoy the scenery.",
      rating: 4.5,
      location: "Camalig, Albay, Philippines",
      category: "Natural Wonder",
      openingHours: "7:00 AM - 5:00 PM",
    },
    {
      id: "4",
      name: "Lignon Hill Nature Park",
      image:
        "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "A popular viewpoint offering panoramic views of Legazpi City, Mayon Volcano, and Albay Gulf. Features ziplines and hiking trails.",
      rating: 4.4,
      location: "Legazpi City, Albay, Philippines",
      category: "Nature Park",
      openingHours: "5:00 AM - 9:00 PM",
    },
    {
      id: "5",
      name: "Hoyop-Hoyopan Cave",
      image:
        "https://images.unsplash.com/photo-1516537219851-920e2670c6e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "A natural cave with interesting rock formations and a cool breeze flowing through it, hence its name which means 'blowing wind'.",
      rating: 4.2,
      location: "Camalig, Albay, Philippines",
      category: "Natural Wonder",
      openingHours: "8:00 AM - 5:00 PM",
    },
    {
      id: "6",
      name: "Kawa-Kawa Hill",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "A hill shaped like an inverted bowl featuring life-sized Stations of the Cross and offering panoramic views of Mayon Volcano.",
      rating: 4.3,
      location: "Ligao City, Albay, Philippines",
      category: "Religious Site",
      openingHours: "6:00 AM - 6:00 PM",
    },
  ],
  title = "Tourist Attractions in Albay",
  description = "Discover the natural wonders, historical sites, and cultural landmarks that make Albay a must-visit destination in the Philippines.",
}: AttractionsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("rating");
  const [filteredAttractions, setFilteredAttractions] =
    useState<Attraction[]>(attractions);
  const [activeFilters, setActiveFilters] = useState(false);

  // Extract unique categories from attractions
  const categories = [
    ...new Set(attractions.map((attraction) => attraction.category)),
  ];

  // Apply filters and sorting
  useEffect(() => {
    let result = [...attractions];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (attraction) =>
          attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          attraction.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          attraction.location.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((attraction) =>
        selectedCategories.includes(attraction.category),
      );
    }

    // Apply sorting
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredAttractions(result);
    setActiveFilters(searchTerm !== "" || selectedCategories.length > 0);
  }, [searchTerm, selectedCategories, sortBy, attractions]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSortBy("rating");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search attractions, locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>

        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
                {activeFilters && (
                  <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center bg-blue-500 text-white">
                    {selectedCategories.length}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h3 className="font-medium">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={
                        selectedCategories.includes(category)
                          ? "default"
                          : "outline"
                      }
                      className={`cursor-pointer ${selectedCategories.includes(category) ? "bg-blue-500" : ""}`}
                      onClick={() => handleCategoryToggle(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                {activeFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="flex items-center text-blue-500 hover:text-blue-700 p-0"
                  >
                    <X className="h-4 w-4 mr-1" /> Clear filters
                  </Button>
                )}
              </div>
            </PopoverContent>
          </Popover>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="name">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Mobile Filters (Accordion) */}
      <div className="md:hidden mb-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="filters">
            <AccordionTrigger className="flex items-center justify-between py-2 px-4 bg-white rounded-md shadow-sm">
              <span className="flex items-center">
                <Filter className="h-4 w-4 mr-2" /> Active Filters
                {activeFilters && (
                  <Badge className="ml-2 bg-blue-500 text-white">
                    {selectedCategories.length}
                  </Badge>
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4 space-y-4 bg-white rounded-md">
                <div>
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={
                          selectedCategories.includes(category)
                            ? "default"
                            : "outline"
                        }
                        className={`cursor-pointer ${selectedCategories.includes(category) ? "bg-blue-500" : ""}`}
                        onClick={() => handleCategoryToggle(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                {activeFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <X className="h-4 w-4 mr-1" /> Clear all filters
                  </Button>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredAttractions.length} of {attractions.length}{" "}
          attractions
        </p>
      </div>

      {/* Attractions Grid */}
      {filteredAttractions.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((attraction) => (
            <AttractionCard
              key={attraction.id}
              id={attraction.id}
              name={attraction.name}
              image={attraction.image}
              description={attraction.description}
              rating={attraction.rating}
              location={attraction.location}
              category={attraction.category}
              openingHours={attraction.openingHours}
              onClick={() => console.log(`View details for ${attraction.name}`)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 mb-4">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No attractions found
          </h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={clearFilters}>Clear all filters</Button>
        </div>
      )}
    </div>
  );
};

export default AttractionsList;
