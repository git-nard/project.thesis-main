import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, Star, Utensils, Coffee, IceCream } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuSection {
  title: string;
  icon?: React.ReactNode;
  items: MenuItem[];
}

interface RestaurantMenuPageProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  location?: string;
  cuisine?: string;
  priceRange?: string;
  rating?: number;
  openingHours?: string;
  features?: string[];
}

const RestaurantMenuPage: React.FC<RestaurantMenuPageProps> = (props) => {
  const { id } = useParams();
  const location = useLocation();
  

  // Prefer data from Link's state; fallback to passed props
  const restaurant = location.state || props;

  // Prevent missing data errors
  if (!restaurant || !restaurant.name) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-gray-600">
        <h1 className="text-2xl font-semibold mb-2">Restaurant Not Found</h1>
        <p className="mb-4">We couldn’t load the restaurant details.</p>
        <Link to="/restaurants">
          <Button variant="default">Go Back</Button>
        </Link>
      </div>
    );
  }

  // Sample static menu data
  const menu: MenuSection[] = [
    {
      title: "Appetizers",
      icon: <Utensils className="h-5 w-5 text-red-500" />,
      items: [
        { name: "Lumpiang Shanghai", description: "Crispy Filipino spring rolls with sweet chili sauce", price: "₱150" },
        { name: "Calamares", description: "Fried squid rings served with garlic mayo dip", price: "₱220" },
      ],
    },
    {
      title: "Main Course",
      icon: <Utensils className="h-5 w-5 text-orange-500" />,
      items: [
        { name: "Bicol Express", description: "Spicy pork cooked in coconut milk and chili", price: "₱280" },
        { name: "Laing", description: "Taro leaves simmered in coconut milk and chili", price: "₱250" },
        { name: "Grilled Tuna Belly", description: "Perfectly grilled tuna with soy-calamansi sauce", price: "₱350" },
      ],
    },
    {
      title: "Desserts",
      icon: <IceCream className="h-5 w-5 text-pink-500" />,
      items: [
        { name: "Leche Flan", description: "Rich caramel custard dessert", price: "₱120" },
        { name: "Halo-Halo", description: "Crushed ice dessert with sweet beans, fruits, and ice cream", price: "₱150" },
      ],
    },
    {
      title: "Drinks",
      icon: <Coffee className="h-5 w-5 text-blue-500" />,
      items: [
        { name: "Brewed Coffee", price: "₱100" },
        { name: "Iced Tea", price: "₱80" },
        { name: "Fresh Buko Juice", price: "₱120" },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back Button */}
      <Link to="/restaurants">
        <Button variant="ghost" className="mb-4 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Restaurants
        </Button>
      </Link>

      {/* Restaurant Header */}
      <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <div className="flex items-center text-sm text-gray-200 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            {restaurant.location}
          </div>
          <div className="flex items-center text-sm mt-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            {restaurant.rating} • {restaurant.cuisine}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="space-y-6">
        {menu.map((section, index) => (
          <Card key={index} className="shadow-sm border border-gray-100">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                {section.icon}
                {section.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start border-b pb-2 last:border-none"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      {item.description && (
                        <p className="text-sm text-gray-500">{item.description}</p>
                      )}
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                      {item.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
