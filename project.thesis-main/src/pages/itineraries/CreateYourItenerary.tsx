import React, { useState, useEffect } from "react";
import { Plus, Trash2, Calendar, MapPin, Clock, ChevronLeft, Luggage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ItineraryDay = {
  dayNumber: number;
  activities: { time: string; description: string }[];
};

type Itinerary = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
};

const CreateItinerary: React.FC = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState<ItineraryDay[]>([{ dayNumber: 1, activities: [] }]);
  const [saved, setSaved] = useState<Itinerary[]>([]);

  useEffect(() => {
    document.title = "Create Your Itinerary - Albay Travel";
    const stored = localStorage.getItem("userItineraries");
    if (stored) setSaved(JSON.parse(stored));
  }, []);

  const addDay = () => {
    const nextDay = { dayNumber: days.length + 1, activities: [] };
    setDays([...days, nextDay]);
  };

  const removeDay = (index: number) => {
    const updated = days.filter((_, i) => i !== index);
    setDays(updated);
  };

  const addActivity = (dayIndex: number) => {
    const updated = [...days];
    updated[dayIndex].activities.push({ time: "", description: "" });
    setDays(updated);
  };

  const updateActivity = (dayIndex: number, actIndex: number, field: string, value: string) => {
    const updated = [...days];
    (updated[dayIndex].activities[actIndex] as any)[field] = value;
    setDays(updated);
  };

  const removeActivity = (dayIndex: number, actIndex: number) => {
    const updated = [...days];
    updated[dayIndex].activities.splice(actIndex, 1);
    setDays(updated);
  };

  const handleSave = () => {
    if (!title || !startDate || !endDate) {
      alert("Please complete the title, start date, and end date.");
      return;
    }

    const newItinerary: Itinerary = {
      id: `${Date.now()}`,
      title,
      startDate,
      endDate,
      days,
    };

    const updated = [newItinerary, ...saved];
    setSaved(updated);
    localStorage.setItem("userItineraries", JSON.stringify(updated));

    alert("Itinerary saved successfully!");
    setTitle("");
    setStartDate("");
    setEndDate("");
    setDays([{ dayNumber: 1, activities: [] }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 relative">
      {/* ✅ Step 4: Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 px-6 py-3 flex justify-between items-center">
        <Link to="/itineraries">
          <Button variant="ghost" className="flex items-center gap-2 text-blue-700">
            <ChevronLeft className="w-4 h-4" /> Back
          </Button>
        </Link>

        <Link to="/saved-itineraries">
          <Button variant="outline" className="text-blue-600 border-blue-400">
            <Luggage className="w-4 h-4 mr-2" /> View Saved Itineraries
          </Button>
        </Link>
      </div>

      {/* Page Content (add top padding to avoid overlap with fixed bar) */}
      <div className="max-w-5xl mx-auto mt-20">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Create Your Itinerary</h1>
        <p className="text-gray-600 mb-8">
          Plan your trip day by day — add destinations, activities, and schedules!
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <label className="block">
              <span className="flex items-center gap-2 text-gray-700 font-semibold">
                <MapPin className="w-4 h-4" /> Title
              </span>
              <input
                className="mt-2 w-full border rounded-lg px-4 py-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="My Albay Adventure"
              />
            </label>

            <div className="flex flex-col gap-3">
              <label>
                <span className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Calendar className="w-4 h-4" /> Start Date
                </span>
                <input
                  type="date"
                  className="mt-2 w-full border rounded-lg px-4 py-2"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>

              <label>
                <span className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Calendar className="w-4 h-4" /> End Date
                </span>
                <input
                  type="date"
                  className="mt-2 w-full border rounded-lg px-4 py-2"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Days Section */}
          {days.map((day, dayIndex) => (
            <div key={day.dayNumber} className="border-t pt-6 mt-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl font-bold text-blue-800">Day {day.dayNumber}</h2>
                {dayIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeDay(dayIndex)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" /> Remove Day
                  </Button>
                )}
              </div>

              {day.activities.map((act, actIndex) => (
                <div
                  key={actIndex}
                  className="bg-blue-50 rounded-xl p-4 mb-3 flex flex-col md:flex-row gap-4"
                >
                  <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Time
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={act.time}
                      onChange={(e) =>
                        updateActivity(dayIndex, actIndex, "time", e.target.value)
                      }
                      placeholder="e.g., 7:00 AM - 8:00 AM"
                    />
                  </div>

                  <div className="flex-[2]">
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Destination / Activity
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={act.description}
                      onChange={(e) =>
                        updateActivity(dayIndex, actIndex, "description", e.target.value)
                      }
                      placeholder="e.g., Visit Cagsawa Ruins, Photo ops, etc."
                    />
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeActivity(dayIndex, actIndex)}
                    className="text-red-500 hover:text-red-700 self-end"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <Button
                variant="outline"
                onClick={() => addActivity(dayIndex)}
                className="mt-2 border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Activity
              </Button>
            </div>
          ))}

          <div className="mt-8 flex gap-4">
            <Button onClick={addDay} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Day
            </Button>
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
              Save Itinerary
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItinerary;
