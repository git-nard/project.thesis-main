import React, { useEffect, useState, useMemo } from "react";
import { Search, Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { destinations } from "../destinations/DestinationsLists";
import { spots } from "../tourists-spots/TouristSpotsList";
import { activities } from "../tourism-activities/TourismActivitiesList";
import { hotels } from "../accommodations/HotelsList";
import { restaurants } from "../dining/RestaurantsList";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch = () => {} }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Combine all lists into one searchable array
  const allPlaces = useMemo(() => {
    const addType = (list: any[], type: string) =>
      list.map((item) => ({ ...item, type }));

    return [
      ...addType(destinations, "Destination"),
      ...addType(spots, "Tourist Spot"),
      ...addType(activities, "Tourism Activity"),
      ...addType(hotels, "Hotel"),
      ...addType(restaurants, "Restaurant"),
    ];
  }, []);

  // ✅ Filter all places by search query
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allPlaces.filter((place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allPlaces]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.location.reload();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold text-gray-900">
              Discover Albay
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
  <Link to="/attractions" className="text-gray-700 hover:text-red-600 font-medium">
    Attractions
  </Link>
  <Link to="/tourist-spots" className="text-gray-700 hover:text-red-600 font-medium">
    Tourist Spots
  </Link>
  <Link to="/destinations" className="text-gray-700 hover:text-red-600 font-medium">
    Destinations
  </Link>
  <Link to="/tourism-activities" className="text-gray-700 hover:text-red-600 font-medium">
    Tourism Activities
  </Link>
  <Link to="/hotels" className="text-gray-700 hover:text-red-600 font-medium">
    Hotels
  </Link>
  <Link to="/restaurants" className="text-gray-700 hover:text-red-600 font-medium">
    Restaurants
  </Link>

  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium"
      >
        <span>More</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>
        <Link to="/map" className="w-full">Interactive Map</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/experiences" className="w-full">Experiences</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/events" className="w-full">Events</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/about" className="w-full">About Albay</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/safety" className="w-full">Traveler's Safety Guide</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</nav>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative ml-4">
          <Input
            type="search"
            placeholder="Search places..."
            className="pr-10 h-12 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-3 text-gray-400 hover:text-gray-600"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* ✅ Combined Search Results */}
          {filteredResults.length > 0 && (
            <div className="results-container border border-gray-200 bg-white mt-1 absolute w-full rounded-sm shadow-lg z-50 max-h-96 overflow-y-auto">
              <ul>
                {filteredResults.map((result: any, index: number) => {
                  // Create dynamic path based on type
                  const path = (() => {
                    switch (result.type) {
                      case "Destination":
                        return `/destinations/${result.id}`;
                      case "Tourist Spot":
                        return `/tourist-spots/${result.id}`;
                      case "Tourism Activity":
                        return `/tourism-activities/${result.id}`;
                      case "Hotel":
                        return `/hotels/${result.id}`;
                      case "Restaurant":
                        return `/restaurants/${result.id}`;
                      default:
                        return `/details/${result.id}`;
                    }
                  })();

                  return (
                    <li key={index} className="border-b last:border-0">
                      <Link
                        to={path}
                        state={result}
                        className="block p-4 hover:bg-gray-100 rounded"
                      >
                        <div className="font-semibold text-gray-900">{result.name}</div>
                        <div className="text-xs text-gray-500">{result.type}</div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </form>

        {/* Auth Section */}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <i className="fa-solid fa-user text-gray-700"></i>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <span className="block px-2 py-1 text-sm text-gray-500">
                  Signed in as <b>{user.name}</b>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/recommended" className="flex items-center w-full">
                  <i className="fa-solid fa-map-marked-alt mr-2 text-gray-500"></i>
                  <span>Recommended</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/itineraries" className="flex items-center w-full">
                  <i className="fa-solid fa-route mr-2 text-gray-500"></i>
                  <span>My Itineraries</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/saved" className="flex items-center w-full">
                  <i className="fa-solid fa-bookmark mr-2 text-gray-500"></i>
                  <span>Saved</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/settings" className="flex items-center w-full">
                  <i className="fa-solid fa-gear mr-2 text-gray-500"></i>
                  <span>Settings</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600 focus:text-red-600"
                onClick={handleLogout}
              >
                <button className="flex items-center w-full text-left">
                  <i className="fa-solid fa-right-from-bracket mr-2"></i>
                  <span>Logout</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-2 ml-5">
            <Link to="/register">
              <button className="text-black font-semibold whitespace-nowrap hover:text-red-600 transition">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-black text-white font-semibold px-5 py-2 rounded-full whitespace-nowrap hover:bg-gray-800 transition">
                Log in
              </button>
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-red-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
