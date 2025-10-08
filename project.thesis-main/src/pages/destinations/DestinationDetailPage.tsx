import { useLocation, useParams } from "react-router-dom";


function DestinationDetailPage() {
    const { id } = useParams();
    const location = useLocation(); // Access passed state
    const spot = location.state; // The data you passed from navigate()

    // Optional fallback (if someone reloads and state is lost)
    if (!spot) {
        return <p>No destination data found for ID {id}.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
        <img
            src={spot.image}
            alt={spot.name}
            className="w-full rounded-2xl shadow mb-6 object-cover"
        />
        <h1 className="text-3xl font-bold mb-2">{spot.name}</h1>
        <p className="text-gray-500 mb-4">{spot.location}</p>
        <p className="text-gray-800 mb-6">{spot.description}</p>
        <div className="text-sm text-gray-600">
            <p>Category: {spot.category}</p>
            <p>Opening Hours: {spot.openingHours}</p>
        </div>
        </div>
    );
}

export default DestinationDetailPage;