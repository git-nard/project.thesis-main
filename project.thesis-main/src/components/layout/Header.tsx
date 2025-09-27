import React, { useState } from "react";
import { Search, Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <a
            href="/attractions"
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            Attractions
          </a>
          <a
            href="/hotels"
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            Hotels
          </a>
          <a
            href="/restaurants"
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            Restaurants
          </a>
          <a
            href="/experiences"
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            Experiences
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
                <a href="/map" className="w-full">
                  Interactive Map
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/events" className="w-full">
                  Events
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/about" className="w-full">
                  About Albay
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/safety" className="w-full">
                  Traveler's Safety Guide
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

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
</form>

        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-red-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
            <i className="fa-solid fa-user text-gray-700"></i>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
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
              <span>Saved Places</span>
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

      

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <form onSubmit={handleSearchSubmit} className="relative mb-4">
            <Input
              type="search"
              placeholder="Search places..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
          <nav className="flex flex-col space-y-3">
            <a
              href="/attractions"
              className="text-gray-700 hover:text-red-600 font-medium py-2 border-b border-gray-100"
            >
              Attractions
            </a>
            <a
              href="/hotels"
              className="text-gray-700 hover:text-red-600 font-medium py-2 border-b border-gray-100"
            >
              Hotels
            </a>
            <a
              href="/restaurants"
              className="text-gray-700 hover:text-red-600 font-medium py-2 border-b border-gray-100"
            >
              Restaurants
            </a>
            <a
              href="/experiences"
              className="text-gray-700 hover:text-red-600 font-medium py-2 border-b border-gray-100"
            >
              Experiences
            </a>
            <a
              href="/map"
              className="text-gray-700 hover:text-red-600 font-medium py-2 border-b border-gray-100"
            >
              Interactive Map
            </a>
            <a
              href="/events"
              className="text-gray-700 hover:text-red-600 font-medium py-2 border-b border-gray-100"
            >
              Events
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-red-600 font-medium py-2"
            >
              About Albay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
