import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const HotelsDetailsPage = () => {
  const { id } = useParams(); // if you need the ID from URL
  const location = useLocation();
  const { state } = location || {};

  // destructure safely to avoid undefined errors
  const {
    name,
    image,
    description,
    location: hotelLocation,
    priceRange,
    rating,
    amenities,
  } = state || {};

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{name || "Hotel Details"}</h1>

        {image && (
          <img
            src={image}
            alt={name}
            className="w-full max-h-[400px] object-cover rounded-lg shadow-md mb-6"
          />
        )}

        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-600">
          📍 <strong>Location:</strong> {hotelLocation}
        </p>
        {priceRange && <p className="text-gray-600">💰 {priceRange}</p>}
        {rating && <p className="text-gray-600">⭐ {rating}</p>}

        {amenities && amenities.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Amenities</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {amenities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HotelsDetailsPage;
