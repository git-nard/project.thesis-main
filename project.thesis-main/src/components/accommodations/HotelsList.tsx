import React, { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import HotelCard from "./HotelCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FilterModal from "./FilterModal";

interface Hotel {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  priceRange: string;
}

interface HotelsListProps {
  hotels?: Hotel[];
  onHotelSelect?: (hotelId: string) => void;
}

export const hotels: Hotel[] = [
    {
    id: "1",
    name: "Mayon View Resort & Spa",
    image: "https://gttp.images.tshiftcdn.com/223373/x/0/legazpi-albay-travel-guide-mayon-volcano-hotels-itinerary-11.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883",
    description: "Luxury resort with stunning views of Mayon Volcano, featuring a spa, infinity pool, and fine dining restaurant.",
    location: "Legazpi City, Albay",
    priceRange: "₱5,000 - ₱12,000",
  },
  {
    id: "2",
    name: "Albay Boutique Hotel",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1470&q=80",
    description: "Albay Boutique Hotel is a stylish and cozy retreat located in the heart of Legazpi City. It offers elegantly designed rooms, modern amenities, and a relaxing ambiance perfect for both business and leisure travelers. Guests can enjoy convenient access to popular attractions, local dining spots, and breathtaking views of Mayon Volcano..",
    location: "Legazpi City, Albay",
    priceRange: "₱3,000 - ₱6,000",
  },
  {
    id: "3",
    name: "Daraga Homestay",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1470&q=80",
    description: "Authentic Filipino homestay experience with local hosts, home-cooked meals, and cultural immersion opportunities.",
    location: "Daraga, Albay",
    priceRange: "₱1,500 - ₱2,500",
  },
  {
    id: "4",
    name: "Cagsawa Ruins Inn",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Cagsawa Ruins Inn offers a charming and affordable stay just minutes away from the iconic Cagsawa Ruins. Guests can enjoy comfortable rooms, warm local hospitality, and stunning views of the Mayon Volcano. It’s the perfect spot for travelers seeking a peaceful retreat with easy access to Albay’s historical and natural attractions..",
    location: "Cagsawa, Albay",
    priceRange: "₱1,000 - ₱2,000",
  },
  {
    id: "5",
    name: "Tabaco Bay Resort",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/27/63/f0/misibis-bay-aerial-shot.jpg?w=1200&h=-1&s=1",
    description: "Beachfront resort in Tabaco City with water sports activities, seafood restaurant, and relaxing ocean views.",
    location: "Tabaco City, Albay",
    priceRange: "₱4,000 - ₱8,000",
  },
  {
    id: "6",
    name: "Tiwi Hot Springs Hotel",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Tiwi Hot Springs Hotel provides a relaxing escape surrounded by nature and the soothing warmth of natural hot springs. Guests can unwind in therapeutic pools, enjoy comfortable accommodations, and experience the tranquil beauty of Tiwi, Albay. It’s an ideal destination for wellness seekers and travelers looking to rejuvenate amidst scenic landscapes.",
    location: "Tiwi, Albay",
    priceRange: "₱3,500 - ₱7,000",
  },
  {
    id: "7",
    name: "Casa Cecilia Gamboa's Orchard",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3OF4rzye3CJu3h76DARtqDnd8h9E5IUTwA&s",
    description: "Casa Cecilia Gamboa’s Orchard is a peaceful countryside retreat surrounded by lush fruit trees and vibrant gardens. Guests can experience authentic Bicolano hospitality, fresh farm-to-table meals, and a serene escape from city life. It’s an ideal destination for nature lovers seeking relaxation and a taste of rural charm in Albay.",
    location: "Purok 1, San Jose, Malilipot, Albay",
    priceRange: "₱2,000 - ₱4,000",
  },
  {
    id: "8",
    name: "Misibis Resort and Hotel Management Inc.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZFEl7J4wYf3zzpnjoTL6og9LUtYUIWhh4w&s",
    description: "Misibis Resort and Hotel Management Inc. is a world-class luxury destination nestled on Cagraray Island in Albay. Known for its pristine beaches, water sports, and breathtaking views of the Pacific Ocean, it offers an unforgettable tropical escape. Guests can indulge in fine dining, spa treatments, and adventure activities, making it the ultimate getaway in Bicol..",
    location: "Sitio Mosboron, Brgy. Misibis, Bacacay, Albay",
    priceRange: "₱10,000 - ₱25,000",
  },
  {
    id: "9",
    name: "Patio de San Jose Resort and Convention Center, Inc.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKSQtVgAsH4GezZjW-5ArGFMWWY1idE2cjA&s",
    description: "Patio de San Jose Resort and Convention Center, Inc. offers a relaxing retreat in the heart of Albay, blending comfort, leisure, and elegance. It features spacious accommodations, lush surroundings, and modern amenities perfect for family vacations or corporate events. With its inviting pools and grand convention facilities, it’s an ideal venue for both relaxation and celebrations.",
    location: "Purok 5, Brgy. San Jose, Malilipot, Albay",
    priceRange: "₱3,000 - ₱6,000",
  },
  {
    id: "10",
    name: "Bienvinida Hotel and Resort",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1Ry73Z19Pd4MOJN04Yb1tcxQk2KrPKTidQ&s",
    description: "Bienvenida Hotel and Resort offers a perfect blend of comfort, leisure, and Bicolano hospitality. Guests can enjoy spacious rooms, refreshing pools, and relaxing garden views ideal for family vacations or weekend getaways. Located conveniently in Albay, it provides easy access to local attractions, dining spots, and scenic landmarks..",
    location: "Purok 4, Brgy. San Juan, Sto. Domingo, Albay",
    priceRange: "₱2,500 - ₱5,000",
  },
{
  id: "11",
  name: "Costal View Beach Resort",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/553953847_24673486755606913_6585956722996306827_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeElkm9LJb5mcTFFxDhgra66OgTSypilIBk6BNLKmKUgGSsOXXJTpRkjNJ4StuNtnLokBVK-DZMkpO8XHXUqicbM&_nc_ohc=KolKCCbT9rQQ7kNvwFrACRU&_nc_oc=AdkPJvkcmEaAFuGV7CAXTHtg_uwyEzjVRsRXpGU-ZYu81NPyYfzPnyASm-4ez6YwNqk&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gHlkalQ98tAlNFCsJddUNz4-PUjBjaA6v8Ke5LbAHqIug&oe=6910ABE7",
  description: "Coastal View Beach Resort offers a serene seaside getaway with stunning views of the ocean and golden sunsets. Guests can relax in cozy beachfront cottages, enjoy fresh local seafood, and experience the laid-back charm of Albay’s coastal life. It’s the perfect destination for families, couples, and travelers seeking peace and natural beauty by the shore..",
  location: "Calayucay, Sto. Domingo, Albay",
  priceRange: "₱3,000 - ₱6,000",
},
{
  id: "12",
  name: "Costa Palmera Resort and Seaside Apartel",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/554218201_1085292233435484_8688721844254314614_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHVX81mo4mmhoN7rBm2oSXAGgozwgzvURoaCjPCDO9RGg2WpG6v3Qf_0icN0rItnystjM0IXUa_riKfUdaSYBfe&_nc_ohc=LYCV-_dHfjkQ7kNvwHVFCaQ&_nc_oc=AdkbeaD7vCvaJaNAsNPnOmDI8kaWHmP-RqmgdpWfLXrHv2tHI2GN7_LFHBkWjGeTw9c&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gF-ETx07JWBDteUMQDMbnIWWw0YR9FBb57iD2xvmtZ2rQ&oe=6910A033",
  description: "Relax by the pool with a glass of mango shake in hand and enjoy a seaside escape.",
  location: "Purok 3, Calayucay, Sto. Domingo, Albay",
  priceRange: "₱3,000 - ₱7,000",
},
{
  id: "13",
  name: "Dorotea Resort and Spa",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/551037419_647370014898254_4204656484376367022_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFJ9g9QMPLN7d0v-9Zlc6uURmS8J9dZUMJGZLwn11lQwsf3Cy0wruQsflpQldan0jnVlN--eWKc2fXCk8Vkq78w&_nc_ohc=CbSSEd1nbfsQ7kNvwEihNhN&_nc_oc=AdmbsIQKZ_vRZdD1Q484e9EUgtq91trZRUIE1WxF3xVzFrdNqsHN5v0VTfzgYy--grU&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gGsSuqHP4OIOQ0q3ygZw-CPKZPK5bzXJBOHDYxrhJ8teA&oe=6910D37A",
  description: "A holistic place for relaxation and wellness that reinvigorates the mind and soul.",
  location: "Brgy. Cajugotan, Sto. Domingo, Albay",
  priceRange: "₱3,000 - ₱6,000",
},
{
  id: "14",
  name: "Facade Hotel",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/553584079_772358985795314_4026996518613556745_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHIiqP_6bVb-yftH22XxnVXkuE1o1NN5rGS4TWjU03msWvMKlodiuZ247xYt-H4aQAYyekSwfI1iOOm_3phdl-P&_nc_ohc=D_HGrYVw4_AQ7kNvwGkvevh&_nc_oc=Adlx1pUCDRuwtB1x1_03tlEAnZ7EqQv04cpr8y9m9yJig_tKj6Uh8BF9v44A79omL7U&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gExQKbumN4EBqiE35ZrELOe6uyV2R3NXzvB-nbx7N6Txg&oe=6910D26F",
  description: "Experience Tabaco’s warmth, dining, entertainment, and tour arrangements in one place.",
  location: "A.A. Berces St., Tabaco City, Albay",
  priceRange: "₱2,500 - ₱5,500",
},
{
  id: "15",
  name: "HCG Residence Mansion",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/553186349_816626427527753_7343225686348649488_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFQ0BxJ7gzBP8iole32qlv4mogetGkUTGOaiB60aRRMY3nsrqsOejVsbvw52IPQkAf_2xBTRGmFfmhYcLV6sM-j&_nc_ohc=7Zb7-n7UQXMQ7kNvwEkVdjU&_nc_oc=AdlNpKDc9SZyDIPoGM6V_S6tP_IpRy4J1WnjCYseMImddfaJ9RVqRJ75A9zc2l6wmyw&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gHSz6Avn8vKpXAtS_bAHu4JStKl7j4u9xei9wwXm5p6vg&oe=6910A759",
  description: "Affordable hotel and restaurant with an event venue and Zumba sessions on the top deck.",
  location: "Ziga Avenue, Tabaco City, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "16",
  name: "Palces Resort",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/554282830_1104638881845963_2370033688054465350_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEDRz1c1JkVBh3co0TkJczLPOVNKBwx7AI85U0oHDHsAhD1ekYJ-3lYyAQY7MvNTeikM8ABtpCXKuriYQrDBqx0&_nc_ohc=iEUVy5X_IfYQ7kNvwH9lwyh&_nc_oc=Admn8rGOGATFdMevIxH4IRi0lFocIbhR5rhqKaswTPlZJDke7f5ZC9BEd0CkYQV_G-c&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gGfV7s2RpLsnml1bADsGJIMlia2JtCoYi9fpJm8gV1hHA&oe=6910D15C",
  description: "Features rooms, dormitory sleeping, swimming pool, tennis and basketball court, and mini chapel.",
  location: "San Francisco, Malilipot, Albay",
  priceRange: "₱2,000 - ₱5,000",
},
{
  id: "17",
  name: "Reyes Beach Resort and Restaurant",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/552070390_1144269957642550_2186851563889993845_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEH2tue30uKPvqrS-n4YhDwmrpC_hFHfU-aukL-EUd9TwVKVrb5sqBw3SR8PxSG6VjeaU9l6Ghnam2mCrZz26sf&_nc_ohc=OE_otE7BVoYQ7kNvwHM6V3C&_nc_oc=Adl5vd8YyZKKCw2QtjSvcUN1nIu_u-WTfMAtWGyXOGVsKgoHMaYY16jTIZ_TY1WTCHo&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gHRwNdJ2SKAZ8o7ieYqqVArEmv8rp8lWydoFcHzfp6hpQ&oe=6910A5DC",
  description: "A beachfront getaway offering relaxation, good food, and coastal views.",
  location: "Purok 2, Brgy. Calayucay, Sto. Domingo, Albay",
  priceRange: "₱2,500 - ₱6,000",
},
{
  id: "18",
  name: "Manhattan Beach Resort",
  image: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/554247032_1995856841174222_1237897950504600689_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHbcqcVKtaIJ4DOzK9AlXXKPvCI4rUpcvk-8IjitSly-Rf9wkvujDuPEPCGP-1JQPxkRsp5bQNeZcn2grYXfl6W&_nc_ohc=-tYIddirVecQ7kNvwGi_rKg&_nc_oc=AdlzwGu4JTEcSsSnDpIBcErq5eYanEd6L-brHVliz77ZIxq_WXgH_o7JMLE9eY5YF28&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&oh=03_Q7cD3gEjnT3HRTq4qGUidxIpAW0dNJaybL5rS8ra-Vt9Z4UaCQ&oe=6910A330",
  description: "Overlooking Albay Gulf with a scenic Mayon Volcano view and black sand beach.",
  location: "Brgy. Calayucay, Sto. Domingo, Albay",
  priceRange: "₱3,000 - ₱6,500",
},
{
  id: "19",
  name: "Meaco Royal Hotel, Inc.",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/554303507_1135395155350694_6975596624669381660_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEYsLTa_TonpwOpS0yvJulNpMfLTPTKHuOkx8tM9Moe46t43jK7A4vb-mKcEt0MsY8wYROY0GvuMP6y4m69v-lv&_nc_ohc=mDOu5UJB568Q7kNvwHTDH9K&_nc_oc=Adn7PrtVKTRX06fLHTzwUh3ac6wBOwNwrZrfF38GD9ik1pKrpYYbMj4aPX5N7KlLUyw&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gFl33v4hyb1ztple9HyoGCJBRVxnw-DfCYJRZrjCCb4CQ&oe=6910B2CB",
  description: "Affordable yet quality accommodation with great service and comfort.",
  location: "Ziga Avenue, Divino Rostro, Tabaco City, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "20",
  name: "Jaylyn Traveller’s Inn",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/554224902_1969618743832820_517739202816669626_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFTwJAONSYMPytj4jz1e2Uz0umwtsYSueLS6bC2xhK54nGjNqfk1O-RaVk-gSTi5Ooq0NnhlZNipD2P7bLOdOav&_nc_ohc=Jp34ALWJWbAQ7kNvwEP5kyx&_nc_oc=AdnUsHtmac08o3sQ9qD1-3UKssvPhEXr2vV2OjPn7gIZGHdZABYDWY3d84O_S0721yg&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gFdvFe1PD2inMxPLGgmN1uNcwtYG_GlAiG86a5MDcSpUQ&oe=6910C7E5",
  description: "Located near Tabaco seaport, perfect for travelers seeking convenience and comfort.",
  location: "Purok 3, Bonifacio St., Brgy. Cormidal, Tabaco City, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "21",
  name: "JJ Midcity Inn",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/552632928_2045516906221754_5208303762053072188_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH_ay5jlOeB5Q52I4IPtL_3tWDqCviffMO1YOoK-J98w3ZGDG3kvQD_dvggSoltJ8vOxDANHxvm5wtXLr5Ua15X&_nc_ohc=AnCjcmtlHesQ7kNvwHM2KHW&_nc_oc=Admdec69n3NaL4gp63vHOvf7EW-h7bbwKHzXTHR8RRWZcgu0TRxUcHOvxd4KXQNR-3A&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gGGMmZFhQ5Dm6o0iA-KFP9SNcj7_xFpZjgVRCLIgIZADA&oe=6910D3D6",
  description: "Warm and cozy place to rest between your travels with excellent comfort.",
  location: "Herra St., Tabaco City, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "22",
  name: "Hotel Fina",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/553326799_1874556040146236_1572763671773138805_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGap12q67XeqhrEWi-USdo4cxR1isSgvr1zFHWKxKC-vQWwTGm1ONK71qKy7S0awhSNUlakE856u7XwvDESJEgI&_nc_ohc=K1QuUPZL2XYQ7kNvwHlvyBB&_nc_oc=AdnGBGLc5kEa7oURixnE5h9TynnyxeXbpNqVHTJHdyUOecnS7Z1acJpQBpN_ZT1Ux-s&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gHYyYcYnNC_80r9pyH97WkQQCSPSxviVq36MtlhUuoC2g&oe=6910C978",
  description: "Luxury and relaxation await with a wide range of amenities and top-tier service.",
  location: "A.A. Berces St., Quinale, Tabaco City, Albay",
  priceRange: "₱4,000 - ₱8,000",
},
{
  id: "23",
  name: "Tabaco Royal Mansion Hotel",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/542375164_2726884794184652_2551545896180214429_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG80sCnaVISHRV2S4IUDBMQ7WQzfalS4_TtZDN9qVLj9GN5hp0G3psptVPvtMJ5JnEfXG9dTPsdgVfG_BIYJ_Qa&_nc_ohc=iNZCc_oez4YQ7kNvwE2aOaf&_nc_oc=AdktbxZn4VdOYKQcRmKww0bNnCXPsjprYXLJB2q4cvUxs60UXyykhgDF3MHSYt2QqQw&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gGPizsxnQVjQQZERGDFeBgrweyl69J-l1Mzlm4JlKMLdQ&oe=6910AA29",
  description: "Offers a restaurant, private parking, free bikes, bar, and a lush garden view.",
  location: "Zone 7, Brgy. Panal, Tabaco City, Albay",
  priceRange: "₱3,000 - ₱6,000",
},
{
  id: "24",
  name: "Dos Montes Spring Resort, Inc.",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/553046316_25413334154973355_4844491992840165587_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFNVcGZDIVTGuXV-l-LMZHPF6CCP6FX3r0XoII_oVfevWGjC25DN3D7kBQRTojc9ohQE6m2L1P4gVgKHmnSg29x&_nc_ohc=zn46IsM0_Z0Q7kNvwENw0_l&_nc_oc=AdnevtHeNx_Yi0HMjECC_uNSehWuKP8m5MZsCuRg0FxBSdxtHr5ojlnn96ZmNCnawAc&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gHiyJlnqYDxs8_5hVY--7GUmlcRivLLcUeQB12gmr_5Rg&oe=6910ACF3",
  description: "Breathtaking mountain views and relaxing natural springs for a rejuvenating stay.",
  location: "Brgy. 1 Poblacion, Malilipot, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "25",
  name: "Casa Simeon",
  image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/550497262_699758913137840_6924898015722195903_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHLW325cjgIrAVBYvV9NAG3jkiLnQi_mD6OSIudCL-YPodCOo0ucjhjZtC8Jc_G0a4yEhxUui9yfbNDw9HtWqXy&_nc_ohc=0uPW8TFCdOIQ7kNvwERu-9G&_nc_oc=AdkP8-qs-wkAlLCkwWvqj-uvT_n2KDsuRO1u4_RKYYgiBWyWEyIcGEVzQf7cJSFX1tQ&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gHzpXmkgPAbXIQNLflqz4XpQiu9OJ__iC6A_Nl0S6AxRw&oe=6910CC6A",
  description: "A spotless and well-maintained bed and breakfast blending nostalgia with modern style.",
  location: "#1 Bes Street, Brgy. 13 Poblacion, Bacacay, Albay",
  priceRange: "₱3,000 - ₱5,000",
},
{
  id: "26",
  name: "Dhio Endheka Spring Resort",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/554723396_797518332887352_8466952200685304882_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEdqbazJWi5tVCCp07zoGdODbkcO9rAhhoNuRw72sCGGm9FQvfTmbeAva6tXfuUkdfUfo_PW8jiPkUokvZ_o3ff&_nc_ohc=63MC3QBI3JoQ7kNvwEJrjgu&_nc_oc=AdkhLWomosm6J_wGzzZkzbcJMj6mWpndQ5mKvU6WTO2JOx0fPeXNcOvvcpaUHGLbmZ8&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gFjWqmsQRHo7kxtUZqcW_y7utB50qU2s6hKZLf6APZPYw&oe=6910CEB3",
  description: "Perpetually fed by cool mountain streams — vibrant, refreshing, and peaceful.",
  location: "Mayon Crossing, Brgy. Buang, Tabaco City, Albay",
  priceRange: "₱2,000 - ₱4,500",
},
{
  id: "27",
  name: "Parong Bermuda Resort",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/553905206_1591599572207078_890615654250144158_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF31C3DFld5AehGGKc2so9mkZaYgkTxbpmRlpiCRPFumTdlc05GD6Un8yOju1LD4FuRZw7urz7fHlVt6MeBdGFq&_nc_ohc=TipX4vaRLRoQ7kNvwEnX04l&_nc_oc=AdnlVWLsyBQHOcY-jY_QbxuPhALDEjISPdxgP8752Br-vDCScgd18oqXEh2HpKNE2Ps&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gGFt3or9ljl_SDZxwVUh4qq7pdRal9b7ZIeDjXQ2cb22Q&oe=6910C0E6",
  description: "A relaxing resort nestled in Parong, Pawa, Manito — perfect for quiet getaways surrounded by nature.",
  location: "Purok 4, Parong, Pawa, Manito, Albay",
  priceRange: "₱1,000 - ₱2,500",
},
{
  id: "28",
  name: "Ma Nel’s Hotel",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/489731333_1966836157564558_981132115787792592_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE8hote_EoffuQ6SLoSGaH4pjXp-1irlgKmNen7WKuWAu6qK2xNg-y0O1spuxhqPscDvgLkzRcW7FPcQVwpfG9T&_nc_ohc=qiEIHfxOnPUQ7kNvwEb_4st&_nc_oc=AdlSFTEuSHPgQ61ivu5aRMwnN2ObDajqZN_ZrN9gFeZGjBkEoVJq1pkFiRmt1dN6JKg&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gGipdU4pvsWGMJe3AMGIYefYF2Yh_3OkXXPLxejFUeaFQ&oe=6910B532",
  description: "Where your vacation feels like home — comfort and relaxation for travelers in Camalig.",
  location: "Crossing Ilawod, Camalig, Albay",
  priceRange: "₱1,200 - ₱2,800",
},
{
  id: "29",
  name: "Alinchlo Tourist Inn",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/553547881_2271644700009134_428631199221552968_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFpaPl9jOxns7qa62RAq723ush7pgpg7vO6yHumCmDu8wUU1X2ZlIGkiwfMxnSmgtjySqTWDzVv-lBaoQxHUpg7&_nc_ohc=p9ZMNDTIcHUQ7kNvwF_L_zd&_nc_oc=Adk4MYUaOjkV8NKC9iA1KuUh9Cgd-ORa8EsEayeHbsGqzc2bgDTdMjlGl4qrb2GEUHU&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gG3jE5tr9y6rATEwARmQ3v3WclS8GdNJb1iwwc0NVs_Rg&oe=6910CC60",
  description: "New, cozy, and clean at a very affordable price — an ideal place to stay in Daraga.",
  location: "Purok 2, Tagas, Daraga, Albay",
  priceRange: "₱1,000 - ₱2,000",
},
{
  id: "30",
  name: "Apihap Spa Hotel",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/556926691_664699016353672_1651798495715808615_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE7DtkquWEFtj5n6oK5qtlwfoMV_rZMtLt-gxX-tky0u2LYsr2_xolEhfP1O37OgFBdHGpB2-eBveacn9Z_WRFg&_nc_ohc=FWj9Z7bujYQQ7kNvwFSS7lh&_nc_oc=AdmU-tFE6ByzsvX6AUPXh8SEQDnwxBsOdQWbr_zr49rCbCam6ejG7fDRWYZPOsrdYS4&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gFKGOPS61T9AyV1E30AGC9x0tBoyDy7qmvS1JBbRCV9ow&oe=6910C1D7",
  description: "A distinct addition to Daraga — a smart choice for travelers seeking wellness and relaxation.",
  location: "Ardhil Subdivision, Lakandula Drive, Tagas, Daraga, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "31",
  name: "Ben Spring Resort",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/541597637_1141490484079725_3159252095609576406_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEzylSVLiLU5bVsXfyWHHfX7d5b5tm3ynPt3lvm2bfKcz7ZoFEcZDWBW3dSOUiok2SvmekBkGtn51Jr6PBy5Qng&_nc_ohc=bCFxEVCezWsQ7kNvwEjgM3U&_nc_oc=Adnm5DcOCxLwZbnJfCzfkxcnTDPSf-WdTT715T5EyjJ3Ypm3A4SGND4acCHhKovTjlw&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gHRcsU7KLpvVKd8W75s_IHYN38Zpg09Y6-aDXx-A5ob4g&oe=6910BA05",
  description: "A refreshing swimming destination located in Tagas, Daraga — enjoy cool waters and great amenities.",
  location: "Purok 4, Brgy. Tagas, Daraga, Albay",
  priceRange: "₱800 - ₱1,500",
},
{
  id: "32",
  name: "Casa Bicolandia Suites",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/557107020_1493054771953657_99771510774474493_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHKRbJYDm5mjXl1yQeMJZT397IXUoKKV_r3shdSgopX-ocgBY79tc9IQLiZpkWvIz2F0AxsYYzoxDNtJpkiS5ev&_nc_ohc=cEm4LPBOeUMQ7kNvwEEmpp6&_nc_oc=Adl1MXPsgVawfiX83l1tiBxviqIRfP86-MEqGHtA4NHIyTuTdVjCzpPl90YGWX0m5Xc&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gHdvgRYB5Tzh5X32BmAul_gzOLenmcQs_XPRqQVp1cxYQ&oe=6910C772",
  description: "Splendid service and modern facilities — ideal for both business and leisure stays.",
  location: "#10 Malvar St., Brgy. Kimantong, Daraga, Albay",
  priceRange: "₱2,000 - ₱3,800",
},
{
  id: "33",
  name: "Casa Lorenzo",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/553969367_3363658807106884_4811805064252908960_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFmMQwJ6ei57j5zMTSxe7UDNlTxuJ6PNt42VPG4no823mp5skPYmj7E2b3CGetZzGS_-WUO4KD3bDZp1LkCvTbd&_nc_ohc=ytI1b0hdTu8Q7kNvwFpbZU-&_nc_oc=AdknveFANGXFDhfSWnHdzAeFhuRTc8C7A4FoSvUrGywFykTFCV-FSB6qP3DhLqJCueU&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gEwZ0XLrf3RWr5Ory9zjRIcnkqEfoQrRmdf58ssWnZtKQ&oe=6910B80A",
  description: "One of the best function halls in the province — perfect for events and gatherings.",
  location: "Tagas, Daraga, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "34",
  name: "FJ Manila Hotel",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/551254915_1453324292418759_1242637999247417922_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFGDc_kWMbKzHkn4Q38fqNgcY1W0Pqwpf1xjVbQ-rCl_b0O2gR5uBteWmL-2_PKDtdHN6tHz8qD4ep_Y5IOpv2p&_nc_ohc=rIq3okVyX2kQ7kNvwE_cFIN&_nc_oc=Adkt9R8acySlSNBwunGds74KKqEJA6k05jx-PSn4hmNc0KFkEMuRZlbg034MFnJiaGo&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gEma4LUPbk83PeecNiELNJmpsH04BGXgiphJxBNtnesrA&oe=6910B6BF",
  description: "Affordable and quality stay along Maharlika Highway — comfort meets accessibility.",
  location: "Maharlika Highway, Brgy. San Roque, Daraga, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "35",
  name: "Innbox",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/554406700_793765553273913_8003012441527580713_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHb1TOUJ0arGlrTy6wTXFa6hv5KF9TQloWG_koX1NCWhfBDK0LF_9gqnaEtzARIYEMgAceUz6qqKb6S80-wVoW1&_nc_ohc=L37Bn3C9U3QQ7kNvwEwLfOR&_nc_oc=AdlIh1o7nvqh2DdU8raj2PJQOeHV_CLNszx46FsUwslZ1cOkk_1DGo3-LNXL8oqyEdU&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gHUje-T-qgC6hSnYAMXxvWun7kRf_ionH0h0iVjTbOoYA&oe=6910D389",
  description: "Affordable container-style accommodation made from recycled shipping containers — eco-friendly and creative.",
  location: "Purok 3, Brgy. Maroroy, Daraga, Albay",
  priceRange: "₱800 - ₱1,500",
},
{
  id: "36",
  name: "S & L Apartelle",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/553503980_1298559254885358_8339609791415811460_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHIFNr2cVmkdHiWVBOZGgC-5SXmMNBLdLvlJeYw0Et0uxTfEM1gA8XAcpfxy6N5WlQboQlUtqOMXs67dnhtgL-I&_nc_ohc=3MDgVr0S8k8Q7kNvwF3QSUO&_nc_oc=Adk6SfGm168iC99X_0Lwn3oRgwkpabP3oUqdaYsEm5p28BdwJZwLbPHPy0fNJfZN9Kg&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gGbSEPnMMST8fpzLuDWvnrEO8QVIOGZQmUlnXZESj0_Bg&oe=6910B8B9",
  description: "Colorful, spacious, and well-maintained rooms perfect for short or long stays.",
  location: "Purok 3, Brgy. Kimantong, Daraga, Albay",
  priceRange: "₱1,000 - ₱2,200",
},
{
  id: "37",
  name: "Todays Inn and Suites",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/553529811_1314142673725313_3022439418413074132_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEj7-CN1m2bobKQJmlFdQYO2OWgKoqIcYbY5aAqiohxhkKMg54CgvNeF1n11k-VH4jH4yvfhMu7jVfLIfawbUZN&_nc_ohc=wdn2D4ehE2UQ7kNvwFFJwjv&_nc_oc=AdkMMgX3yVjt2ntq7C8Je8Yj1a2izL6nC72Q5kagrvAkQJY1g3o4CYdEnV8J6Id1exI&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gHCf0626oqc7oTithj218eKy6L8C5rsQT9RlkNy-OXlAA&oe=6910C9A5",
  description: "Quiet place to relax with parking space for each room at the most affordable rates.",
  location: "1996 Velasco St., Doña Maria Subd., Daraga, Albay",
  priceRange: "₱900 - ₱2,000",
},
{
  id: "38",
  name: "Villa Amada Hotel",
  image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/553827670_793744420063948_5384225040601314741_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH5waFa9bpmkTLyNMTOHc4rUYDng2a8Q3dRgOeDZrxDd5XsuY3koS6jza9acfwWE-8ebHOJMOouvdBpy5Z1citp&_nc_ohc=NF0Y_OWWaKIQ7kNvwHJN0ez&_nc_oc=AdkoCKzh5y71Qay58u6jxbEVkX8LwifNMyHUAGZATm6zaZbI5jUD5wDBQOEAehAv7bU&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gE8lv7mKNBqSPsBvNzJI66BoLSkN2vV5sIuouvzxpEE3g&oe=6910DBB5",
  description: "Offers comfort, service, and amenities for a memorable stay in Daraga.",
  location: "Rizal Street, Sagpon, Daraga, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "39",
  name: "New Blossoms Traveller’s Hauz",
  image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/553744313_2583629168682817_5678599767650730076_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFAhHQiZMP9wjsD46r3s-3JoTCz6hqtoeOhMLPqGq2h433jNX0l2_FHfnKNk6e1ksTLjuqsb5mp31FDup4cgmVb&_nc_ohc=1Zm9SWSco8YQ7kNvwELqGyA&_nc_oc=AdmWr_T4PtfSuvPPE30eTEIPYhN5aKObNZeqb4ajU2VElPqphcCFIpRAMW30fSy2fEY&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gEJiZsemqQNSrjwHCng-qs5Q2fL9v7vb5w4BQHuukqpEA&oe=6910D300",
  description: "Relaxing rooms with massage and food delivery — comfort meets convenience.",
  location: "Doña Maria Subd., Tagas, Daraga, Albay",
  priceRange: "₱1,200 - ₱2,800",
},
{
  id: "40",
  name: "Alicia Hotel and Convention Center",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/542369003_24916220884733090_6036500220450831572_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFk7xZhB6LlTImHZ62m0iNqpjUNbhNwKvGmNQ1uE3Aq8WbGOIxEtwMyVqUIb8T5c5qHFGErnf-_2WEL-IpHSbKp&_nc_ohc=bd7o2ORi9WgQ7kNvwH2DS0y&_nc_oc=Adn2Q_n8H-GPeirB2Cu3rzMV369OremDp9ouFaMFYD1glIQkynwdfEXPYD5VXgZoEWk&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gE-dRhRAIDbTuTzzwfy0dEHdkdROfjZgUnai5AY9IndKA&oe=6910D31E",
  description: "Conveniently located minutes away from Legazpi City center — offering modern amenities and event spaces.",
  location: "A. Aquende Drive, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "41",
  name: "Hotel Inigo",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/553870731_1519144695767485_2447097983114086238_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH0wj7p72Jg2VDNDPFc9sKFM0eAzXFcksEzR4DNcVySwRHAYYL5nEQ5uckqOKXwTWgwa6TZ-RRywEipS61ffyrX&_nc_ohc=ScWMz-OjBiAQ7kNvwGpTOIK&_nc_oc=AdmOS66S7-CvDQpoTqr2vG6rX_lEJMBuJcjZqUE-NFI0xmvviNAUXhMFUMqlXWQ3BPs&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gEv1p83Wsa9PL1LNcr1vg9HvV_Aohd1MQCxBUnbWQOjWQ&oe=6910ADE5",
  description: "Offers the best blends of coffee by Nespresso and cozy rooms for both leisure and business stays.",
  location: "Rizal St., Brgy. 18, Cabagñan, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,500",
},
{
  id: "42",
  name: "Hotel St. Ellis",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/553518723_1513330006530739_5346053455699199007_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG6FrDi4ktaS694nVHkdKflfcOJeyxRTY99w4l7LFFNj5z8Z0efJNPkrMiuu3MmUpKAzyNK5R4K9FHV9xBhec2b&_nc_ohc=vfzWwB4NX50Q7kNvwGSbgtP&_nc_oc=AdmFKPWfL07bCxvbUnzcLHH23O5ZAShe80XZnfEzu3ITBxbglVONMsjW_fFqsNtii6o&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gFaYsFcBSblzRd0gFgUrZCQ4ZHZBY_qf4QK7FJKcEGgCw&oe=6910AD9B",
  description: "Upscale rooms with quilted headboards, flat screens, tea/coffee-making facilities, and elegant suites.",
  location: "Brgy. 31-Centro-Baybay (POB), Legazpi City, Albay",
  priceRange: "₱3,000 - ₱5,000",
},
{
  id: "43",
  name: "La Venezia Hotel & Spa",
  image: "https://images.trvl-media.com/lodging/3000000/2210000/2204900/2204897/1b75bcdf.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  description: "Stress-free stay with Wi-Fi, taxi, and car hire services for a convenient Legazpi experience.",
  location: "Renaissance Gardens, Washington Drive, Brgy. 40-Cruzada, Legazpi City, Albay",
  priceRange: "₱2,500 - ₱4,800",
},
{
  id: "44",
  name: "Legazpi Sentro Hotel",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/553340821_1301828577866022_6799553133927893247_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF0Q2VtKToHuW-tc8JypMEI9Mxs7MWdq9L0zGzsxZ2r0v4_NqKh9ytcjSDc2zBszbesGkxj0L8OK4V9N3Izb7hn&_nc_ohc=nk-mkvPa6iAQ7kNvwHdYoTw&_nc_oc=AdnRvwI_yx-47Mas5uNqb29kvexBy3KIqCdLBUcRW3Yn5yUv2d_cTl3H6D6yzriL1B4&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gHRpEge72lmPk-idZ2kUsPDwLYPy6rQqV_rnfcIB_MYng&oe=6910CF67",
  description: "Homey rooms featuring flat-screen TVs, cable programming, and complimentary Wi-Fi.",
  location: "F. Imperial St. corner L. Los Baños Ave., Legazpi City, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "45",
  name: "Mayon Blue Lotus Corporation",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/553047679_1097659708825090_4661220141222776482_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFVzu74c96E5RwN6AK9yKQoSOUJMAbcmBlI5QkwBtyYGeh_rJ3sRDhZqmXams6qVuDZLSnzuyhHeirAQDxB6RpZ&_nc_ohc=kbs4UXTwnPUQ7kNvwER2DYv&_nc_oc=AdmUG-_V-OOdeyjDzK9Pt5ARyvD4MGa8h0CoLs2sAy-sw6TiGkN1kUF98OX68pkwjsg&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gFfPGAQjYagV9Dd88h414UU3ylcnoog88rSes907yAyzA&oe=6910DB8F",
  description: "Enjoy a free breakfast daily and recreational amenities for a delightful stay.",
  location: "F. Imperial Street corner Terminal Rd., Bitano, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱3,800",
},
{
  id: "46",
  name: "Ninong’s Hotel",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/553314953_1990121088421645_6349433328529184531_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFHZADiyOkJ9nz1FVo7cPoAXt6uG-ctu7Re3q4b5y27tMcJ2aBusCBQpO7loesa6RXqy9jcrhm2QJtf0cCyH03r&_nc_ohc=ysKD9JLn-XkQ7kNvwFXJtrI&_nc_oc=AdmHqxNwktno6-RcLWPKKranWpTGQKHY2pPGRws8-XhS2rywOhEdBqXQIixef3NSq3g&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gGu2nRB5ziggJnDOC0TBSdtHkcinGhxbjRowcEWe06P9g&oe=6910D9EC",
  description: "Relaxed hotel in a bustling area with colorful façade and views of Mayon Volcano.",
  location: "Brgy. 16, Kawit East, Washington Drive, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "47",
  name: "Pepperland Hotel and Leisures Corporation",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/551242695_25000199186272377_8091227433425791710_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHhfZCvEwZAtioYBTwrqTRTSSeBVuYnagJJJ4FW5idqAgQr70ce1f4q4K5gV0ZJvD_c8VH0Q3FV9WuPmnxjsDaQ&_nc_ohc=vEmpiFDcVPYQ7kNvwEGLgwK&_nc_oc=Adm5CDFLgwo7h5YZt9lThmn1DaZUt3x-_FioyAJf1CzQGsVBoDgdT534pN-loJ2Q50s&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gGBOKZE2l7GnrriIFgbewc4Rcqc40tpTSqu3wBf8qFdZw&oe=6910C76B",
  description: "Conservative rooms with refined décor and modern amenities near Legazpi Airport.",
  location: "Airport Road, Washington Drive, Brgy. 40-Cruzada, Legazpi City, Albay",
  priceRange: "₱3,000 - ₱5,000",
},
{
  id: "48",
  name: "The Marison Hotel",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/553851631_1470541030844708_5273043820573328844_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHIxZoAmZ7SYrshK1tqYzh02NSGaBtgv3_Y1IZoG2C_f7yUnl3Zyq6YHi5TBBimnwigwpLwZqOBqh_HMBiXhLuh&_nc_ohc=NT7RWvjoB1wQ7kNvwHejVz2&_nc_oc=AdlrCkWo6iXFzpYXcURujtuMEum-vxd4mRzmlSE3-Jqf6LayCgi1dR_S31lteZBTkMs&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gGf7esydI5I0mnK75sIeXEWu8qwWpvFxZnBV1bp1gvobg&oe=6910CCEA",
  description: "Air-conditioned rooms with modern amenities for business and leisure travelers.",
  location: "Corner Imelda Roces Ave., Brgy. 38, Gogon, Legazpi City, Albay",
  priceRange: "₱3,000 - ₱5,000",
},
{
  id: "49",
  name: "Proxy by The Oriental Albay",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/553748920_1900322933878423_4372012514514723153_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH8NfKChdEhmAkeFh98qImGdYs26JhnQEt1izbomGdAS3lDUHM-aKtvpLIongPJOyO7djIABg8Dxp8WZ64QmYq9&_nc_ohc=BhEOl7UPN7AQ7kNvwEmV0_R&_nc_oc=AdkORvsqI9u95R4XBM3MEq90MkNyHy9HuYf2dK_gHqMl46_OeQdBhbZxxem_reoCKnQ&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gEO-0Fhd-hg7F-PgAMzsAd6gaaCxbTfQ1BGWSy7mObpuw&oe=6910ABA2",
  description: "Modern hotel offering free breakfast, a restaurant, and 24-hour front desk services.",
  location: "Purok 1, Brgy. 33, Peñaranda St., Legazpi City, Albay",
  priceRange: "₱2,500 - ₱4,500",
},
{
  id: "50",
  name: "Tyche Boutique Hotel",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/551562212_2473769956325831_992549834519499335_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGkG0dq1t_4YN50J76ErI4QNNzB_d-XT1403MH935dPXkBx77_xMAX1RcYDuBINtpkhztDqaxomx2zv75ygQEeP&_nc_ohc=aBisUXHgUSMQ7kNvwFQ6Dk3&_nc_oc=Adn-T-gBKo64Mi3cUMWcwSkN2bDQUdJqe5NRLYouZoKdpkMkvr39ejIQ-vmL4VQyHWQ&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gFyLMjxIGRhP6IBWIlr1tXdt4Gajue0usHIqod-fieXVw&oe=6910C908",
  description: "Variety of convenient and tasty dining options with relaxing recreational facilities.",
  location: "Gov. Forbes St. corner Rizal St., Brgy. 31, Centro Baybay, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "51",
  name: "A & A Bed and Breakfast",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/541418269_1186918313485690_3189282180759485900_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHCJHTiaBavpiGfVR-pzDhxgcdb6aB4kDGBx1vpoHiQMeU79xk-NNnOBGLjsmIkyhojBZOpfQQWe9FV3yfZzn1a&_nc_ohc=XXGpZpHO3h4Q7kNvwEXW3Dp&_nc_oc=AdkJOcGd778xrj7tvhe_PKPFt8t62TMrBUB84n9D3WO3XjY4nJvU24XmJk0x7SAbQnc&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gEj7bnJdFtKzZM0aq5pnv8du8woz-A22vCRp90I3h0Cfg&oe=6910AD9D",
  description: "View of Mayon Volcano, walking distance to malls, church, and tourist spots.",
  location: "Diamond St., Imperial Court Subd., Phase 1, Cabangan, Legazpi City",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "52",
  name: "Anniesville Realty and Development Corp.",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/541330515_1307446630481786_2868567854263447387_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGGsMezvuM_bOSPmpEf9z9vy-d_tY7dNJLL53-1jt00kvW4fanaQ5O-1zdaEbKUAK5TfMgnYwl5_bhJ33cicm0c&_nc_ohc=CqcmCRmjiwgQ7kNvwGJtVe8&_nc_oc=AdnXAxc8bYyMBgO9TlJnXbJQrJjUkjRFg1ErkI4_JHlO7HZedFdNzNUtbiXJ_1Er1us&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gEfGpkUIfQn1lGxRHu4IbBWhw2HjJsoK15cMVJ06OOrjQ&oe=6910C079",
  description: "Cozy residential rooms just 10 minutes’ walk to Legazpi Boulevard and Albay Gulf.",
  location: "Buckingham St., Imperial Ridgeview Subd., Legazpi City, Albay",
  priceRange: "₱1,200 - ₱2,800",
},
{
  id: "53",
  name: "Casablanca Suites",
  image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/558061151_735720886187438_3835471791668456710_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGsWOzlkWfKxQoVjJR4Qgi940sFvFNUuTPjSwW8U1S5M1rwuvOJwqhLdBZj-sTSWZCUhW_PPp8c-EOmhvjchW4Y&_nc_ohc=ZZP_DzXUqjgQ7kNvwFKZ31U&_nc_oc=AdkxEBi4llpAegWQjYjA3-qZMDynWUUagSEi5bsgo_OA-GE-iKeZ0UeoLzyOoc38bCs&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gFQR6gKyqm-3f0jBzZuOZZMspv5a7RROV3N1rSpKNIylw&oe=6910BBB2",
  description: "Ideal airport hotel for busy executives and tourists eager to explore Bicol.",
  location: "Benny Imperial St., Brgy. 16, Kawit East, Washington Drive (POB), Legazpi City",
  priceRange: "₱2,500 - ₱4,800",
},
{
  id: "54",
  name: "Casablanca Hotel",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/553989315_1343918804098123_2165824834883804220_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeElnpk7WsMYxlgmraPaW1Ed4eB9fDp7rH7h4H18Onusflw3DuSgh-NW9w0xowXDPWuKBurjluMKj-KMcQYF_N9F&_nc_ohc=GgFTNKfVUIAQ7kNvwFjuzNe&_nc_oc=AdmpkxD5MBjlUdRJS4MDGS1Fz5RV2xCh7VJH6vrU-SEapx2uZag1Xu8gPVwngBpFhZ8&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gFfBgC2rHTf6dwKUBr2K15dMmRRdjONFPNyEp13VWV3SA&oe=6910B1DC",
  description: "Classic accommodation choice with modern comfort in the heart of Legazpi.",
  location: "238 PNR-Peñaranda St., Brgy. 33, Iraya (POB.), Legazpi City, Albay",
  priceRange: "₱1,800 - ₱3,800",
},
{
  id: "55",
  name: "Casa Roces Bed and Breakfast",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/553018730_1535531477464852_8053110088110823399_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFZTEdeE2-8ItboNTHnKObytRummDT7nUK1G6aYNPudQikmtd49wUdKx0jPYSVfr-bVUsBQFzQqQk8qgn_F96Mj&_nc_ohc=xa5ZeKgkQ4YQ7kNvwHyfNdL&_nc_oc=Adk-ofAsjRcbmAVCYs3YDIH9Qg9-p_CQbKUZbxfYdl6vknRHEAfNkjTaWku_Kzz6Fn0&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gE9Wtu4x2No7xLZTK0F9yIvh01QhqKIIfIzMeD6DpjAzQ&oe=6910B3EE",
  description: "Perfectly situated for tourists and businessmen alike — comfortable and easy to find.",
  location: "#15 Sikatuna St., Old Albay District, Legazpi City",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "56",
  name: "Emerald Boutique Hotel",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/552693319_1890355051529365_1600544144824555926_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFCIKI4ZYaOPNoyq_syXmipqpIl-cNp54SqkiX5w2nnhAFo6hNyUrTLFg8Ee-PtTrpBqUatoMWKCKje3G8_nSRW&_nc_ohc=R9lBdbyO4kUQ7kNvwH23Z0J&_nc_oc=AdnM9vaP00m7QzOEv-Lr_8KW5BzmJkJNCtRe3RRkPQV0a1cG1hrnUR8r7kHiZyWAOn8&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gE81JpxUupr0Cggx-J1BnGyKf4KAHtCoUVtTHO0ZnYNTg&oe=6910C00D",
  description: "Offers reasonable rates for rooms that exceed expectations — service that delights and amenities that impress.",
  location: "Marquez St., Brgy. 14, Ilawod Old Albay District, Legazpi City",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "57",
  name: "Ellis Ecotel",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/541208779_1142101890687469_2060320643039989876_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHJFo-vAiM6LvkQ2Ec-YGb2sxm_yVSqacOzGb_JVKppw2pAVSdS6l0xrZc_ZQNKMoPNAnwkBhC5nlDAGgI4sm_D&_nc_ohc=HV1qa_DYMUMQ7kNvwGQDVIc&_nc_oc=AdlD07k4JCJaeI5vfmixA5Deu1CC_ZCU5uXvScnmxDbOP4Shdq65TR-Lcabm-D4lvho&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gEWueros_8nNAOBS7bW4J6dOv-rBoK7l0u93bkK49lVOA&oe=6910D788",
  description: "Distinctive nautical-themed interiors with panoramic view of Albay Gulf.",
  location: "3rd & 4th Floor, Bldg. 9, Embarcadero, Legazpi City",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "58",
  name: "French Cottage",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/557651189_3951056005039584_4534968143666682734_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGa489NV5xkJ80D3q9MH5e3CE3zYPMHS3kITfNg8wdLeeHkShNMk8yu2_uJjsYnNEqsETok91xUlgQrZhcdwjal&_nc_ohc=BH2Hmvw1SQMQ7kNvwFTN8n2&_nc_oc=AdnOWOXXsZOj7V15r6Lt1a15G-eMSvS0H4H3e4S0A5tI3V-cCoKYgr6ZjX1l9RIJJl0&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gGUrmJFpyBG65XWM-x8uPjK5zRY5cKFuM4jrRZFIF6X0w&oe=6910DCF1",
  description: "A small cozy hotel with a homelike feel located in Jamora Subdivision.",
  location: "Jamora Subd., Brgy. 20, Cabangan East, Legazpi City, Albay",
  priceRange: "₱1,000 - ₱2,200",
},
{
  id: "59",
  name: "Golite Hostel",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/558041449_1206521431296365_8613093958215179613_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFctax9WhSfmXpADiKdNS2yP6qaMMqA8vU_qpowyoDy9QjyG1OH5Gh0FjDxi_0pxnFoX6C3NoahYLFTlNcgvK9y&_nc_ohc=O5qLndk1SX8Q7kNvwH7RCwQ&_nc_oc=AdkD27S8f_g_mLkUcSOvn5Bx-P4BB9CWq9OBNxM8460fbXSR28R6Ah5IR9OLmfq5aYI&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gH4zmK7GL0a8ti0LxS9H4910nOYNgfj3tkxdSmmQ1uk5w&oe=6910CB0B",
  description: "Clean and affordable hostel conveniently located on Washington Drive.",
  location: "Maristel Bldg., Washington Drive, Brgy. Cruzada, Legazpi City, Albay",
  priceRange: "₱800 - ₱1,500",
},
{
  id: "60",
  name: "Hotel Liatris",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/551775919_2072907406823759_3716487753875037486_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGapZeMyLZrS6TAVnI6LVsn-zSw3DDWgVP7NLDcMNaBU6bqdHKEJhut6l2nYfp0Hc9uslsb48SZ8Dh3RWlDiReW&_nc_ohc=EOIFc8h4vd4Q7kNvwHvanqg&_nc_oc=AdnnEsC27BWynIfcHgDLB_V6vVkoL6OchSdW2fXBSAdIFyZLr5f8JQIvQoKj3LZOhxE&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gGYzEXASp_mHt55HjBv-R2dj8cqgYnXaczfLHtzjWflZg&oe=6910C5AD",
  description: "Unpretentious rooms in a budget-friendly hotel with warm service and a convenient location.",
  location: "Yashano Mall, Imelda Roces Ave., Brgy. Gogon, Legazpi City, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "61",
  name: "Newtown Hometel",
  image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/554112748_1885948799004554_1756525553064192192_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEZVnJVQNM6XCsx0xu6zo6Sp6UWhtOvWEanpRaG069YRsGOjcH7xdjpZBIKDACfl7iqEGDlevMw2T07W_dWvLAv&_nc_ohc=AxQ7y9Mo7nIQ7kNvwHlsuq2&_nc_oc=AdlFmJcKYLg4dw9Oie6HN7LSnIT0QUe0HjLS7EUkRqwy5D8Udz_n9c8XGHA3ZXRF55U&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gEFts3MVS_L7d7STr0zmRWoM8IPmimCe4ffQGW5gEsh0g&oe=6910D08F",
  description: "Newtown Hometel is a cozy place to stay during your vacation or business trips in the lovely city.",
  location: "F. Aquende St., Brgy. Bagumbayan, Washington Drive, Legazpi City",
  priceRange: "₱1,500 - ₱2,800",
},
{
  id: "62",
  name: "Nikyjm Hometel",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/504339103_979829297654098_8571992602946164494_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEb6hl92Qc-6sn7nAitirnfLUMntN7FMO4tQye03sUw7iVgObgTnOgCYSKqWnrEkHscHXzJKBkDH43DttKfEFZe&_nc_ohc=rswLL6tMtcoQ7kNvwHedlGp&_nc_oc=AdnAIIPpDRFboGIoq7_pjQQmYEYGl9cW24YnHeZBLGlY2h0dz6sjmx9YzyyGHSSmvRw&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gGn9KV2Y9xYNn_21gKRCU0Mi7Ig3I61GiFcYe9WiJTEgQ&oe=6910AB93",
  description: "Best find for cheap and comfortable stay in Nikyjm Hometel.",
  location: "Narra St., Pag Asa Brgy. 42, Rawis, Legazpi City",
  priceRange: "₱1,000 - ₱2,000",
},
{
  id: "63",
  name: "Palazzo de FMA, Inc./The Apple Peach House",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/489734860_1295749481829144_7472231780317387820_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFEu77dxHNEdzQOv04bQyn-AmTi7DnZlZYCZOLsOdmVloJ7t-kF4itpDF27IuJ8h1X5Gg-lUagq48hbZOYfsqeQ&_nc_ohc=9hTzGvMH80UQ7kNvwHbeDjk&_nc_oc=AdmmVDU0g0o1QijD0tyFutU662nYFxIKgC2xyGZjZ_cqOgsuiqq3TFiNJQ54566bpHU&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gGqqc0XDIr4tO8DPrff10lT9nkMaurBV2jF2PQyaQDlWg&oe=6910C60F",
  description: "The ApplePeach House is the only modern minimalist Art Gallery boutique hotel at the heart of Legazpi.",
  location: "Corner Rosario and Marquez St., Old Albay, Legazpi City",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "64",
  name: "Pinarik Eco Resort",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/553451081_1344994390374550_4261310752923158085_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHi9WQE3KKyAHgSVfoVUX84XXSkgUyVFdhddKSBTJUV2LQkiWOQ8KH2FzIi554LyWguytobJmjrLFncw0g6bBEe&_nc_ohc=rnfKmCK3mqwQ7kNvwFejanH&_nc_oc=AdmcZgzVaWpTOSaSY46P-04wwLEMxcMno1m-z0yV127oOIKBQYz_ZkxvZ7tjUd2R7Zw&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gEF2Vv63LNuTWU62o8aMx3FdrrBgF9wqmYz4Ab5nqgMwg&oe=6910DF68",
  description: "Surrounded by tropical vegetation and exotic plants, this place is hidden and away from the crowded city.",
  location: "Purok 3, Brgy. 9 Pinarik, Legazpi City",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "65",
  name: "Riserr Residences",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/552219695_803512795707532_6987880638023482661_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHyLxJRcHcLbmSHpisK8lDdvvn3byJ3702--fdvInfvTTVJYhNGzym7Eee2UfjBQ3tNAB_V_KBehqF1X_psECp8&_nc_ohc=waFRD6J5MJQQ7kNvwHLL6rD&_nc_oc=AdkqLeUTjZaS2GI3ydAMw-95NMxasUN0eAmUMA1avGyFu2nI5Ms9rbtaMNj7cSEt-7I&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gEKqrwgDk0oD1k-GApoqgsjdvjY1dyvGebxD07y-PWDNg&oe=6910D9E0",
  description: "Riserr Residences puts the best of Legazpi at your fingertips, making your stay both relaxing and enjoyable.",
  location: "#04 Brgy. 8 Bagumbayan, Washington Drive, Legazpi City",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "66",
  name: "RNR Suites",
  image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/554182062_24724757563854011_8187573567932059610_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGr9SeHEyUIr0j_nim558Rzqw2jlhVk6IurDaOWFWToi9ZB2j6opiXO2tTDk89ecyR3HhLXClc3o4qqTuU9ds09&_nc_ohc=_CIyQCOxpg4Q7kNvwGwscVQ&_nc_oc=Adky7NHW2wLb-Lt5iR0kW9Euj_OdT7l8sormG1_SxcawnvTD2aAexqvpDc65VYGecTI&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gEVUviW7q5YVg0dzVbzbEND2HxzqnhTHck4h0Hv3Y1tEg&oe=6910B09E",
  description: "RNR Suites provides a rooftop terrace and more. Treat yourself to a massage or other spa services.",
  location: "Vinzons St., Brgy. 5 Sagmin, Legazpi City",
  priceRange: "₱2,000 - ₱3,800",
},
{
  id: "67",
  name: "Sampaguita Tourist Inn Washington",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/553936619_1376353120570982_8961044540700911178_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGszh49fUnlRg33PAzukhOyo83j3MKY44GjzePcwpjjgSacBsBLawKoO4nuZxeVE0TQNxyclar4SP7bbenW3rSO&_nc_ohc=kIKyBZoJR88Q7kNvwHjf_R4&_nc_oc=AdnRgcfQT4runehXoYI1QLp7HOxnvAXBL3ty7DbkssCxeDYIARKzno1B9vLwPsPIedU&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gE3h6oMz6MVsLp1d04c76eRAE3eq6kocLWeM5ug2aw8vA&oe=6910CF9B",
  description: "Sampaguita Tourist Inn offers a budget-friendly environment with many helpful amenities designed to enhance your stay.",
  location: "Purok 1, Washington Drive, Cruzada, Legazpi City",
  priceRange: "₱900 - ₱1,800",
},
{
  id: "68",
  name: "Siville Inn Music Lounge and Restaurant",
  image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/553972407_794925516482527_8273850277091337449_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFYd_yBms6zVG9LwOMhhh0lcatiwA52bQJxq2LADnZtAmDGu5MEAYaJ3ZTGa_uOkZOyY_0NURHfJusM94tLrnWq&_nc_ohc=GlHvrCsirs4Q7kNvwEzrB6F&_nc_oc=AdkWkMARKUZy5dm0oyj11r6Yq2Wwz0VIJuBov8UUOElBtznDlOb4hf0ESAalR14zpzI&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gGDTdFvyTAuyy_bEiZqWvQ8Kc5FF5aMG_Cf3tEI9VxEcQ&oe=6910B729",
  description: "Splendid service together with a wide range of facilities provided will make you complain for nothing during your stay.",
  location: "#667 Vibal St., Brgy. 8 Bagumbayan, Legazpi City",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "69",
  name: "Shell Inn",
  image: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/504339103_811715458013404_6875977672090256328_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH20x325wg6y8UA0H6Mh0gvlCT_WuOJQvGUJP9a44lC8T_G79pY8abR0qkEsW1F5I4_u5XDt5od36e1QCT0rkKN&_nc_ohc=uwebsxr9B6EQ7kNvwG17fn7&_nc_oc=AdkFj9HNMHoz0LysBshtT1NVwn5-XuKocgamXkdlsECeIRIRF6xoV2Hhb1NOQD9vaBw&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&oh=03_Q7cD3gHVP4yV6V-_shpQmlXCDCYmhpM-2t6L-sIDyCsyrl6JlQ&oe=6910AF77",
  description: "At Shell Inn, your comfort and satisfaction come first. They look forward to welcoming you to Legazpi.",
  location: "2nd Floor Purok 7, Brgy. 47 Arimbay, Legazpi City",
  priceRange: "₱1,000 - ₱2,000",
},
{
  id: "70",
  name: "Vicente’s Residences",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1y_SzmY1XgMGhlfgwggGzGk5TtBL1xEGTQ&s",
  description: "Vicente Residences is a wise choice for travelers visiting Legazpi City.",
  location: "#47 Sikatuna St., Brgy. 13 Ilawod West, Legazpi City",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "71",
  name: "Magayon Hotel",
  image: "https://images.trvl-media.com/lodging/14000000/13100000/13095900/13095801/c39924a6.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  description: "Magayon Hotel offers impeccable service and all the essential amenities to travelers.",
  location: "Brgy. 33, PNR-Peñaranda St., Iraya, Legazpi City",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "72",
  name: "Mayon View Garden Apartelle",
  image: "https://pix10.agoda.net/hotelImages/301315/-1/416b4fb31eecff109e9ebc606fb0b3ad.jpg?ca=12&ce=1&s=414x232",
  description: "Mayon View Garden Apartelle is very popular among tourists. Smooth check-in/out process, flexible policies, and friendly management ensure great satisfaction.",
  location: "382 Narra St., Pag Asa, Rawis, Legazpi City",
  priceRange: "₱1,500 - ₱2,800",
},
{
  id: "73",
  name: "Meaco Royal Hotel Inc.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXagFSd6O2eyv_v3QEqL2TYwWp-6Ba4ftgg&s",
  description: "Getting in and around Legazpi is a breeze when staying at Meaco Royal Hotel-Legazpi, located just minutes away from the city center.",
  location: "Peñaranda St., Brgy. Oro Site, Legazpi City",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "74",
  name: "Legazpi Amigos Hometel",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGWFa3OozGKZCOhxVxNrZfv1EQ2_VbactnA&s",
  description: "Located at the heart of the city, this hostel is perfect for backpackers visiting the best of Legazpi City without breaking the bank.",
  location: "J. Estevez St., Guevarra Subd., Legazpi City",
  priceRange: "₱900 - ₱1,800",
},
{
  id: "75",
  name: "La Roca Veranda Suites and Restaurant",
  image: "https://pix10.agoda.net/hotelImages/285528/0/1a97b86aa97d92f78dae1fab591835f4.jpeg?s=414x232",
  description: "Finding an ideal romantic small hotel in Legazpi does not have to be difficult. La Roca Veranda Suites is a nice option for travelers.",
  location: "Lakandula Drive, Gogon, Legazpi City",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "76",
  name: "Casa Basilisa Inc.",
  image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/580247629.jpg?k=eea658e69e99e3c6a55ea523011a0767f8f63b01e9fea2f6c9bde9cbd0bc9fb0&o=&hp=1",
  description: "This hotel is within the region of Cagsawa Ruins and Mayon Volcano. Rooms stay in one of 19 guest rooms featuring flat-screen TVs, cable, showers, complimentary toiletries, and slippers.",
  location: "Diversion Road, San Rafael, Guinobatan, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "77",
  name: "Ooh La La Paradise Spring Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uGZNeNXBpOkJGDUaXVIQfIbxJA8Nf_6GMg&s",
  description: "A beautiful hidden paradise deep inside Guinobatan, Albay, with 4 large spring-water swimming pools, landscaped grounds, and leisure activities such as beach-volley, tennis, ping-pong, billiards, basketball, and badminton.",
  location: "Muladdbucad Grande, Guinobatan, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "78",
  name: "Mayon Garden Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbzsDklQ8RMXqTeZxnR1Go9a03L83SDz4xA&s",
  description: "Nature-inspired paradise resort at the foot of the glorious Mayon Volcano in Albay, Philippines.",
  location: "Purok 8, Masarawag, Guinobatan, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "79",
  name: "Kris-Faith of Noah Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH15l7XZbWTb7aEtle5FcHICOdbNvw5mNfBA&s",
  description: "Popular hotel resort in Guinobatan, perfect for friends and family outings with affordable accommodation.",
  location: "261 P-5, Brgy. San Francisco, Guinobatan, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "80",
  name: "Kayla & Carly Beach Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpwZRWtCRCCR54T_ARbStj9dsO327EnpyPw&s",
  description: "A resort that lets you breathe fresh air, recharge, and enjoy a relaxing environment.",
  location: "Brgy. Tapel, Oas, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "81",
  name: "Palacio Beach Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSnB0gnVBVpgE6330iv6m8d8gWEyGmSwDKQ&s",
  description: "A must-visit beach resort offering perfect stay, excellent services, and wonderful experiences.",
  location: "Sitio Imacoto, Cagmanaba, Oas, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "82",
  name: "Sabando Ocampo Beach Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9qJ-fu9F1HBeB4C5hw1qBl2qOflOwbdblw&s",
  description: "Enjoy stand-up paddleboarding and other watersports. Ideal for team buildings, seminars, and events.",
  location: "Brgy. Maramba, Oas, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "83",
  name: "Victoria Bay Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP4CTIarQ6doE7UbMR8b7gN4-5unbPqI-IA&s",
  description: "Offers various amenities including hotel, restaurant, function hall, swimming pool, and watersports activities.",
  location: "Sitio Imacoto, Brgy. Cagmanaba, Oas, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "84",
  name: "Villa Sofia Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPR5-bkpiFN_nubM1lSmgth0W_bg0Z5KnUA&s",
  description: "A great resort with amazing food, excellent service, and stunning sunset views.",
  location: "Sitio Imacoto, Brgy. Cagmanaba, Oas, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "85",
  name: "Banana Tourist Villa",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVxcBCLUUJ6MlhwhMiVlGXo_b-fkeazhMTg&s",
  description: "Banana Tourist Villa provides a cozy and affordable stay for travelers exploring Albay. The villa offers clean, comfortable rooms and a welcoming ambiance that makes guests feel at home. Its convenient location allows easy access to nearby attractions, dining spots, and local transportation hubs.",
  location: "Alnay, Polangui, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "86",
  name: "Dreamwave Beach Resort, Inc. / Dreamwave Hotel Polangui",
  image: "https://pix10.agoda.net/hotelImages/530/5302289/5302289_18071014310066764847.jpg?ca=0&ce=1&s=414x232",
  description: "With a wide range of services catered to both business and leisure travelers, Dreamwave Hotel Polangui ensures you get the best out of your stay.",
  location: "Diversion Road, Brgy. Ubaliw, Polangui, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "87",
  name: "RR Beach Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHM0QJZi82aAPH8E8lhm8Q5uTwKpXHBJvCg&s",
  description: "Situated near Malidong and close to Cagbatana Point, this tropical beach offers relaxing ocean waves and gorgeous shiny shells.",
  location: "Sitio Cagbatano, Brgy. Malidong, Pio Duran, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "88",
  name: "Alfredo’s Camp Homestay",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfdsITnbZkiRR2LdZnaYN-GGosuzn4aH1EQ&s",
  description: "Relaxing, secured, and safe beach-cation accommodation at low and affordable prices.",
  location: "Sitio Tambac, Maonon, Ligao City, Albay",
  priceRange: "₱800 - ₱1,500",
},
{
  id: "89",
  name: "Dajay Homestay",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQz8zDNDjG5hbJ5njLflq05MMH9s_OS8P5g&s",
  description: "Private homestay offering your family and friends a chance to enjoy the beach view and socio-cultural activities while relaxing.",
  location: "Sitio Tambac, Maonon, Ligao City, Albay",
  priceRange: "₱900 - ₱1,600",
},
{
  id: "90",
  name: "La Fontana Beach Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOitty3IOoomzZTEuPUE0CdWpMwDYQe4VzcQ&s",
  description: "A good place to chill and relax with the whole family, assuring every aspect of your stay exceeds expectations.",
  location: "Brgy. Cabarian, Ligao City, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "91",
  name: "Queen’s Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tD59tCVEDxExNTQRLWGq5bos6TXWN3634g&s",
  description: "The resort offers a pleasing ambiance with various beautiful spots for relaxation.",
  location: "Purok 7, Herrera, Ligao City, Albay",
  priceRange: "₱1,500 - ₱3,200",
},
{
  id: "92",
  name: "Elkanville Hotel",
  image: "https://pix10.agoda.net/hotelImages/10774510/-1/1a66b562d80248ad1601dac5417c5e3d.jpg?ca=9&ce=1&s=414x232",
  description: "Committed to making your stay the ultimate luxury experience. Enjoy a stress-free and comforting staycation.",
  location: "Sitio Togbon, Batang, Ligao City, Albay",
  priceRange: "₱2,000 - ₱4,000",
},
{
  id: "93",
  name: "Bloom’s Beach Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YWO43F9ihR7hHTG_Mvq65FjUo6rvP7js3A&s",
  description: "A nice and scenic beach place with affordable price and accommodation.",
  location: "Sitio Tambac, Maonon, Ligao City, Albay",
  priceRange: "₱900 - ₱1,800",
},
{
  id: "94",
  name: "Casa de Misericordia Retreat House & Pilgrim Center",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjh49gu-qwTwW_toKNffAFFh5DqTKoqJOmQ&s",
  description: "Accommodation near Kawa-Kawa Hill and Nature Park, northeast of Ranao Lake, providing peaceful and reflective stay.",
  location: "811 Carmel Heights, Kawa Kawa, Taburan, Ligao City, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "95",
  name: "Cocofarm Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJUKUiBz1zY7zk9A-zdKfADpsFRAL_vDm-g&s",
  description: "Cocofarm Resort offers a serene getaway surrounded by lush coconut groves and nature’s tranquility. Guests can enjoy eco-friendly accommodations, fresh local cuisine, and a peaceful atmosphere ideal for relaxation. It’s the perfect destination for those seeking a refreshing escape from the city while experiencing Albay’s rural charm.",
  location: "Purok 5, Brgy. Batang, Ligao City, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "96",
  name: "David Hometel",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vXVx4Zc0TZkOx6byMpsJJw3DRUJhaoMv9g&s",
  description: "Offers fully refundable rates with free cancellation, free WiFi, parking, and features a restaurant.",
  location: "Guilid, Ligao City, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "97",
  name: "Don Manuel Rendezvous Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTv5hoA_-Fy3LZGQlg7nMlGtpA258G4KA-tQ&s",
  description: "Situated northwest of Basag River and east of Basay River, a great resort for relaxing and enjoyable stay.",
  location: "Purok 7 Borokborokan, Brgy. Herrera, Ligao City, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "98",
  name: "Francis Lodge",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvE9kHc5zK7WLW5rTbnlZJJkisnFvsiSK-g&s",
  description: "Featuring a shared lounge and coffee shop, perfect for a relaxed stay in Ligao City.",
  location: "Purok 5, Tambo, Ligao City, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "99",
  name: "Gulod Tourist Inn",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PJwV2S_ZNc6aBgjedMdmPcuZcQKushNx-g&s",
  description: "Situated near Kawa-Kawa Hill and Nature Park, offering convenient access to local attractions.",
  location: "California Village, Kawa Kawa, Tuburan, Ligao City, Albay",
  priceRange: "₱1,200 - ₱2,500",
},
{
  id: "100",
  name: "Hotel Marites",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPsA5a6ACVvR4zlj273KJyoZ9tz10UF5cAA&s",
  description: "Rooms equipped with air conditioning and cable TV, offering comfortable and convenient services.",
  location: "Sta. Ana Street, Tinago, Ligao City, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "101",
  name: "Hotel Villa de California, Inc.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLYIJgQTcp8u9BhOA0QbSrQalPi5uI2rmAg&s",
  description: "Top amenities including free WiFi in the lobby, swimming pool, spa, restaurant, hotel bar, and gym.",
  location: "618 Maharlika Highway, corner California Village, Ligao City, Albay",
  priceRange: "₱2,500 - ₱4,500",
},
{
  id: "102",
  name: "Park View Hotel",
  image: "https://pix10.agoda.net/hotelImages/729964/-1/2165d465c4c687a997f85610fc182f3d.jpg?ca=9&ce=1&s=414x232",
  description: "Excellent service and superior facilities make for an unforgettable stay. All rooms are designed to make guests feel at home.",
  location: "Blumentritt Street, Guilid, Ligao City, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "103",
  name: "Punta Almara Beach Resort Station 1",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-1vZlSdXCia6FooNRwNlWiSWECHDwecW5g&s",
  description: "Beach resort featuring a mini Jacuzzi, dazzling light show in the pool and fountain.",
  location: "Brgy. Guilid, Ligao City, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "104",
  name: "Punta Almara Beach Resort Station 2 & 3",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMt1zkx8xrG4ioBmkEhY0ZLjqKPMxvIKJzw&s",
  description: "Beachfront resort with mini Jacuzzi, light show in the pool, and beautiful seaside ambiance.",
  location: "Sitio Tambac, Brgy. Maonon, Ligao City, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "105",
  name: "Shore Laterazza Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzGvjiXE7KEWsQGjrGEm0Tk_FJrhU-dE6NA&s",
  description: "Starry night at the shore by La Terazza, the coziest place to hang out on the beach.",
  location: "Sitio Tambac, Brgy. Maonon, Ligao City, Albay",
  priceRange: "₱1,500 - ₱3,000",
},
{
  id: "106",
  name: "White Vision Guest House",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBCTatagFV2ALF76dsyLEtdynpgoLGHRm8w&s",
  description: "Comfortable guest house with affordable accommodation. Ideal for families, friends, or couples seeking a homey atmosphere.",
  location: "308 San Pascual St., Brgy. Pandan, Ligao City, Albay",
  priceRange: "₱900 - ₱1,800",
},
{
  id: "107",
  name: "Josoc Inn",
  image: "https://ligaocity.albay.gov.ph/wp-content/uploads/2018/01/josoc.jpg",
  description: "Travelers’ lodge situated near Bicol Regional Science High School and close to Ligao Station.",
  location: "Brgy. Bonga, Ligao City, Albay",
  priceRange: "₱1,000 - ₱2,000",
},
{
  id: "108",
  name: "La Veranda Beach Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfeQ3Scz9rPa8P-M4ySp5ViLkUh5FieJtKA&s",
  description: "Excellent service and superior facilities ensure an unforgettable stay. Rooms exude an atmosphere of total peace and harmony.",
  location: "Sitio Tambac, Brgy. Maonon, Ligao City, Albay",
  priceRange: "₱1,800 - ₱3,500",
},
{
  id: "109",
  name: "Ligao Bed and Breakfast",
  image: "https://res.klook.com/klook-hotel/image/upload/travelapi/28000000/27030000/27028200/27028145/69195658_z.jpg",
  description: "A good choice when visiting Ligao, offering great hospitality and affordable price.",
  location: "32 San Jose Street, Brgy. Dunao, Ligao City, Albay",
  priceRange: "₱900 - ₱1,800",
},
{
  id: "110",
  name: "Ligao 559 Apartelle",
  image: "https://lh3.googleusercontent.com/places/AAcXr8qrUcldXUevXM-4SqUyHwzdbk3Up0EtsuVjfl4Ufo56tUg5Ff1RhXIJTFSqaXFwxOl29VkMFeu_Hb7Yt1Mk229WHnrUic6drig=s1600-w740-h740",
  description: "Accommodation situated northwest of Malison River and southeast of Cabilogan River, offering comfortable stay.",
  location: "Brgy. Tomolin, Ligao City, Albay",
  priceRange: "₱1,200 - ₱2,500",
}
  ]

const HotelsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    price: { min: "", max: "" },
  });

  useEffect(() => {
    let result = hotels;

    // Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(term) ||
          hotel.location.toLowerCase().includes(term) ||
          hotel.description.toLowerCase().includes(term)
      );
    }

    // Price Range Filter
    if (filters.price.min || filters.price.max) {
      result = result.filter((hotel) => {
        const [lowStr, highStr] = hotel.priceRange
          .replace(/[₱,]/g, "")
          .split(" - ")
          .map((v) => parseInt(v.trim(), 10));

        const low = isNaN(lowStr) ? 0 : lowStr;
        const high = isNaN(highStr) ? Infinity : highStr;
        const min = filters.price.min ? parseInt(filters.price.min) : 0;
        const max = filters.price.max ? parseInt(filters.price.max) : Infinity;

        return high >= min && low <= max;
      });
    }

    setFilteredHotels(result);
  }, [searchTerm, filters]);

  const clearFilters = () => {
    setSearchTerm("");
    setFilters({
      price: { min: "", max: "" },
    });
  };

  function onHotelSelect(id: string): void {
    console.log("Selected hotel:", id);
  }

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Accommodations in Albay
            </h2>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search hotels..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowFilters(true)}
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              {(searchTerm || filters.price.min || filters.price.max) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="flex-shrink-0 gap-1"
                >
                  <X className="h-4 w-4" /> Clear
                </Button>
              )}
            </div>
          </div>

          {/* Hotel List */}
          {filteredHotels.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No hotels found
              </h3>
              <p className="text-gray-500 max-w-md">
                We couldn't find any hotels matching your search criteria. Try
                adjusting your filters or search term.
              </p>
              <Button onClick={clearFilters} className="mt-4">
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="flex justify-center">
                  <HotelCard
                    {...hotel}
                    onClick={() => onHotelSelect(hotel.id)}
                  />
                </div>
              ))}
            </div>
          )}

          {filteredHotels.length > 0 && (
            <div className="text-center text-gray-500 mt-4">
              Showing {filteredHotels.length} of {hotels.length} accommodations in Albay
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelsList;