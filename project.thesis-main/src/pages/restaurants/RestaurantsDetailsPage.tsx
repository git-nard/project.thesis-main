import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Star, Clock, Wallet, CheckCircle } from "lucide-react";

const RestaurantsDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location || {};

  const {
    name,
    image,
    description,
    address,
    cuisine,
    priceRange,
    rating,
    openingHours,
    features,
  } = state || {};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      

      {/* HERO IMAGE */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1555992336-cbfdb0f3cf0c?auto=format&fit=crop&w=1740&q=80"
          }
          alt={name || "Restaurant"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
            {name || "Restaurant Details"}
          </h1>
          {address && (
            <p className="flex items-center text-gray-200 text-lg gap-2">
              <MapPin className="h-5 w-5 text-red-400" /> {address}
            </p>
          )}
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="container mx-auto px-4 md:px-8 py-10 flex-1">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8 transition-all">
          {/* Title + Price + Rating */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {name || "Restaurant Name"}
              </h2>
              {cuisine && (
                <p className="text-gray-500 text-sm mt-1">
                  🍽️ {cuisine} Cuisine
                </p>
              )}
              {priceRange && (
                <p className="flex items-center text-gray-600 mt-2 gap-2">
                  <Wallet className="h-4 w-4 text-emerald-500" /> {priceRange}
                </p>
              )}
            </div>
            {rating && (
              <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full shadow-sm">
                <Star className="text-yellow-500 h-5 w-5 mr-1" />
                <span className="text-lg font-semibold text-gray-800">
                  {rating.toFixed(1)} / 5
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          )}

          {/* Opening Hours */}
          {openingHours && (
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Open Hours: {openingHours}</span>
            </div>
          )}

          {/* Features */}
          {features && features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Features
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {features.map((f: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 hover:scale-[1.02] transition-all rounded-lg p-3 shadow-sm"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View Menu Button */}
          <div className="flex justify-end mt-8">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all transform hover:scale-[1.03]">
              View Menu
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RestaurantsDetailsPage;
