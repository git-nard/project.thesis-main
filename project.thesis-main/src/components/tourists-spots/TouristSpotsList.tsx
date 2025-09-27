import React from "react";
import TouristSpotCard from "./TouristSpotsCard";

const spots = [
  {
    id: "1",
    name: "Mayon Volcano",
    image:
      "https://albay.gov.ph/wp-content/uploads/2020/02/joenabells_20200226_120826_0.jpg",
    description:
      'Known as the "Perfect Cone" for its symmetrical shape, Mayon Volcano is the most iconic landmark in Albay.',
    location: "Tabaco City, Albay, Philippines",
    category: "Natural Wonder",
    openingHours: "Open 24 hours",
  },
  {
    id: "2",
    name: "Cagsawa Ruins",
    image:
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80",
    description:
      "Historic ruins of a 16th-century church destroyed by Mayon's eruption in 1814.",
    location: "Daraga, Albay, Philippines",
    category: "Historical Site",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "3",
    name: "Danao Lake",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1000&q=80",
    description:
      "A peaceful crater lake surrounded by lush greenery in Polangui, Albay.",
    location: "Brgy. Danao, Polangui, Albay",
    category: "Natural Attraction",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "4",
    name: "Kawa Kawa Hills",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    description:
      "A hill shaped like a cauldron, known for its pilgrimage site and scenic views.",
    location: "Ligao City, Albay",
    category: "Natural Attraction",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "5",
    name: "Joroan Church",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
    description:
      "A historic church in Tiwi, Albay, home to the revered image of Our Lady of Salvation.",
    location: "Brgy. Joroan, Tiwi, Albay",
    category: "Religious Site",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "6",
    name: "Mayon Skyline",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    description:
      "A viewpoint in Tabaco City offering panoramic views of Mayon Volcano.",
    location: "Brgy. Buang, Tabaco City, Albay",
    category: "Viewpoint",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "7",
    name: "Misibis Beach Resort & Casino",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "A luxury beach resort with white sands, water activities, and world-class amenities.",
    location: "Bacacay, Albay",
    category: "Resort",
    openingHours: "Open 24 hours",
  },
  {
    id: "8",
    name: "Vera Falls",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "A beautiful waterfall at the foot of Mt. Malinao surrounded by lush forests.",
    location: "Brgy. Bulang, Malinao, Albay",
    category: "Waterfall",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "9",
    name: "Blacksand Beaches",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Unique volcanic black sand beaches formed from Mayon Volcano’s eruptions.",
    location: "Bacacay, Albay",
    category: "Beach",
    openingHours: "Open 24 hours",
  },
  {
    id: "10",
    name: "Cagraray Eco Park",
    image:
      "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/466607200_122227355606193087_3029495471951705228_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGPIL4OEfa4Uu0laQHVqXKMCRd0oOrzdxYJF3Sg6vN3FlEaa10clozK0e9_XDc55iv_bIQBTa1tNwQZnIYvJCbF&_nc_ohc=E1wLNbhmVS0Q7kNvwGtBufD&_nc_oc=AdmkTjYYrHMR5A7YtGAZhW-3e59eeQm-JtL-EdDO2MChT7Sgi70kXdblFAADyElccX4&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=lyEL_v12HDlFrzcJoHVo_g&oh=00_AfbNJrbx29Jgp31_OFP31fGqGmeFmfWFMw4u376jhVKtnA&oe=68DB3535",
    description:
      "A nature park offering eco-friendly adventures and scenic landscapes.",
    location: "Cagraray, Bacacay, Albay",
    category: "Eco Park",
    openingHours: "6:00 AM - 6:00 PM",
  },
];

const TouristSpotsList = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Tourist Spots in Albay
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((spot) => (
          <TouristSpotCard key={spot.id} {...spot} />
        ))}
      </div>
    </div>
  );
};

export default TouristSpotsList;
