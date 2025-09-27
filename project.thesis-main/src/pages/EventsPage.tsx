import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: string;
  time: string;
  attendees: number;
}

const events: Event[] = [
  {
    id: "1",
    title: "Magayon Festival",
    description:
      "Annual festival celebrating the legend of Daragang Magayon (Beautiful Lady) and the majestic Mayon Volcano, featuring street dancing, trade fairs, and cultural performances.",
    date: "May 1-31, 2023",
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
    location: "Embarcadero de Legazpi",
    image:
      "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Food & Drink",
    time: "3:00 PM - 11:00 PM",
    attendees: 1200,
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2">Events & Festivals in Albay</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Experience the vibrant culture and traditions of Albay through its
          colorful festivals and exciting events throughout the year.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-red-500 text-white hover:bg-red-600">
                    {event.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <span>
                      {event.attendees.toLocaleString()} expected attendees
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Link to={`/events/${event.id}`}>
                  <Button className="w-full">View Event Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events Calendar</h2>
          <p className="text-gray-600 mb-6">
            Plan your visit to Albay around these exciting festivals and events.
            Most cultural festivals in Albay are held annually and celebrate the
            region's rich heritage, natural wonders, and culinary traditions.
          </p>
          <Link to="/calendar">
            <Button>View Full Calendar</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
