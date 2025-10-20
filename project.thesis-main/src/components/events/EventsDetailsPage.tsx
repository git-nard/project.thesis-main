import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ChevronLeft,} from "lucide-react";
import { events } from "./eventsData";

const EventsDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link to="/events">
          <Button variant="ghost" className="flex items-center gap-2 mb-4">
            <ChevronLeft className="h-4 w-4" />
            Back to Events
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-3 mb-6 text-gray-700">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" /> {event.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" /> {event.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" /> {event.time}
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-400" />{" "}
                {event.attendees.toLocaleString()} attendees
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {event.description}
            </p>

            {event.video && (
            <div className="my-6 rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64 md:h-96"
                src={
                  event.video
                    .replace("watch?v=", "embed/")
                    .replace("youtu.be/", "www.youtube.com/embed/")
                    .replace("shorts/", "embed/") // 👈 automatically fix Shorts too
                }
                title={`${event.title} Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}


            <Button asChild>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  event.location
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsDetailsPage;
