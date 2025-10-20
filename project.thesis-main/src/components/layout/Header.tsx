import React, { useEffect, useMemo, useState } from "react";
import { Search, Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { destinations } from "../destinations/DestinationsLists";
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
  const [results, setResults] = useState([]);
  const [user, setUser] = useState<any>(null); // ✅ Manage user state

  // ✅ On mount, check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredResults = useMemo(() => {
    setResults(
      destinations.filter((dest) =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    return results;
  }, [destinations, searchQuery]);

  // ✅ Proper logout clears localStorage + state
  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setUser(null);

  // ✅ Stay on the home page
  if (window.location.pathname !== "/") {
    window.location.href = "/";
  } else {
    // Optional: reload to immediately update the header UI
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
          <a href="/attractions" className="text-gray-700 hover:text-red-600 font-medium">
            Attractions
          </a>
          <a href="/tourist-spots" className="text-gray-700 hover:text-red-600 font-medium">
            Tourist Spots
          </a>
          <a href="/Destinations" className="text-gray-700 hover:text-red-600 font-medium">
            Destinations
          </a>
          <a href="/tourism-activities" className="text-gray-700 hover:text-red-600 font-medium">
            Tourism-Activities
          </a>
          <a href="/hotels" className="text-gray-700 hover:text-red-600 font-medium">
            Hotels
          </a>
          <a href="/restaurants" className="text-gray-700 hover:text-red-600 font-medium">
            Restaurants
          </a>

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
                <a href="/map" className="w-full">Interactive Map</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/experiences" className="w-full">Experiences</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/events" className="w-full">Events</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/about" className="w-full">About Albay</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/safety" className="w-full">Traveler's Safety Guide</a>
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

          {results.length > 0 && searchQuery.length > 0 && (
            <div className="results-container border border-gray-200 bg-white mt-1 absolute w-full rounded-sm shadow-lg">
              <ul>
                {results.map((result: any, index: number) => (
                  <li key={index}>
                    <Link
                      to={`/destinations/${result.id}`}
                      state={result}
                      className="block p-5 hover:bg-gray-100 rounded"
                    >
                      {result.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>

        {/* ✅ Auth Section */}
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
          {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
            <i className="fa-solid fa-user text-gray-700"></i>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
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
          <DropdownMenuItem className="text-red-600 focus:text-red-600">
            <button className="flex items-center w-full text-left">
              <i className="fa-solid fa-right-from-bracket mr-2"></i>
              <span>Logout</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-red-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu (optional) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          {/* mobile nav content here */}
        </div>
      )}
    </header>
  );
};

export default Header;
