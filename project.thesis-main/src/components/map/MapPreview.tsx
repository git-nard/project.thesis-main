import React, { useState } from "react";
import { MapPin, Navigation, Layers, ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface MapLocation {
  id: string;
  name: string;
  type: "attraction" | "hotel" | "restaurant";
  coordinates: [number, number]; // [latitude, longitude]
  description?: string;
}

interface MapPreviewProps {
  title?: string;
  description?: string;
  mapImage?: string;
  locations?: MapLocation[];
  onViewFullMap?: () => void;
  onLocationClick?: (location: MapLocation) => void;
}

const MapPreview = ({
  title = "Explore Albay's Top Destinations",
  description = "Discover the perfect cone of Mayon Volcano and other breathtaking attractions, accommodations, and dining spots across Albay.",
  mapImage = "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  locations = [
    {
      id: "loc1",
      name: "Mayon Volcano",
      type: "attraction",
      coordinates: [13.2552, 123.6856],
      description: "The world-famous perfect cone volcano",
    },
    {
      id: "loc2",
      name: "Cagsawa Ruins",
      type: "attraction",
      coordinates: [13.1561, 123.7358],
      description: "Historic ruins with Mayon Volcano backdrop",
    },
    {
      id: "loc3",
      name: "The Oriental Hotel",
      type: "hotel",
      coordinates: [13.1767, 123.6482],
      description: "Luxury hotel with volcano views",
    },
    {
      id: "loc4",
      name: "Small Talk Café",
      type: "restaurant",
      coordinates: [13.1391, 123.7315],
      description: "Famous for Bicol Express and local cuisine",
    },
    {
      id: "loc5",
      name: "Lignon Hill",
      type: "attraction",
      coordinates: [13.1553, 123.7351],
      description: "Panoramic views of Legazpi City and Mayon",
    },
  ],
  onViewFullMap = () => console.log("View full map clicked"),
  onLocationClick = (location) => console.log("Location clicked:", location),
}: MapPreviewProps) => {
  const [activeLayer, setActiveLayer] = useState<
    "all" | "attraction" | "hotel" | "restaurant"
  >("all");

  // Filter locations based on active layer
  const filteredLocations =
    activeLayer === "all"
      ? locations
      : locations.filter((location) => location.type === activeLayer);

  // Get marker color based on location type
  const getMarkerColor = (type: "attraction" | "hotel" | "restaurant") => {
    switch (type) {
      case "attraction":
        return "text-green-500 bg-green-100";
      case "hotel":
        return "text-blue-500 bg-blue-100";
      case "restaurant":
        return "text-orange-500 bg-orange-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  // Get layer button style based on active state
  const getLayerButtonStyle = (
    layer: "all" | "attraction" | "hotel" | "restaurant",
  ) => {
    const isActive = activeLayer === layer;
    return cn(
      "flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full transition-colors",
      isActive
        ? "bg-primary text-primary-foreground"
        : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    );
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="mt-1 text-muted-foreground">{description}</p>
        </div>
        <Button
          onClick={onViewFullMap}
          className="flex items-center gap-2 self-start md:self-center"
        >
          <Navigation className="h-4 w-4" />
          View Full Interactive Map
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <div className="flex items-center gap-2 mr-2">
          <Layers className="h-4 w-4" />
          <span className="text-sm font-medium">Map Layers:</span>
        </div>
        <button
          className={getLayerButtonStyle("all")}
          onClick={() => setActiveLayer("all")}
        >
          All
        </button>
        <button
          className={getLayerButtonStyle("attraction")}
          onClick={() => setActiveLayer("attraction")}
        >
          Attractions
        </button>
        <button
          className={getLayerButtonStyle("hotel")}
          onClick={() => setActiveLayer("hotel")}
        >
          Hotels
        </button>
        <button
          className={getLayerButtonStyle("restaurant")}
          onClick={() => setActiveLayer("restaurant")}
        >
          Restaurants
        </button>
      </div>

      <div className="relative rounded-lg overflow-hidden border border-border">
        {/* Map Image */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src={mapImage}
            alt="Map of Albay"
            className="h-full w-full object-cover"
          />

          {/* Map Markers */}
          <TooltipProvider>
            {filteredLocations.map((location) => {
              // Convert coordinates to percentage positions on the map
              // This is a simplified example - in a real app, you'd use proper geo mapping
              const left = ((location.coordinates[1] - 123.64) / 0.12) * 100;
              const top = (1 - (location.coordinates[0] - 13.13) / 0.13) * 100;

              return (
                <Tooltip key={location.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={cn(
                        "absolute flex items-center justify-center rounded-full p-1",
                        "transform -translate-x-1/2 -translate-y-1/2 transition-all",
                        "hover:z-10 hover:scale-125",
                        getMarkerColor(location.type),
                      )}
                      style={{
                        left: `${Math.min(Math.max(left, 5), 95)}%`,
                        top: `${Math.min(Math.max(top, 5), 95)}%`,
                      }}
                      onClick={() => onLocationClick(location)}
                    >
                      <MapPin className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-[200px]">
                    <div className="text-sm">
                      <div className="font-semibold">{location.name}</div>
                      {location.description && (
                        <div className="text-xs text-muted-foreground">
                          {location.description}
                        </div>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>

          {/* Map Controls */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/90 shadow-md"
            >
              <Navigation className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/90 shadow-md"
            >
              <Info className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-card p-3 border-t border-border">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="font-medium">Legend:</span>
            <div className="flex items-center gap-1.5">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 hover:bg-green-200"
              >
                <MapPin className="h-3 w-3 mr-1" /> Attractions
              </Badge>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 hover:bg-blue-200"
              >
                <MapPin className="h-3 w-3 mr-1" /> Hotels
              </Badge>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-700 hover:bg-orange-200"
              >
                <MapPin className="h-3 w-3 mr-1" /> Restaurants
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Locations */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Featured Locations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.slice(0, 3).map((location) => (
            <Card
              key={location.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onLocationClick(location)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      getMarkerColor(location.type),
                    )}
                  >
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">{location.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {location.description}
                    </p>
                    <div className="mt-2">
                      <Badge variant="outline" className="text-xs">
                        {location.type.charAt(0).toUpperCase() +
                          location.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPreview;
