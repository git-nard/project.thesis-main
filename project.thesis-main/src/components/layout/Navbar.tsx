import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  logoSrc?: string;
  logoText?: string;
  isAuthenticated?: boolean;
  onSearchClick?: () => void;
  onProfileClick?: () => void;
  onCartClick?: () => void;
}

const Navbar = ({
  logoSrc = "/vite.svg",
  logoText = "Albay Travel",
  isAuthenticated = false,
  onSearchClick = () => console.log("Search clicked"),
  onProfileClick = () => console.log("Profile clicked"),
  onCartClick = () => console.log("Cart clicked"),
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tourist Spots", path: "/tourist-spots" },
    { name: "Destinations", path: "/destinations" },
    { name: "Tourism Activities", path: "/tourism-activities" },
    { name: "Hotels", path: "/hotels" },
    { name: "Restaurants", path: "/restaurants" },
    { name: "Events", path: "/events" },
    
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoSrc} alt="Albay Travel Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-gray-900">{logoText}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchClick}
              aria-label="Search"
              className="text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              aria-label="Bookings"
              className="text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>

            <div className="ml-2 flex items-center space-x-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              <MapPin className="h-3 w-3" />
              <span>Albay, PH</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchClick}
              aria-label="Search"
              className="mr-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 z-20 bg-white px-4 pb-6 pt-2 shadow-lg md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="py-2 text-base font-medium text-gray-700 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="my-2 h-px w-full bg-gray-200" />

          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="flex items-center justify-center space-x-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Bookings</span>
            </Button>
          </div>

          <div className="flex items-center space-x-1 rounded-full bg-blue-100 px-3 py-1 self-start text-xs font-medium text-blue-800">
            <MapPin className="h-3 w-3" />
            <span>Albay, Philippines</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
