import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";

interface HeroSectionProps {  
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  searchPlaceholder?: string;
  ctaText?: string;
  onSearch?: (searchTerm: string) => void;
  onCtaClick?: () => void;
}

const HeroSection = ({
  backgroundImage = "https://albay.gov.ph/wp-content/uploads/2020/02/joenabells_20200226_120826_0.jpg",
  title = "Discover the Beauty of Albay",
  subtitle = "Home to the majestic Mayon Volcano and rich Filipino culture",
  searchPlaceholder = "Search for attractions, hotels, or restaurants...",
  ctaText = "Explore Now",
  onSearch = () => console.log("Search initiated"),
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/40">
        <img
          src={backgroundImage}
          alt="Mayon Volcano"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          {subtitle}
        </p>

        {/* Search Bar */}
        {/* <form onSubmit={handleSearchSubmit} className="mb-8 w-full max-w-3xl">
          <div className="relative flex overflow-hidden rounded-full bg-white shadow-lg">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full bg-transparent px-6 py-4 text-gray-800 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-primary px-6 text-white transition-colors hover:bg-primary/90"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form> */}

        {/* CTA Button */}
        <Button
          size="lg"
          className="group mt-2 rounded-full px-8 py-6 text-base font-semibold"
          onClick={onCtaClick}
        >
          {ctaText}
          <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <div className="h-10 w-[1px] bg-white/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
