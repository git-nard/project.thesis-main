import React from "react";
import { Star, MapPin, Clock, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  rating?: number;
  address?: string;
  cuisineType?: string;
  priceRange?: string;
  onClick?: () => void;
}

const RestaurantCard = ({
  id = "1",
  name = "Bigg's Diner",
  image = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  cuisineType = "Filipino Fusion",
  priceRange = "₱₱",
  rating = 4.5,
  address = "Legazpi City, Albay",
  description = "Popular local restaurant chain serving Filipino-American comfort food with a view of Mayon Volcano.",
  onClick = () => console.log(`Restaurant ${id} clicked`),
}: RestaurantCardProps) => {
  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400 half-filled"
          />,
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  // Format price range for display
  const getPriceLabel = () => {
    switch (priceRange) {
      case "₱":
        return "Budget";
      case "₱₱":
        return "Moderate";
      case "₱₱₱":
        return "Expensive";
      case "₱₱₱₱":
        return "Very Expensive";
      default:
        return priceRange;
    }
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {cuisineType}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <div className="flex items-center space-x-1">
            {renderStars()}
            <span className="ml-1 text-sm font-medium">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="mr-1 h-4 w-4 text-gray-500" />
          {address}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="mr-1 h-4 w-4 text-gray-500" />
          <span>Open Hours: 10:00 AM - 10:00 PM</span>
        </div>
        <div className="mt-2 flex items-center text-sm font-medium">
          <span className="text-amber-600">{priceRange}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span>{getPriceLabel()}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" onClick={onClick} className="w-full">
          View Menu
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
