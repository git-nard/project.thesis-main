import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, PlusCircle, Clock, MapPin, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Activity {
  id: number;
  time: string;
  place: string;
  activity: string;
}

function DayPlanner() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [activity, setActivity] = useState("");

  useEffect(() => {
    document.title = "Day Planner - Albay Travel";
  }, []);

  const addActivity = () => {
    if (!time || !place || !activity) return alert("Please fill in all fields!");
    const newActivity = {
      id: Date.now(),
      time,
      place,
      activity,
    };
    setActivities([...activities, newActivity]);
    setTime("");
    setPlace("");
    setActivity("");
  };

  const deleteActivity = (id: number) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/itineraries">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700">
            <ChevronLeft className="h-4 w-4" />
            Back to Itineraries
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <Clock className="mx-auto h-12 w-12 text-gray-900 mb-3" />
        <h1 className="text-4xl font-bold text-gray-900">Day Planner</h1>
        <p className="text-gray-600 mt-2">
          Schedule your day — add the places you’ll visit and activities you’ll do.
        </p>
      </div>

      {/* Input Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 mb-8 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
          <PlusCircle className="h-5 w-5 text-gray-900" /> Add Activity
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <input
            type="time"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="text"
            placeholder="Place to visit"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            type="text"
            placeholder="Activity to do"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-white"
            onClick={addActivity}
          >
            Add
          </Button>
        </div>
      </div>

      {/* Activity List */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-900" /> Scheduled Activities
        </h2>

        {activities.length === 0 ? (
          <p className="text-gray-500 italic text-center py-6">
            No activities scheduled yet. Start planning your day!
          </p>
        ) : (
          <ul className="space-y-4">
            {activities.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.time} — {item.place}
                  </p>
                  <p className="text-gray-700">{item.activity}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteActivity(item.id)}
                >
                  <Trash2 className="h-5 w-5 text-gray-500 hover:text-red-600" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DayPlanner;
