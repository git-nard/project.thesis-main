// components/tourism-activities/TourismActivitiesList.tsx
import React from "react";
import TourismActivitiesCard from "./TourismActivitiesCard";

/**
 * Full activities array - IDs are unique strings used for detail route.
 * Images are representative Unsplash images matched to the activity type.
 */
const activities = [
  // TIWI
  {
    id: "tiwi-pottery",
    name: "Pottery Making and Shopping",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
    description: "Experience Tiwi’s traditional pottery-making culture and bring home handcrafted clay souvenirs.",
    municipality: "Tiwi, Albay",
    category: "Cultural Activity"
  },
  {
    id: "tiwi-halo",
    name: "DJC Halo-Halo Food Stop",
    image: "https://images.unsplash.com/photo-1565958011705-44e211b254fa?auto=format&fit=crop&w=1400&q=80",
    description: "Taste the popular DJC Halo-Halo, a local dessert favorite.",
    municipality: "Tiwi, Albay",
    category: "Food & Dining"
  },
  {
    id: "tiwi-joroan-church",
    name: "Pilgrimage at Joroan Church",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1400&q=80",
    description: "Visit Joroan Church and join local pilgrimage traditions.",
    municipality: "Tiwi, Albay",
    category: "Religious Site"
  },

  // MALINAO
  {
    id: "malinao-vera",
    name: "Vera Falls Swimming",
    image: "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=1400&q=80",
    description: "Relax with a refreshing swim at Vera Falls.",
    municipality: "Malinao, Albay",
    category: "Waterfall"
  },
  {
    id: "malinao-tubing",
    name: "Water Tubing at Brgy. Soa",
    image: "https://images.unsplash.com/photo-1618897996922-22d38b33b9d9?auto=format&fit=crop&w=1400&q=80",
    description: "Thrilling water tubing for adventure seekers.",
    municipality: "Malinao, Albay",
    category: "Adventure"
  },

  // TABACO
  {
    id: "tabaco-mayon-skyline",
    name: "Mayon Skyline Trek",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    description: "Trek to the Mayon Skyline viewpoint for panoramic volcano views.",
    municipality: "Tabaco, Albay",
    category: "Viewpoint"
  },
  {
    id: "tabaco-pandayan",
    name: "Pandayan / Cutleries Tour (Brgy. Cobo)",
    image: "https://images.unsplash.com/photo-1627226018476-8c417cf0de49?auto=format&fit=crop&w=1400&q=80",
    description: "See local metalwork and handcrafted cutlery.",
    municipality: "Tabaco, Albay",
    category: "Crafts"
  },

  // MALILIPOT
  {
    id: "malilipot-busay",
    name: "Busay Falls",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80",
    description: "A beautiful multi-tiered waterfall with tropical surroundings.",
    municipality: "Malilipot, Albay",
    category: "Waterfall"
  },

  // BACACAY
  {
    id: "bacacay-cagraray",
    name: "Cagraray Eco Park & Misibis Bay",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    description: "Eco-park attractions, viewdecks, and luxury resort experiences.",
    municipality: "Bacacay, Albay",
    category: "Resort / Park"
  },
  {
    id: "bacacay-islandhop",
    name: "Island Hopping & Black Sand Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    description: "Boat tours to nearby islands and black sand beaches.",
    municipality: "Bacacay, Albay",
    category: "Island / Beach"
  },

  // STO. DOMINGO
  {
    id: "stodom-mirisbiris",
    name: "Mirisbiris Farm & Nature Center",
    image: "https://images.unsplash.com/photo-1473886809804-1f7e3c6f33c6?auto=format&fit=crop&w=1400&q=80",
    description: "Farm tourism, gardens, and hands-on agritourism experiences.",
    municipality: "Sto. Domingo, Albay",
    category: "AgriTourism"
  },

  // LEGAZPI CITY
  {
    id: "legazpi-mayon-atv",
    name: "Mayon ATV Adventure",
    image: "https://images.unsplash.com/photo-1611682582438-bb7066a04e12?auto=format&fit=crop&w=1400&q=80",
    description: "Ride ATVs across volcanic trails for a thrilling experience.",
    municipality: "Legazpi City, Albay",
    category: "Adventure"
  },
  {
    id: "legazpi-zipline",
    name: "Zipline at Ligñon Hill",
    image: "https://images.unsplash.com/photo-1585302489859-9a2e2c5e6f39?auto=format&fit=crop&w=1400&q=80",
    description: "Fly across the sky and enjoy Mayon views.",
    municipality: "Legazpi City, Albay",
    category: "Adventure / Viewpoint"
  },
  {
    id: "legazpi-boulevard",
    name: "Sunset Walk at Legazpi Boulevard",
    image: "https://images.unsplash.com/photo-1516900557540-ebb7d13cc5d3?auto=format&fit=crop&w=1400&q=80",
    description: "Relaxing seaside strolls and scenic sunsets.",
    municipality: "Legazpi City, Albay",
    category: "Leisure"
  },

  // MANITO
  {
    id: "manito-kayak",
    name: "Kayaking at Manito Mangrove Park",
    image: "https://images.unsplash.com/photo-1508614999368-9260051298b5?auto=format&fit=crop&w=1400&q=80",
    description: "Paddle through mangrove channels and watch coastal wildlife.",
    municipality: "Manito, Albay",
    category: "Nature"
  },

  // RAPU-RAPU
  {
    id: "rapuru-islands",
    name: "Island Hopping at Guinanayan & others",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80",
    description: "Snorkeling and beach days at pristine islands.",
    municipality: "Rapu-Rapu, Albay",
    category: "Island / Beach"
  },

  // CAMALIG
  {
    id: "camalig-sumlang-rafting",
    name: "Sumlang Lake Rafting",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1400&q=80",
    description: "Bamboo rafts with a picturesque view of Mayon Volcano.",
    municipality: "Camalig, Albay",
    category: "Leisure / Nature"
  },
  {
    id: "camalig-quitinday",
    name: "Quitinday Green Hills Trekking",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    description: "Rolling green hills great for hikes and photos.",
    municipality: "Camalig, Albay",
    category: "Hiking"
  },
  {
    id: "camalig-cave",
    name: "Calabidongan Cave Exploration",
    image: "https://images.unsplash.com/photo-1604079628046-9431d8cb7e5a?auto=format&fit=crop&w=1400&q=80",
    description: "Caving adventures and underground streams.",
    municipality: "Camalig, Albay",
    category: "Adventure"
  },

  // DARAGA
  {
    id: "daraga-cagsawa",
    name: "Cagsawa & Budiao Ruins Heritage Tour",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description: "Visit iconic ruins and heritage temples.",
    municipality: "Daraga, Albay",
    category: "Heritage"
  },

  // JOVELLAR
  {
    id: "jovellar-underground",
    name: "Jovellar Underground River (bamboo rafting)",
    image: "https://images.unsplash.com/photo-1614280977882-474d3dfc1a4a?auto=format&fit=crop&w=1400&q=80",
    description: "Bamboo raft rides through an underground river system.",
    municipality: "Jovellar, Albay",
    category: "Underground River / Adventure"
  },

  // GUINOBATAN
  {
    id: "guinobatan-simeonola",
    name: "Simeon Ola Museum & Heritage Tour",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=80",
    description: "Museum visits and local heritage exploration.",
    municipality: "Guinobatan, Albay",
    category: "Heritage"
  },

  // LIGAO
  {
    id: "ligao-masaraga",
    name: "Trek Mount Masaraga & Hobbit Hill",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    description: "Challenging treks and panoramic vistas.",
    municipality: "Ligao, Albay",
    category: "Hiking"
  },

  // OAS
  {
    id: "oas-diving",
    name: "Diving at Trinity Islands",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    description: "Diving and snorkeling at nearby islands.",
    municipality: "Oas, Albay",
    category: "Water Activities"
  },

  // PIODURAN
  {
    id: "pioduran-buhawi",
    name: "Trek Buhawi Hills & Panganiran Ranges",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    description: "Hill treks with scenic overlooks.",
    municipality: "Pioduran, Albay",
    category: "Hiking"
  },

  // POLANGUI
  {
    id: "polangui-sinarapan",
    name: "Harvest Sinarapan at Danao Lake",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1400&q=80",
    description: "Experience harvesting the world's smallest fish.",
    municipality: "Polangui, Albay",
    category: "Nature"
  },

  // LIBON
  {
    id: "libon-grape",
    name: "Grape Picking at Villa Miranda",
    image: "https://images.unsplash.com/photo-1620662730034-b5a206dba1f1?auto=format&fit=crop&w=1400&q=80",
    description: "Seasonal grape-picking at local vineyards.",
    municipality: "Libon, Albay",
    category: "AgriTourism"
  },
  {
    id: "libon-bantigue",
    name: "Bantigue Cove Island Getaway",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    description: "Relax on nearby islands and enjoy coastal views.",
    municipality: "Libon, Albay",
    category: "Island / Beach"
  },
];

const TourismActivitiesList = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Tourism Activities</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <TourismActivitiesCard key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default TourismActivitiesList;
