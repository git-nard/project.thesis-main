    import React from "react";
    import { useLocation, useNavigate } from "react-router-dom";
    import { ArrowLeft, MapPin } from "lucide-react";
    import { Button } from "../ui/button";
    import Footer from "../layout/Footer"; // ✅ adjust path if needed

    const TourismActivitiesDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const activity = location.state;

    if (!activity) {
        return (
        <div className="p-8 text-center text-gray-600">
            No activity details found.
        </div>
        );
    }

    const {
        id,
        name,
        image,
        description,
        municipality,
        category = "Activity",
    } = activity;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Back Button */}
        <div className="px-6 pt-6">
            <Button
            variant="ghost"
            className="flex items-center text-gray-700 hover:text-black"
            onClick={() => navigate(-1)}
            >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
        </div>

        {/* Main Content */}
        <main className="flex-grow w-full max-w-6xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">{name}</h1>
            <p className="text-lg text-gray-600 mb-6">{category}</p>

            {/* Big Image */}
            <div className="w-full h-[480px] rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />
            </div>

            {/* Description & Details */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
            <p>{description || "No description available for this activity."}</p>
            <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                <span>{municipality}</span>
            </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
            <Button
                onClick={() =>
                window.open(
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    name + " " + municipality
                    )}`,
                    "_blank"
                )
                }
                className="bg-blue-600 hover:bg-blue-700"
            >
                Get Directions
            </Button>
            </div>
        </main>

        {/* Footer */}
        <Footer />
        </div>
    );
    };

    export default TourismActivitiesDetailsPage;
