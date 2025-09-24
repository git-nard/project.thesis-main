import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CalendarDay {
  date: number;
  month: number;
  year: number;
  events: number;
  isCurrentMonth: boolean;
  isToday: boolean;
}

const ViewCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "year">("month");

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Month names
  const monthNames = [
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

  // Day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Sample event data (would come from API in real app)
  const eventData = {
    "2023-5-1": 3, // May 1, 2023 has 3 events
    "2023-5-15": 2, // May 15, 2023 has 2 events
    "2023-5-22": 1, // May 22, 2023 has 1 event
    "2023-6-10": 2, // June 10, 2023 has 2 events
    "2023-7-4": 1, // July 4, 2023 has 1 event
    "2023-8-8": 3, // August 8, 2023 has 3 events
    "2023-12-25": 2, // December 25, 2023 has 2 events
  };

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week for first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days for current month view
  const generateCalendarDays = (): CalendarDay[] => {
    const days: CalendarDay[] = [];
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

    // Add days from previous month to fill the first week
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);

    for (let i = 0; i < firstDayOfMonth; i++) {
      const day = daysInPrevMonth - firstDayOfMonth + i + 1;
      days.push({
        date: day,
        month: prevMonth,
        year: prevMonthYear,
        events: eventData[`${prevMonthYear}-${prevMonth + 1}-${day}`] || 0,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Add days of current month
    const today = new Date();
    const isCurrentMonthAndYear =
      today.getMonth() === currentMonth && today.getFullYear() === currentYear;

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        month: currentMonth,
        year: currentYear,
        events: eventData[`${currentYear}-${currentMonth + 1}-${i}`] || 0,
        isCurrentMonth: true,
        isToday: isCurrentMonthAndYear && today.getDate() === i,
      });
    }

    // Add days from next month to complete the last week
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const remainingDays = 42 - days.length; // 6 rows of 7 days

    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        month: nextMonth,
        year: nextMonthYear,
        events: eventData[`${nextMonthYear}-${nextMonth + 1}-${i}`] || 0,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return days;
  };

  // Navigate to previous month
  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Navigate to today
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Generate year view
  const generateYearView = () => {
    return monthNames.map((month, index) => {
      const hasEvents = Object.keys(eventData).some((key) => {
        const [year, monthNum] = key.split("-").map(Number);
        return year === currentYear && monthNum === index + 1;
      });

      return (
        <div
          key={month}
          className={`p-4 border rounded-lg text-center cursor-pointer hover:bg-blue-50 transition-colors ${index === currentMonth ? "bg-blue-100 border-blue-300" : "bg-white"}`}
          onClick={() => {
            setCurrentDate(new Date(currentYear, index, 1));
            setView("month");
          }}
        >
          <h3 className="font-medium">{month}</h3>
          {hasEvents && (
            <div className="mt-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Events
              </Badge>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/calendar">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Events Calendar
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Calendar View</h1>
            <p className="text-gray-600 max-w-3xl">
              Browse through the calendar to see all events and festivals in
              Albay throughout the year.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={goToToday}>
              Today
            </Button>
            <Button
              variant="outline"
              onClick={() => setView(view === "month" ? "year" : "month")}
            >
              {view === "month" ? "Year View" : "Month View"}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
          <Button variant="ghost" onClick={goToPrevMonth} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            {view === "month"
              ? `${monthNames[currentMonth]} ${currentYear}`
              : currentYear}
          </h2>

          <Button variant="ghost" onClick={goToNextMonth} className="p-2">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Year View */}
        {view === "year" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {generateYearView()}
          </div>
        )}

        {/* Month View */}
        {view === "month" && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
            {/* Day headers */}
            <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="p-2 text-center font-medium text-gray-700"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 auto-rows-fr">
              {generateCalendarDays().map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[100px] p-2 border-b border-r border-gray-200 ${!day.isCurrentMonth ? "bg-gray-50 text-gray-400" : ""} ${day.isToday ? "bg-blue-50" : ""}`}
                >
                  <div className="flex justify-between items-start">
                    <span
                      className={`inline-block w-7 h-7 rounded-full text-center leading-7 ${day.isToday ? "bg-blue-600 text-white" : ""}`}
                    >
                      {day.date}
                    </span>

                    {day.events > 0 && (
                      <Link
                        to={`/calendar?year=${day.year}&month=${day.month + 1}&day=${day.date}`}
                      >
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {day.events} {day.events === 1 ? "event" : "events"}
                        </Badge>
                      </Link>
                    )}
                  </div>

                  {/* Event indicators */}
                  {day.events > 0 && (
                    <div className="mt-2">
                      {Array.from({ length: Math.min(day.events, 2) }).map(
                        (_, i) => (
                          <div
                            key={i}
                            className="text-xs truncate p-1 mb-1 rounded bg-blue-100 text-blue-800"
                          >
                            {i === 0 ? "Festival" : "Event"}
                          </div>
                        ),
                      )}
                      {day.events > 2 && (
                        <div className="text-xs text-gray-500 pl-1">
                          +{day.events - 2} more
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <h3 className="font-medium mb-2">Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              <span>Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-100"></div>
              <span>Event</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-50 border border-gray-200"></div>
              <span>Other month</span>
            </div>
          </div>
        </div>

        {/* Download Calendar Section */}
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Download Events Calendar</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Want to keep track of all the exciting events in Albay? Download our
            calendar to your device and never miss an event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Download iCal (.ics)
            </Button>
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

export default ViewCalendarPage;
