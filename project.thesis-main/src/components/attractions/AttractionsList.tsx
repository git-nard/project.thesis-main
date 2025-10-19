import React from "react";
import AttractionCard from "./AttractionCard";

interface Attraction {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  category: string;
  openingHours: string;
}

interface AttractionsListProps {
  attractions?: Attraction[];
  title?: string;
  description?: string;
}

export const AttractionsList = ({
  attractions = [
    {
      id: "1",
      name: "Mayon Volcano",
      image:
        "https://albay.gov.ph/wp-content/uploads/2020/02/joenabells_20200226_120826_0.jpg",
      description:
        'Known as the "Perfect Cone" for its symmetrical shape, Mayon Volcano is an active stratovolcano and a popular tourist destination in Albay.',
      location: "Albay Province, Philippines",
      category: "Natural Wonder",
      openingHours: "Open 24 hours",
    },
    {
      id: "2",
      name: "Cagsawa Ruins",
      image:
        "https://www.southeastasianarchaeology.com/wp-content/uploads/2022/05/Cagsawa-Ruins-The-Philippines.jpg",
      description:
        "Historic ruins of a 16th-century Franciscan church destroyed by the 1814 eruption of Mayon Volcano. The bell tower remains standing and is an iconic symbol of Albay.",
      location: "Daraga, Albay, Philippines",
      category: "Historical Site",
      openingHours: "6:00 AM - 6:00 PM",
    },
    {
      id: "3",
      name: "Sumlang Lake",
      image:
        "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Sumlang-9.jpg",
      description:
        "A serene lake offering stunning views of Mayon Volcano and traditional bamboo rafts for tourists to enjoy the scenery.",
      location: "Camalig, Albay, Philippines",
      category: "Natural Wonder",
      openingHours: "7:00 AM - 5:00 PM",
    },
    {
      id: "4",
      name: "Lignon Hill Nature Park",
      image:
        "https://gttp.images.tshiftcdn.com/375966/x/0/lignon-hill-nature-park.jpg",
      description:
        "A popular viewpoint offering panoramic views of Legazpi City, Mayon Volcano, and Albay Gulf. Features ziplines and hiking trails.",
      location: "Legazpi City, Albay, Philippines",
      category: "Nature Park",
      openingHours: "5:00 AM - 9:00 PM",
    },
    {
      id: "5",
      name: "Hoyop-Hoyopan Cave",
      image:
        "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Hoyop-2.jpg.crdownload.jpg",
      description:
        "A natural cave with interesting rock formations and a cool breeze flowing through it, hence its name which means 'blowing wind'.",
      location: "Camalig, Albay, Philippines",
      category: "Natural Wonder",
      openingHours: "8:00 AM - 5:00 PM",
    },
    {
      id: "6",
      name: "Kawa-Kawa Hill",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2b/59/d2/img-20180326-100821-largejpg.jpg?w=1200&h=-1&s=1",
      description:
        "A hill shaped like an inverted bowl featuring life-sized Stations of the Cross and offering panoramic views of Mayon Volcano.",
      location: "Ligao City, Albay, Philippines",
      category: "Religious Site",
      openingHours: "6:00 AM - 6:00 PM",
    },
  ],
  title = "Tourist Attractions in Albay",
  description = "Discover the natural wonders, historical sites, and cultural landmarks that make Albay a must-visit destination in the Philippines.",
}: AttractionsListProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {attractions.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            id={attraction.id}
            name={attraction.name}
            image={attraction.image}
            description={attraction.description}
            location={attraction.location}
            openingHours={attraction.openingHours}
          />
        ))}
      </div>
    </div>
  );
};

export default AttractionsList;
