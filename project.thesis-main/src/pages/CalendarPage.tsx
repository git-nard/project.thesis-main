import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  month: number;
  day: number;
  year: number;
  location: string;
  image: string;
  category: string;
  time: string;
  attendees: number;
}

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Magayon Festival",
    description:
      "Annual festival celebrating the legend of Daragang Magayon (Beautiful Lady) and the majestic Mayon Volcano, featuring street dancing, trade fairs, and cultural performances.",
    date: "May 1-31, 2023",
    month: 5,
    day: 1,
    year: 2023,
    location: "Legazpi City, Albay",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Cultural Festival",
    time: "All Day",
    attendees: 5000,
  },
  {
    id: "2",
    title: "Ibalong Festival",
    description:
      "Festival celebrating the epic story of Ibalong, featuring street performances, mask dances, and showcasing the heroic exploits of ancient Bicolano heroes.",
    date: "August 8-12, 2023",
    month: 8,
    day: 8,
    year: 2023,
    location: "Legazpi City, Albay",
    image:
      "https://images.unsplash.com/photo-1581365365721-9f5532e4b949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Cultural Festival",
    time: "9:00 AM - 10:00 PM",
    attendees: 3500,
  },
  {
    id: "3",
    title: "Cagsawa Festival",
    description:
      "Commemorating the 1814 eruption of Mayon Volcano that buried the town of Cagsawa, featuring cultural shows, photo competitions, and local food fairs.",
    date: "February 1-7, 2023",
    month: 2,
    day: 1,
    year: 2023,
    location: "Daraga, Albay",
    image:
      "https://images.unsplash.com/photo-1596400953369-8b042b1db2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Historical Commemoration",
    time: "8:00 AM - 8:00 PM",
    attendees: 2000,
  },
  {
    id: "4",
    title: "Albay Food Festival",
    description:
      "Celebration of Bicolano cuisine featuring cooking demonstrations, food tasting, and competitions highlighting local ingredients like chili and coconut.",
    date: "July 15-17, 2023",
    month: 7,
    day: 15,
    year: 2023,
    location: "Legazpi City Convention Center",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Food Festival",
    time: "10:00 AM - 9:00 PM",
    attendees: 1500,
  },
  {
    id: "5",
    title: "Mayon Volcano Trail Run",
    description:
      "Annual trail running event with various distance categories (5K, 10K, 21K) around the scenic trails of Mayon Volcano.",
    date: "October 8, 2023",
    month: 10,
    day: 8,
    year: 2023,
    location: "Mayon Volcano, Albay",
    image:
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Sports Event",
    time: "5:00 AM - 12:00 PM",
    attendees: 800,
  },
  {
    id: "6",
    title: "Albay Craft Beer Festival",
    description:
      "Showcasing local craft breweries from Albay and surrounding regions, with beer tasting, food pairings, and live music.",
    date: "November 25-26, 2023",
    month: 11,
    day: 25,
    year: 2023,
    location: "Embarcadero de Legazpi",
    image:
      "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Food & Drink",
    time: "3:00 PM - 11:00 PM",
    attendees: 1200,
  },
  {
    id: "7",
    title: "Pili Festival",
    description:
      "Celebration of the pili nut, Bicol's famous agricultural product, featuring cooking competitions, product exhibitions, and cultural performances.",
    date: "June 10-12, 2023",
    month: 6,
    day: 10,
    year: 2023,
    location: "Sorsogon City, Albay",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Agricultural Festival",
    time: "9:00 AM - 9:00 PM",
    attendees: 2500,
  },
  {
    id: "8",
    title: "Albay Music Festival",
    description:
      "Annual music festival featuring local and national artists, with performances ranging from traditional Bicolano music to contemporary genres.",
    date: "April 22-23, 2023",
    month: 4,
    day: 22,
    year: 2023,
    location: "Peñaranda Park, Legazpi City",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Music Festival",
    time: "4:00 PM - 12:00 AM",
    attendees: 3000,
  },
  {
    id: "9",
    title: "Daragang Magayon Art Exhibition",
    description:
      "Art exhibition showcasing works inspired by the legend of Daragang Magayon and the natural beauty of Albay, featuring local and national artists.",
    date: "September 15-30, 2023",
    month: 9,
    day: 15,
    year: 2023,
    location: "Albay Museum, Legazpi City",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Art Exhibition",
    time: "10:00 AM - 6:00 PM",
    attendees: 1200,
  },
  {
    id: "10",
    title: "Albay Christmas Festival of Lights",
    description:
      "Annual Christmas celebration featuring light displays, lantern competitions, caroling contests, and night markets throughout Albay province.",
    date: "December 1-31, 2023",
    month: 12,
    day: 1,
    year: 2023,
    location: "Various locations in Albay",
    image:
      "https://images.unsplash.com/photo-1576692155415-95f820a2c4c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Holiday Festival",
    time: "5:00 PM - 11:00 PM",
    attendees: 5000,
  },
  {
    id: "11",
    title: "Tabak Festival",
    description:
      "Cultural festival in Tabaco City celebrating the local blacksmithing industry and the city's heritage of crafting knives and farm tools.",
    date: "March 8-12, 2023",
    month: 3,
    day: 8,
    year: 2023,
    location: "Tabaco City, Albay",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Cultural Festival",
    time: "8:00 AM - 10:00 PM",
    attendees: 2800,
  },
  {
    id: "12",
    title: "Albay Eco-Tourism Summit",
    description:
      "Conference and exhibition focused on sustainable tourism practices in Albay, featuring workshops, panel discussions, and eco-tour showcases.",
    date: "January 20-22, 2023",
    month: 1,
    day: 20,
    year: 2023,
    location: "Legazpi City Convention Center",
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Conference",
    time: "9:00 AM - 5:00 PM",
    attendees: 500,
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CalendarPage = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events based on selected filters
  const filteredEvents = events.filter((event) => {
    // Filter by year
    if (event.year !== selectedYear) return false;

    // Filter by month if selected
    if (selectedMonth !== null && event.month !== selectedMonth) return false;

    // Filter by category if selected
    if (selectedCategory && event.category !== selectedCategory) return false;

    // Filter by search query
    if (
      searchQuery &&
      !event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !event.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !event.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  // Get unique categories from events
  const categories = Array.from(new Set(events.map((event) => event.category)));

  // Group events by month for the calendar view
  const eventsByMonth = months.map((month, index) => {
    const monthEvents = filteredEvents.filter(
      (event) => event.month === index + 1,
    );
    return {
      month,
      monthIndex: index + 1,
      events: monthEvents,
    };
  });

  const clearFilters = () => {
    setSelectedMonth(null);
    setSelectedCategory("");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/events">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Events
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2">Events Calendar</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Plan your visit to Albay around these exciting festivals and events
          throughout the year.
        </p>

        {/* Filters */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h2 className="text-xl font-bold">Filter Events</h2>
            {(selectedMonth !== null || selectedCategory || searchQuery) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="flex items-center gap-1"
              >
                <X className="h-4 w-4" /> Clear filters
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <Select
                value={selectedYear.toString()}
                onValueChange={(value) => setSelectedYear(parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Month</label>
              <Select
                value={selectedMonth !== null ? selectedMonth.toString() : ""}
                onValueChange={(value) =>
                  setSelectedMonth(value ? parseInt(value) : null)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="All months" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All months</SelectItem>
                  {months.map((month, index) => (
                    <SelectItem key={index} value={(index + 1).toString()}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Search</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
                {searchQuery && (
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Calendar View */}
        <div className="space-y-8 mb-12">
          {eventsByMonth.map((monthData) => {
            if (monthData.events.length === 0) return null;

            return (
              <div
                key={monthData.month}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="bg-blue-50 p-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    {monthData.month} {selectedYear}
                  </h3>
                </div>

                <div className="divide-y divide-gray-100">
                  {monthData.events.map((event) => (
                    <div
                      key={event.id}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4 lg:w-1/5">
                          <div className="aspect-video md:aspect-square rounded-md overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                            <div>
                              <h4 className="text-lg font-bold">
                                {event.title}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {event.date}
                              </p>
                            </div>
                            <Badge className="self-start">
                              {event.category}
                            </Badge>
                          </div>

                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                              <span className="truncate">{event.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-gray-400" />
                              <span>
                                {event.attendees.toLocaleString()} attendees
                              </span>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Button size="sm">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No events found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              There are no events matching your current filters. Try adjusting
              your search criteria or selecting a different month or category.
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}

        {/* View Calendar Section */}
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">View Full Calendar</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Want to see all events in a traditional calendar view? Check out our
            interactive calendar to plan your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/view-calendar">
              <Button className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                View Calendar
              </Button>
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Download PDF Calendar
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CalendarPage;
