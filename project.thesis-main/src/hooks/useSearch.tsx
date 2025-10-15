import { destinations } from "@/components/destinations/DestinationsLists";
import { hotels } from "@/components/accommodations/HotelsList";
import AttractionsList from "@/components/attractions/AttractionsList";
import RestaurantsList from "@/components/dining/RestaurantsList";
import { useMemo, useState } from "react";
import { events } from "@/components/events/eventsData";

export const useSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState({
        destinations: [],
        attractions: [],
        restaurants: [],
        hotels: [],
        events: [],
        experiences: [],
    })

    const dataSources = {
        destinations,
        hotels,
        // attractions,
        // restaurants,
        events,
        experiences: [], 
    }

    const filteredResults = useMemo(() => {
        if (!searchQuery.trim()) {
            return Object.keys(dataSources).reduce((acc, key) => {
                acc[key] = [];
                return acc;
            }, {}); 
        }

        const lowerQuery = searchQuery.toLowerCase();

        // Filter each category dynamically
        const newResults = Object.entries(dataSources).reduce((acc, [key, items]) => {
        acc[key] = items.filter((item) =>
            item.name?.toLowerCase().includes(lowerQuery)
        );
        return acc;
        }, {});

        return newResults;
    }, [searchQuery])

    return {
        searchQuery,
        setSearchQuery,
        results: filteredResults,
    };
}