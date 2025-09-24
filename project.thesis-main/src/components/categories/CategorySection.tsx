import React from "react";
import { MapPin, Compass, Hotel, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

const CategoryCard = ({
  title,
  description,
  icon,
  color,
  onClick = () => {},
}: CategoryCardProps) => {
  return (
    <Card
      className={cn(
        "group h-full w-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg bg-white",
        `hover:border-${color}-400`
      )}
      onClick={onClick}
    >
      <CardHeader className="p-6">
        <div
          className={cn(
            "mb-4 flex h-14 w-14 items-center justify-center rounded-full",
            `bg-${color}-100 text-${color}-600`
          )}
        >
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div
          className={cn(
            "flex items-center text-sm font-medium transition-colors",
            `text-${color}-600 group-hover:text-${color}-700`
          )}
        >
          Explore {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </CardFooter>
    </Card>
  );
};

interface CategorySectionProps {
  title?: string;
  description?: string;
  categories?: Array<{
    id: string;
    title: string;
    description: string;
    icon: "attractions" | "hotels" | "restaurants";
    color: string;
    onClick?: () => void;
  }>;
}

const CategorySection = ({
  title = "Explore Albay",
  description = "Discover the best tourist spots, accommodations, and dining options in Albay, Philippines.",
  categories = [
    {
      id: "attractions",
      title: "Tourist Spots",
      description: "Explore the natural wonders and cultural heritage sites of Albay, including the iconic Mayon Volcano.",
      icon: "attractions",
      color: "green",
      onClick: () => console.log("Tourist spots clicked"),
    },
    {
      id: "hotels",
      title: "Accommodations",
      description: "Find the perfect place to stay, from luxury resorts with volcano views to budget-friendly hotels in the city.",
      icon: "hotels",
      color: "blue",
      onClick: () => console.log("Hotels clicked"),
    },
    {
      id: "restaurants",
      title: "Restaurants",
      description: "Taste the flavors of Bicol cuisine, known for its spicy dishes and unique culinary traditions.",
      icon: "restaurants",
      color: "orange",
      onClick: () => console.log("Restaurants clicked"),
    },
  ],
}: CategorySectionProps) => {
  // Function to render the appropriate icon based on category type
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "attractions":
        return <Compass className="h-7 w-7" />;
      case "hotels":
        return <Hotel className="h-7 w-7" />;
      case "restaurants":
        return <Utensils className="h-7 w-7" />;
      default:
        return <MapPin className="h-7 w-7" />;
    }
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">{description}</p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              icon={renderIcon(category.icon)}
              color={category.color}
              onClick={category.onClick}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
