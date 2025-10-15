import React, { useState } from "react";
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
import { events } from "./eventsData";

const EventsPage = () => {
  // ✅ Store bookmarked events (for demo)
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  // ✅ Toggle function
  const toggleBookmark = (id: string) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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

        {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Events & Festivals in Albay</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience the vibrant culture and traditions of Albay through its
              colorful festivals and exciting events throughout the year.
            </p>
          </div>


        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const isBookmarked = bookmarked.includes(event.id);

            return (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-lg transition-shadow relative"
              >
                {/* 📸 Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />

                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(event.id)}
                    className={`group absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      isBookmarked
                        ? "bg-red-500"
                        : "bg-white hover:bg-red-500"
                    }`}
                  >
                    <i
                      className={`fa-solid fa-bookmark text-lg transition-all duration-300 ${
                        isBookmarked
                          ? "text-white"
                          : "text-red-500 group-hover:text-white"
                      }`}
                    ></i>
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-500 text-white hover:bg-red-600">
                      {event.category}
                    </Badge>
                  </div>
                </div>

                {/* Card Details */}
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
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      {event.attendees.toLocaleString()} expected attendees
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Link to={`/events/${event.id}`}>
                    <Button className="w-full">View Event Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
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
