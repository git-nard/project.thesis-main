export const createItinerary = async (req, res) => {
    const { user, destinations, startDate, endDate } = req.body;

    try {
        const missing_fields = ['user', 'destinations', 'startDate', 'endDate'].filter(field => !req.body[field]);
        if (missing_fields.length > 0) {
            return res.status(400).json({ message: `Missing required fields: ${missing_fields.join(', ')}` });
        }
        
        // If all fields are present, proceed with creating the itinerary
        const newItinerary = {
            user,
            destinations,
            startDate,
            endDate
        };

        await saveItineraryToDatabase(newItinerary);

        res.status(201).json({ message: "Itinerary created successfully", itinerary: newItinerary });
    } catch (error) {
        console.error("Error creating itinerary:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}