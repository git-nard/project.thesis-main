import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
    <div className="relative h-[760px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Mayon Volcano"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg text-gray-200 mb-8 md:text-xl drop-shadow-md">
            {subtitle}
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="group mt-2 rounded-full px-8 py-6 text-base font-semibold"
            onClick={onCtaClick}
          >
            {ctaText}
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>

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
