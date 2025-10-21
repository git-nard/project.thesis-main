import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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

interface NotificationsProps {
  events: Event[];
  daysAhead?: number; // optional range, defaults to 180 days (≈6 months)
}

const Notifications: React.FC<NotificationsProps> = ({ events, daysAhead = 180 }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const location = useLocation();

  // 🧠 Hide notifications on these pages:
  const hiddenRoutes = ["/login", "/register"];
  const isHidden = hiddenRoutes.some((path) => location.pathname.startsWith(path));

  useEffect(() => {
    if (isHidden) return; // skip if on hidden pages

    const now = new Date();
    const future = new Date();
    future.setDate(now.getDate() + daysAhead);
    const currentYear = now.getFullYear();

    const parsedEvents = events.map((event) => {
      let start = new Date();
      let end = new Date();

      const match = event.date.match(
        /^([A-Za-z]+)?\s*(\d{1,2})(?:\s*[–-]\s*([A-Za-z]+)?\s*(\d{1,2}))?$/
      );

      if (match) {
        const [, startMonth, startDay, endMonth, endDay] = match;
        start = new Date(`${startMonth || ""} ${startDay}, ${currentYear}`);
        end = new Date(`${endMonth || startMonth || ""} ${endDay || startDay}, ${currentYear}`);
      } else {
        start = new Date(event.date);
        end = new Date(event.date);
      }

      if (end < now && end.getMonth() < now.getMonth()) {
        start.setFullYear(currentYear + 1);
        end.setFullYear(currentYear + 1);
      }

      return { ...event, startDate: start, endDate: end };
    });

    const filtered = parsedEvents.filter(
      (e) => e.endDate >= now && e.startDate <= future
    );

    filtered.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    setUpcomingEvents(filtered);
  }, [events, daysAhead, isHidden]);

  if (isHidden || upcomingEvents.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="relative p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
        onClick={() => setShowPopup(!showPopup)}
      >
        <Bell className="h-6 w-6 text-gray-700" />
        {upcomingEvents.length > 0 && (
          <span
            className="absolute top-0 right-0 inline-flex items-center justify-center 
            px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
          >
            {upcomingEvents.length}
          </span>
        )}
      </button>

      {showPopup && (
        <div className="mt-2 w-80 bg-white shadow-xl rounded-lg overflow-hidden animate-fadeIn">
          <div className="p-4 border-b font-bold text-gray-700">🎉 Upcoming Events</div>
          <ul className="max-h-72 overflow-y-auto">
            {upcomingEvents.map((event) => (
              <li
                key={event.id}
                className="p-3 border-b last:border-b-0 flex justify-between items-center"
              >
                <div>
                  <div className="text-sm font-medium text-gray-800">{event.title}</div>
                  <div className="text-xs text-gray-500">{event.date}</div>
                </div>
                <Link
                  to={`/events/${event.id}`}
                  className="text-blue-600 text-xs hover:underline"
                  onClick={() => setShowPopup(false)}
                >
                  View
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="p-2 text-center text-xs text-gray-500 cursor-pointer hover:bg-gray-100"
            onClick={() => setShowPopup(false)}
          >
            Close
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
