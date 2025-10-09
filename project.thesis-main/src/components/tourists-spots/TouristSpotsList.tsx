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
      "https://www.southeastasianarchaeology.com/wp-content/uploads/2022/05/Cagsawa-Ruins-The-Philippines.jpg",
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
      "https://polangui.gov.ph/wp-content/uploads/2021/04/Danao_Lake_Polangui_Albay_a.jpg",
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
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi44hDtNsjshG6TI-LkhBOxZF7x_UzeHVu5N8vfafkXLpftgJbDrHoScYiQmhoiwuqfAc0GgWsOT-6ea8_ioB9gvCTNRjJsNDmcUXM8QU9w9tkW6EPUbUisCNMROprnAVL3nAAKbX4HgIg/s1600/DSC_2017.JPG",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1I6jWO9EgXNMUnrToGet44W3E-_76rd8K4Q&s",
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
      "https://albay.gov.ph/wp-content/uploads/2020/02/downnabells_20200224_111853_0-1024x768.jpg",
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
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/27/63/f0/misibis-bay-aerial-shot.jpg?w=900&h=-1&s=1",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjIYpoqpyGPmE7niFfgEPoZvFosh9ghbm5w&s",
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
      "https://i.pinimg.com/736x/0c/f3/3a/0cf33a7bf30a13619e5e5e43b8091efd.jpg",
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
  {
    id: "11",
    name: "Embarcadero de Legazpi",
    image:
      "https://www.vigattintourism.com/assets/article_main_photos/optimize/1346402165628mK6Hy.jpg",
    description:
      "A premier waterfront commercial and entertainment complex offering shopping, dining, and stunning sea views.",
    location: "Legazpi City, Albay",
    category: "Lifestyle & Shopping",
    openingHours: "10:00 AM - 9:00 PM",
  },
  {
    id: "12",
    name: "Kapuntukan Hill",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mount_Mayon%2C_Kapuntukan_Hill_bay_view_Puro_%28Legazpi%2C_Albay%3B_04-22-2023%29.jpg/1280px-Mount_Mayon%2C_Kapuntukan_Hill_bay_view_Puro_%28Legazpi%2C_Albay%3B_04-22-2023%29.jpg",
    description:
      "Also known as Sleeping Lion Hill, it offers panoramic views of Legazpi Port and Mayon Volcano.",
    location: "Puro, Legazpi City, Albay",
    category: "Hill / Viewpoint",
    openingHours: "Open 24 hours",
  },
  {
    id: "13",
    name: "Japanese Tunnel",
    image:
      "https://img.truvvle.com/?src=aHR0cHM6Ly9pbWFnZXMuaGl2ZS5ibG9nL3AvRG9nTjdmRjNvSkRUdk1kb3ozTUdTM2R6bW9UbjQzakNuOFB2bmpoRmJIQldFTk5EQVQxWnF3RmZqVFR4U2dxdEd1UkVjYnFtb3g0dVZLQjltRDlLMzN1SlNZQ21TeXVSVzdTMmFvVTR1eXp1dTRvQUxIV0hybVVrNlQ4dVRYODlTd3FLQXBVa1RRTURZTWhtRHo2UGNVM1ZpRGNBcFZtcHpvQmQ4ZGV1VTdVZWZkclBiVTdwdkdCckZacUZYV0dYRm5idkhRbWFKbjNjNy8_Zm9ybWF0PW1hdGNoJm1vZGU9Zml0&width=1920",
    description:
      "A historic tunnel built during World War II, offering visitors a glimpse into Albay’s wartime history.",
    location: "Mt. Kitwinan, Camalig, Albay",
    category: "Historical Site",
    openingHours: "8:00 AM - 5:00 PM",
  },
  {
    id: "14",
    name: "Albay Park and Wildlife",
    image:
      "https://albay.gov.ph/wp-content/uploads/2020/02/83482656_112131743673516_509040236886491136_o-1024x683.jpg",
    description:
      "A family-friendly park with a small zoo, picnic areas, and scenic views of Mayon Volcano.",
    location: "Bogtong, Legazpi City, Albay",
    category: "Family Park",
    openingHours: "8:00 AM - 6:00 PM",
  },
  {
    id: "15",
    name: "Lignon Hill Nature Park",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SlaeVoAs1Df1V3_1v4ILUbFM8fEITxtl3w&s",
    description:
      "A popular spot for ziplining, hiking, and sightseeing with a 360° view of Legazpi and Mayon Volcano.",
    location: "Daraga, Albay",
    category: "Viewpoint / Adventure Park",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "16",
    name: "Legazpi Boulevard",
    image:
      "https://legazpi.gov.ph/wp-content/uploads/2023/04/Legazpi-Boulevard-2-scaled.jpg",
    description:
      "A scenic seaside boulevard perfect for jogging, cycling, and viewing the Mayon Volcano.",
    location: "Puro, Legazpi City, Albay",
    category: "Seaside Promenade",
    openingHours: "Open 24 hours",
  },
  {
    id: "17",
    name: "Hoyop-Hoyopan Cave",
    image:
      "https://primer.com.ph/travel/wp-content/uploads/sites/6/2017/05/h1-e1493968717772.jpg",
    description:
      "A limestone cave with natural formations and historical significance as a refuge during World War II.",
    location: "Brgy. Cotmon, Legazpi City, Albay",
    category: "Cave",
    openingHours: "8:00 AM - 5:00 PM",
  },
  {
    id: "18",
    name: "Calabidongan Cave",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRSfwld7hfGpDoFsWXIWRXpB0BTJUn2v4fQ&s",
    description:
      "An adventurous cave system in Camalig with stunning rock formations and underground streams.",
    location: "Brgy. Calabidongan, Camalig, Albay",
    category: "Cave / Adventure",
    openingHours: "8:00 AM - 5:00 PM",
  },
  {
    id: "19",
    name: "Mainit Hot Spring",
    image:
      "https://tourism.biliranisland.com/wp-content/uploads/2016/02/Mainit-Hot-Spring-6.jpg",
    description:
      "A natural hot spring resort offering therapeutic waters and relaxing mountain ambiance.",
    location: "Brgy. Pariaan, Camalig, Albay",
    category: "Hot Spring",
    openingHours: "7:00 AM - 7:00 PM",
  },
  {
    id: "20",
    name: "Quituinan Hill",
    image:
      "https://campsites.ph/uploads/images/campsite-104-quituinan-hills-464d1c10afa7b06fe0bd8c3ed6824e81.jpg",
    description:
      "A World War II historical site featuring bunkers, tunnels, and scenic views of Mayon Volcano.",
    location: "Camalig, Albay",
    category: "Historical Site",
    openingHours: "8:00 AM - 6:00 PM",
  },
  {
    id: "21",
    name: "Sumlang Lake",
    image:
      "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Sumlang-9.jpg",
    description:
      "A peaceful lake offering bamboo rafting with a perfect view of Mayon Volcano.",
    location: "Camalig, Albay",
    category: "Lake / Nature",
    openingHours: "7:00 AM - 6:00 PM",
  },
  {
    id: "22",
    name: "Quitinday Green Hills",
    image:
      "https://nojuanisanisland.com/wp-content/uploads/2015/06/dsc_2572.jpg",
    description:
      "Known as the ‘Chocolate Hills of Albay’, these rolling green hills offer scenic hiking trails and views of Mayon.",
    location: "Camalig, Albay",
    category: "Natural Attraction",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "23",
    name: "Busay Falls",
    image:
      "https://malilipot.wordpress.com/wp-content/uploads/2018/05/busayfalls3-e1526603709826.jpg?w=1086",
    description:
      "A majestic multi-tiered waterfall located in Malilipot, surrounded by tropical vegetation.",
    location: "Malilipot, Albay",
    category: "Waterfall",
    openingHours: "6:00 AM - 6:00 PM",
  },
  {
    id: "24",
    name: "Jovellar Underground River",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzdm_tByTCuK6K5cauBJsGL3tQXwA7lyBIg&s",
    description:
      "An underground river accessible by bamboo raft, featuring limestone formations and clear waters.",
    location: "Jovellar, Albay",
    category: "Underground River / Adventure",
    openingHours: "8:00 AM - 5:00 PM",
  },
  {
  id: "25",
  name: "Pototan Cave",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUi1Sljr0OgbEDkp88jA6pe_5zUIYW4gY02g&s",
  description:
    "A hidden gem in Rapu-Rapu, Pototan Cave features stunning stalactite and stalagmite formations and an underground stream that leads to a cool freshwater pool.",
  location: "Batan Island, Rapu-Rapu, Albay",
  category: "Cave / Natural Attraction",
  openingHours: "8:00 AM - 5:00 PM",
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
