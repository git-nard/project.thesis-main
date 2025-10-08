import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight, Mountain, Waves, Camera, Utensils } from 'lucide-react';

function UpcomingItinerary() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const trips = [
    {
      id: 1,
      title: "Waterfalls & Nature Adventure",
      date: "Nov 15 - Nov 17, 2025",
      days: 3,
      travelers: 4,
      coverImage: "https://source.unsplash.com/1000x700/?waterfall,nature",
      destinations: [
        {
          name: "Busay Falls - Malilipot",
          location: "Barangay 1, Malilipot, Albay",
          description: "Seven-tiered falls descending from 250 meters height",
          time: "8:00 AM - 12:00 PM",
          category: "Falls"
        },
        {
          name: "Vera Falls",
          location: "Soa / Bulang, Malinao, Albay",
          description: "Clear cold water cascading from mountain rocks",
          time: "2:00 PM - 5:00 PM",
          category: "Falls"
        },
        {
          name: "Sumlang Lake",
          location: "Sumlang, Camalig, Albay",
          description: "9.21 hectares lake with scenic mountain views",
          time: "6:00 PM - 7:00 PM",
          category: "Lakes and Pond"
        }
      ]
    },
    {
      id: 2,
      title: "Coastal & Island Exploration",
      date: "Dec 10 - Dec 12, 2025",
      days: 3,
      travelers: 6,
      coverImage: "https://source.unsplash.com/1000x700/?beach,island",
      destinations: [
        {
          name: "Pinamuntugan Island",
          location: "Langaton, Bacacay, Albay",
          description: "White sand island with pristine beauty",
          time: "7:00 AM - 12:00 PM",
          category: "Unique Natural Landscape"
        },
        {
          name: "Cagbulawan Beach",
          location: "Namanday, Bacacay, Albay",
          description: "Golden colored sand beach",
          time: "1:00 PM - 4:00 PM",
          category: "Unique Natural Landscape"
        },
        {
          name: "San Miguel Fish Sanctuary",
          location: "Sagurong, Tabaco City, Albay",
          description: "2nd best-managed coral reef in the Philippines",
          time: "5:00 PM - 6:00 PM",
          category: "Dive Sites"
        }
      ]
    },
    {
      id: 3,
      title: "Mountain & Highland Trek",
      date: "Jan 5 - Jan 7, 2026",
      days: 3,
      travelers: 5,
      coverImage: "https://source.unsplash.com/1000x700/?mountain,hiking",
      destinations: [
        {
          name: "Quitinday Green Hills",
          location: "Barangay Quitinday, Camalig, Albay",
          description: "Cone-shaped hills similar to Bohol's Chocolate Hills",
          time: "6:00 AM - 11:00 AM",
          category: "Mountains / Hills"
        },
        {
          name: "Tigbao Highlands",
          location: "Oma-Oma, Ligao City, Albay",
          description: "Local version of Scotland with lush meadows",
          time: "1:00 PM - 4:00 PM",
          category: "Mountains / Hills"
        },
        {
          name: "Ligñon Hill",
          location: "Bogtong, Legazpi City, Albay",
          description: "360-degree view deck of the city",
          time: "5:00 PM - 7:00 PM",
          category: "Mountains / Hills"
        }
      ]
    },
    {
      id: 4,
      title: "Cave Exploration Journey",
      date: "Feb 14 - Feb 15, 2026",
      days: 2,
      travelers: 4,
      coverImage: "https://source.unsplash.com/1000x700/?cave,exploration",
      destinations: [
        {
          name: "Hoyop-hoyopan Cave",
          location: "Barangay Cotmon, Camalig, Albay",
          description: "4,000 year old artifacts and pottery found here",
          time: "8:00 AM - 11:00 AM",
          category: "Caves"
        },
        {
          name: "Jovellar Underground River",
          location: "Quitinday, Jovellar, Albay",
          description: "Underground river with stalactites and stalagmites",
          time: "1:00 PM - 4:00 PM",
          category: "Caves"
        },
        {
          name: "Balinsasayawan Cave",
          location: "San Ramon, Libon, Albay",
          description: "Cave with view deck overlooking lakes",
          time: "5:00 PM - 6:00 PM",
          category: "Caves"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Upcoming Albay Adventures</h1>
              <p className="text-gray-300">Explore the natural wonders of Albay Province</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{trips.length}</div>
                <div className="text-sm text-gray-400">Adventures</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{trips.reduce((sum, trip) => sum + trip.days, 0)}</div>
                <div className="text-sm text-gray-400">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{trips.reduce((sum, trip) => sum + trip.destinations.length, 0)}</div>
                <div className="text-sm text-gray-400">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trips List */}
          <div className="lg:col-span-2 space-y-6">
            {trips.map((trip) => (
              <div 
                key={trip.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedTrip?.id === trip.id ? 'ring-4 ring-gray-900' : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedTrip(trip)}
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <img 
                      src={trip.coverImage} 
                      alt={trip.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-900 px-3 py-1 rounded-full text-sm font-semibold text-white">
                      {trip.days} Day{trip.days > 1 ? 's' : ''}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-3 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{trip.title}</h2>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>{trip.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-teal-600" />
                        <span>{trip.travelers} travelers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-600" />
                        <span>{trip.destinations.length} destinations</span>
                      </div>
                    </div>

                    {/* Destination Preview */}
                    <div className="space-y-2">
                      {trip.destinations.map((dest, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm">
                          <div className="bg-gray-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-white">{idx + 1}</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{dest.name}</div>
                            <div className="text-gray-500 text-xs">{dest.location}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 w-full bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                      View Full Itinerary
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - Selected Trip Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedTrip ? (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Schedule</h3>
                  <div className="space-y-4">
                    {selectedTrip.destinations.map((dest, idx) => (
                      <div key={idx} className="border-l-4 border-gray-900 pl-4 py-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-semibold text-gray-900">{dest.time}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">{dest.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{dest.description}</p>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{dest.location}</span>
                        </div>
                        <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {dest.category}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="w-full border-2 border-gray-900 text-gray-900 px-4 py-2 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                      Edit Schedule
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Select a trip to view detailed schedule</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-white text-center">
          <Mountain className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h3 className="text-3xl font-bold mb-3">Discover More of Albay</h3>
          <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
            With 178 amazing destinations across Albay Province, there's always a new adventure waiting for you
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg">
            + Plan New Adventure
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingItinerary;