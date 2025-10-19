import React from "react";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface FeaturedCardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  category?: "attraction" | "hotel" | "restaurant";
  rating?: number;
  location?: string;
  price?: string;
  tags?: string[];
  onClick?: () => void;
}

const FeaturedCard = ({
  id = "featured-1",
  title = "Mayon Volcano",
  description = "The world-famous perfect cone volcano, an iconic symbol of Albay province and one of the most picturesque volcanoes in the world.",
  image = "https://images.unsplash.com/photo-1577976793837-0eb37f6e4e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  category = "attraction",
  rating = 4.8,
  location = "Legazpi City, Albay",
  price = "",
  tags = ["Natural Wonder", "Hiking", "Photography"],
  onClick = () => console.log("Featured card clicked"),
}: FeaturedCardProps) => {
  // Category styling
  const getCategoryStyles = () => {
    switch (category) {
      case "hotel":
        return {
          badge: "bg-blue-100 text-blue-800",
          label: "Hotel",
        };
      case "restaurant":
        return {
          badge: "bg-orange-100 text-orange-800",
          label: "Restaurant",
        };
      case "attraction":
      default:
        return {
          badge: "bg-green-100 text-green-800",
          label: "Attraction",
        };
    }
  };

  const categoryStyle = getCategoryStyles();

  // Render stars for rating
  const renderRatingStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={`star-${i}`}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={`star-${i}`}
            className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50"
          />,
        );
      } else {
        stars.push(
          <Star key={`star-${i}`} className="h-4 w-4 text-gray-300" />,
        );
      }
    }

    return stars;
  };

  return (
    <Card
      className="group h-full w-full overflow-hidden transition-all duration-300 hover:shadow-lg bg-white"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category Badge */}
        <div className="absolute left-3 top-3">
          <Badge
            className={cn("px-2 py-1 text-xs font-medium", categoryStyle.badge)}
          >
            {categoryStyle.label}
          </Badge>
        </div>

        {/* Price Badge (for hotels and restaurants) */}
        {price && (category === "hotel" || category === "restaurant") && (
          <div className="absolute right-3 top-3">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {price}
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-bold line-clamp-1">
            {title}
          </CardTitle>
        </div>
        <div className="mt-1 flex items-center space-x-1">
          <div className="flex">{renderRatingStars()}</div>
          <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <div className="mb-2 flex items-center text-sm text-gray-500">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>
        <CardDescription className="line-clamp-2 text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex flex-col items-start p-4 pt-0">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span
              key={`tag-${index}`}
              className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details Link */}
        <div className="flex w-full items-center justify-end text-sm font-medium text-blue-600 group-hover:text-blue-800">
          View Details
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCard;