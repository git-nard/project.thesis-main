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

export interface Event {
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
  // ... your events array here (same as before) ...
];

export { events }; // ✅ Named export so Notifications can use it

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
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
          Experience the vibrant culture and traditions of Albay through its colorful festivals and exciting events throughout the year.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-red-500 text-white hover:bg-red-600">{event.category}</Badge>
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
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{event.description}</p>
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
                    <span>{event.attendees.toLocaleString()} expected attendees</span>
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
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
