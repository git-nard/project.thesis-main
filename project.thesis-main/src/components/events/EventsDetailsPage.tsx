import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ChevronLeft } from "lucide-react";
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
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* 🔙 Back Button */}
        <Link to="/events">
          <Button variant="ghost" className="flex items-center gap-2 mb-4">
            <ChevronLeft className="h-4 w-4" />
            Back to Events
          </Button>
        </Link>

        {/* Event Content */}
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

            {/* 🎥 Video Section */}
            {event.video && (
              <div className="my-6 rounded-xl overflow-hidden shadow-lg">
                {(() => {
                  const v = event.video.trim();

                  // 🎥 1️⃣ YouTube (Shorts / watch?v= / youtu.be)
                  if (
                    v.includes("youtube.com") ||
                    v.includes("youtu.be") ||
                    v.includes("shorts/")
                  ) {
                    const embedSrc = v
                      .replace("watch?v=", "embed/")
                      .replace("youtu.be/", "www.youtube.com/embed/")
                      .replace("shorts/", "embed/");

                    return (
                      <iframe
                        className="w-full h-64 md:h-96"
                        src={embedSrc}
                        title={`${event.title} Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    );
                  }

                  // 🎞️ 2️⃣ MP4 or similar
                  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(v) || v.startsWith("/")) {
                    return (
                      <video
                        controls
                        className="w-full h-auto max-h-[480px]"
                        preload="metadata"
                        poster={event.image}
                      >
                        <source src={v} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    );
                  }

                  // 🚫 3️⃣ Fallback
                  return (
                    <p className="text-gray-500 text-center py-6">
                      Unsupported video format. Please upload an MP4 file or a YouTube link.
                    </p>
                  );
                })()}
              </div>
            )}

            {/* ✅ Get Directions Button (like HotelDetailPage) */}
            <Button
              className="bg-black hover:bg-gray-800 text-white mt-4"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodeURIComponent(
                    event.title + " " + event.location
                  )}`,
                  "_blank"
                )
              }
            >
              <MapPin className="mr-2 h-4 w-4" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsDetailsPage;
