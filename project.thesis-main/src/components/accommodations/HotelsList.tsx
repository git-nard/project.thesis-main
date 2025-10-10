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
  rating: number;
  amenities: string[];
}

interface HotelsListProps {
  hotels?: Hotel[];
  onHotelSelect?: (hotelId: string) => void;
}

const HotelsList = ({
  hotels = [
    {
      id: "1",
      name: "Mayon View Resort & Spa",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1740&q=80",
      description:
        "Luxury resort with stunning views of Mayon Volcano, featuring a spa, infinity pool, and fine dining restaurant.",
      location: "Legazpi City, Albay",
      priceRange: "₱5,000 - ₱12,000",
      rating: 4.8,
      amenities: [
        "Free WiFi",
        "Swimming Pool",
        "Restaurant",
        "Spa",
        "Fitness Center",
      ],
    },
    {
      id: "2",
      name: "Albay Boutique Hotel",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1470&q=80",
      description:
        "Charming boutique hotel in the heart of Legazpi City with traditional Filipino design elements and modern amenities.",
      location: "Legazpi City, Albay",
      priceRange: "₱3,000 - ₱6,000",
      rating: 4.5,
      amenities: [
        "Free WiFi",
        "Breakfast Included",
        "Air Conditioning",
        "Room Service",
      ],
    },
    {
      id: "3",
      name: "Daraga Homestay",
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1470&q=80",
      description:
        "Authentic Filipino homestay experience with local hosts, home-cooked meals, and cultural immersion opportunities.",
      location: "Daraga, Albay",
      priceRange: "₱1,500 - ₱2,500",
      rating: 4.7,
      amenities: [
        "Free WiFi",
        "Breakfast Included",
        "Local Guide",
        "Cultural Activities",
      ],
    },
    {
      id: "4",
      name: "Cagsawa Ruins Inn",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Budget-friendly accommodation near the historic Cagsawa Ruins with basic amenities and friendly staff.",
      location: "Cagsawa, Albay",
      priceRange: "₱1,000 - ₱2,000",
      rating: 4.0,
      amenities: ["Free WiFi", "Air Conditioning", "Tour Arrangements"],
    },
    {
      id: "5",
      name: "Tabaco Bay Resort",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1749&q=80",
      description:
        "Beachfront resort in Tabaco City with water sports activities, seafood restaurant, and relaxing ocean views.",
      location: "Tabaco City, Albay",
      priceRange: "₱4,000 - ₱8,000",
      rating: 4.3,
      amenities: [
        "Beachfront",
        "Swimming Pool",
        "Restaurant",
        "Water Sports",
        "Free WiFi",
      ],
    },
    {
      id: "6",
      name: "Tiwi Hot Springs Hotel",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Relaxing hotel with natural hot spring pools, spa treatments, and scenic mountain views in Tiwi.",
      location: "Tiwi, Albay",
      priceRange: "₱3,500 - ₱7,000",
      rating: 4.6,
      amenities: [
        "Hot Springs",
        "Spa",
        "Restaurant",
        "Mountain View",
        "Free WiFi",
      ],
    },
    {
  id: "7",
  name: "Casa Cecilia Gamboa’s Orchard",
  image: "https://images.unsplash.com/photo-1578685704082-7cfb84b5c33a?auto=format&fit=crop&w=1470&q=80",
  description: "Cool atmosphere and cozy accommodation surrounded by nature.",
  location: "Purok 1, San Jose, Malilipot, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.5,
  amenities: ["Free WiFi", "Parking", "Breakfast Included"],
},
{
  id: "8",
  name: "Misibis Resort and Hotel Management Inc.",
  image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101b?auto=format&fit=crop&w=1470&q=80",
  description: "Your tropical island getaway — a private hideaway built on a pristine beach.",
  location: "Sitio Mosboron, Brgy. Misibis, Bacacay, Albay",
  priceRange: "₱10,000 - ₱25,000",
  rating: 4.9,
  amenities: ["Beachfront", "Swimming Pool", "Restaurant", "Spa"],
},
{
  id: "9",
  name: "Patio de San Jose Resort and Convention Center, Inc.",
  image: "https://images.unsplash.com/photo-1582719478145-b3b4e7d1d2e9?auto=format&fit=crop&w=1470&q=80",
  description: "A perfect place to relax, breathe fresh air, and enjoy the ocean breeze with your loved ones.",
  location: "Purok 5, Brgy. San Jose, Malilipot, Albay",
  priceRange: "₱3,000 - ₱6,000",
  rating: 4.6,
  amenities: ["Swimming Pool", "Restaurant", "Event Hall", "Free WiFi"],
},
{
  id: "10",
  name: "Bienvinida Hotel and Resort",
  image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1470&q=80",
  description: "Clean and cool waters with a relaxing natural environment.",
  location: "Purok 4, Brgy. San Juan, Sto. Domingo, Albay",
  priceRange: "₱2,500 - ₱5,000",
  rating: 4.3,
  amenities: ["Swimming Pool", "Free Parking", "Restaurant"],
},
{
  id: "11",
  name: "Costal View Beach Resort",
  image: "https://images.unsplash.com/photo-1559599238-6b8c6d3b2b8d?auto=format&fit=crop&w=1470&q=80",
  description: "Offers accommodations from standard to executive rooms, plus a function hall for special events.",
  location: "Calayucay, Sto. Domingo, Albay",
  priceRange: "₱3,000 - ₱6,000",
  rating: 4.4,
  amenities: ["Beachfront", "Function Hall", "Restaurant", "Free WiFi"],
},
{
  id: "12",
  name: "Costa Palmera Resort and Seaside Apartel",
  image: "https://images.unsplash.com/photo-1519821172141-b5d8f6e3a0b1?auto=format&fit=crop&w=1470&q=80",
  description: "Relax by the pool with a glass of mango shake in hand and enjoy a seaside escape.",
  location: "Purok 3, Calayucay, Sto. Domingo, Albay",
  priceRange: "₱3,000 - ₱7,000",
  rating: 4.5,
  amenities: ["Swimming Pool", "Restaurant", "Beach Access"],
},
{
  id: "13",
  name: "Dorotea Resort and Spa",
  image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1470&q=80",
  description: "A holistic place for relaxation and wellness that reinvigorates the mind and soul.",
  location: "Brgy. Cajugotan, Sto. Domingo, Albay",
  priceRange: "₱3,000 - ₱6,000",
  rating: 4.7,
  amenities: ["Spa", "Restaurant", "Wellness Center", "Free WiFi"],
},
{
  id: "14",
  name: "Facade Hotel",
  image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101b?auto=format&fit=crop&w=1470&q=80",
  description: "Experience Tabaco’s warmth, dining, entertainment, and tour arrangements in one place.",
  location: "A.A. Berces St., Tabaco City, Albay",
  priceRange: "₱2,500 - ₱5,500",
  rating: 4.2,
  amenities: ["Restaurant", "Free WiFi", "Room Service"],
},
{
  id: "15",
  name: "HCG Residence Mansion",
  image: "https://images.unsplash.com/photo-1578685704082-7cfb84b5c33a?auto=format&fit=crop&w=1470&q=80",
  description: "Affordable hotel and restaurant with an event venue and Zumba sessions on the top deck.",
  location: "Ziga Avenue, Tabaco City, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.3,
  amenities: ["Restaurant", "Event Space", "Free WiFi"],
},
{
  id: "16",
  name: "Palces Resort",
  image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1470&q=80",
  description: "Features rooms, dormitory sleeping, swimming pool, tennis and basketball court, and mini chapel.",
  location: "San Francisco, Malilipot, Albay",
  priceRange: "₱2,000 - ₱5,000",
  rating: 4.4,
  amenities: ["Swimming Pool", "Sports Facilities", "Chapel", "Free Parking"],
},
{
  id: "17",
  name: "Reyes Beach Resort and Restaurant",
  image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1470&q=80",
  description: "A beachfront getaway offering relaxation, good food, and coastal views.",
  location: "Purok 2, Brgy. Calayucay, Sto. Domingo, Albay",
  priceRange: "₱2,500 - ₱6,000",
  rating: 4.3,
  amenities: ["Beachfront", "Restaurant", "Free WiFi"],
},
{
  id: "18",
  name: "Manhattan Beach Resort",
  image: "https://images.unsplash.com/photo-1559599238-6b8c6d3b2b8d?auto=format&fit=crop&w=1470&q=80",
  description: "Overlooking Albay Gulf with a scenic Mayon Volcano view and black sand beach.",
  location: "Brgy. Calayucay, Sto. Domingo, Albay",
  priceRange: "₱3,000 - ₱6,500",
  rating: 4.6,
  amenities: ["Beachfront", "Restaurant", "Ocean View", "Free Parking"],
},
{
  id: "19",
  name: "Meaco Royal Hotel, Inc.",
  image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1470&q=80",
  description: "Affordable yet quality accommodation with great service and comfort.",
  location: "Ziga Avenue, Divino Rostro, Tabaco City, Albay",
  priceRange: "₱1,500 - ₱3,000",
  rating: 4.2,
  amenities: ["Air Conditioning", "Free WiFi", "Room Service"],
},
{
  id: "20",
  name: "Jaylyn Traveller’s Inn",
  image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1470&q=80",
  description: "Located near Tabaco seaport, perfect for travelers seeking convenience and comfort.",
  location: "Purok 3, Bonifacio St., Brgy. Cormidal, Tabaco City, Albay",
  priceRange: "₱1,200 - ₱2,500",
  rating: 4.1,
  amenities: ["Free WiFi", "Parking", "Air Conditioning"],
},
{
  id: "21",
  name: "JJ Midcity Inn",
  image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1470&q=80",
  description: "Warm and cozy place to rest between your travels with excellent comfort.",
  location: "Herra St., Tabaco City, Albay",
  priceRange: "₱1,500 - ₱3,000",
  rating: 4.3,
  amenities: ["Free WiFi", "Air Conditioning", "Room Service"],
},
{
  id: "22",
  name: "Hotel Fina",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
  description: "Luxury and relaxation await with a wide range of amenities and top-tier service.",
  location: "A.A. Berces St., Quinale, Tabaco City, Albay",
  priceRange: "₱4,000 - ₱8,000",
  rating: 4.8,
  amenities: ["Swimming Pool", "Restaurant", "Free WiFi", "Fitness Center"],
},
{
  id: "23",
  name: "Tabaco Royal Mansion Hotel",
  image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1470&q=80",
  description: "Offers a restaurant, private parking, free bikes, bar, and a lush garden view.",
  location: "Zone 7, Brgy. Panal, Tabaco City, Albay",
  priceRange: "₱3,000 - ₱6,000",
  rating: 4.5,
  amenities: ["Restaurant", "Parking", "Garden", "Bar"],
},
{
  id: "24",
  name: "Dos Montes Spring Resort, Inc.",
  image: "https://images.unsplash.com/photo-1555992336-03a23c1c0d8b?auto=format&fit=crop&w=1470&q=80",
  description: "Breathtaking mountain views and relaxing natural springs for a rejuvenating stay.",
  location: "Brgy. 1 Poblacion, Malilipot, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.4,
  amenities: ["Spring Water Pool", "Mountain View", "Restaurant"],
},
{
  id: "25",
  name: "Casa Simeon",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "A spotless and well-maintained bed and breakfast blending nostalgia with modern style.",
  location: "#1 Bes Street, Brgy. 13 Poblacion, Bacacay, Albay",
  priceRange: "₱3,000 - ₱5,000",
  rating: 4.7,
  amenities: ["Breakfast Included", "Restaurant", "Air Conditioning"],
},
{
  id: "26",
  name: "Dhio Endheka Spring Resort",
  image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1470&q=80",
  description: "Perpetually fed by cool mountain streams — vibrant, refreshing, and peaceful.",
  location: "Mayon Crossing, Brgy. Buang, Tabaco City, Albay",
  priceRange: "₱2,000 - ₱4,500",
  rating: 4.5,
  amenities: ["Spring Water", "Mountain View", "Restaurant", "Free WiFi"],
},
{
  id: "27",
  name: "Parong Bermuda Resort",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
  description: "A relaxing resort nestled in Parong, Pawa, Manito — perfect for quiet getaways surrounded by nature.",
  location: "Purok 4, Parong, Pawa, Manito, Albay",
  priceRange: "₱1,000 - ₱2,500",
  rating: 4.3,
  amenities: ["Resort", "Swimming Pool", "Nature View"],
},
{
  id: "28",
  name: "Ma Nel’s Hotel",
  image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?auto=format&fit=crop&w=1470&q=80",
  description: "Where your vacation feels like home — comfort and relaxation for travelers in Camalig.",
  location: "Crossing Ilawod, Camalig, Albay",
  priceRange: "₱1,200 - ₱2,800",
  rating: 4.4,
  amenities: ["Free WiFi", "Restaurant", "Parking"],
},
{
  id: "29",
  name: "Alinchlo Tourist Inn",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "New, cozy, and clean at a very affordable price — an ideal place to stay in Daraga.",
  location: "Purok 2, Tagas, Daraga, Albay",
  priceRange: "₱1,000 - ₱2,000",
  rating: 4.2,
  amenities: ["Affordable", "Clean Rooms", "Accessible Location"],
},
{
  id: "30",
  name: "Apihap Spa Hotel",
  image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1470&q=80",
  description: "A distinct addition to Daraga — a smart choice for travelers seeking wellness and relaxation.",
  location: "Ardhil Subdivision, Lakandula Drive, Tagas, Daraga, Albay",
  priceRange: "₱1,800 - ₱3,500",
  rating: 4.5,
  amenities: ["Spa", "Restaurant", "WiFi", "Massage"],
},
{
  id: "31",
  name: "Ben Spring Resort",
  image: "https://images.unsplash.com/photo-1582719478170-2c8b5b1a5c68?auto=format&fit=crop&w=1470&q=80",
  description: "A refreshing swimming destination located in Tagas, Daraga — enjoy cool waters and great amenities.",
  location: "Purok 4, Brgy. Tagas, Daraga, Albay",
  priceRange: "₱800 - ₱1,500",
  rating: 4.3,
  amenities: ["Swimming Pool", "Picnic Area", "Parking"],
},
{
  id: "32",
  name: "Casa Bicolandia Suites",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Splendid service and modern facilities — ideal for both business and leisure stays.",
  location: "#10 Malvar St., Brgy. Kimantong, Daraga, Albay",
  priceRange: "₱2,000 - ₱3,800",
  rating: 4.6,
  amenities: ["Free Breakfast", "Conference Hall", "WiFi"],
},
{
  id: "33",
  name: "Casa Lorenzo",
  image: "https://images.unsplash.com/photo-1590490360181-2e6e6f3d3b17?auto=format&fit=crop&w=1470&q=80",
  description: "One of the best function halls in the province — perfect for events and gatherings.",
  location: "Tagas, Daraga, Albay",
  priceRange: "₱1,500 - ₱3,000",
  rating: 4.4,
  amenities: ["Event Hall", "Parking", "WiFi"],
},
{
  id: "34",
  name: "FJ Manila Hotel",
  image: "https://images.unsplash.com/photo-1600047500937-19049c4d9838?auto=format&fit=crop&w=1470&q=80",
  description: "Affordable and quality stay along Maharlika Highway — comfort meets accessibility.",
  location: "Maharlika Highway, Brgy. San Roque, Daraga, Albay",
  priceRange: "₱1,200 - ₱2,500",
  rating: 4.3,
  amenities: ["Restaurant", "WiFi", "Parking"],
},
{
  id: "35",
  name: "Innbox",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
  description: "Affordable container-style accommodation made from recycled shipping containers — eco-friendly and creative.",
  location: "Purok 3, Brgy. Maroroy, Daraga, Albay",
  priceRange: "₱800 - ₱1,500",
  rating: 4.2,
  amenities: ["Eco-friendly", "Affordable", "Parking"],
},
{
  id: "36",
  name: "S & L Apartelle",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "Colorful, spacious, and well-maintained rooms perfect for short or long stays.",
  location: "Purok 3, Brgy. Kimantong, Daraga, Albay",
  priceRange: "₱1,000 - ₱2,200",
  rating: 4.1,
  amenities: ["Spacious Rooms", "WiFi", "Parking"],
},
{
  id: "37",
  name: "Todays Inn and Suites",
  image: "https://images.unsplash.com/photo-1623690791377-5fdf67d3b87a?auto=format&fit=crop&w=1470&q=80",
  description: "Quiet place to relax with parking space for each room at the most affordable rates.",
  location: "1996 Velasco St., Doña Maria Subd., Daraga, Albay",
  priceRange: "₱900 - ₱2,000",
  rating: 4.2,
  amenities: ["Parking", "WiFi", "Affordable"],
},
{
  id: "38",
  name: "Villa Amada Hotel",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Offers comfort, service, and amenities for a memorable stay in Daraga.",
  location: "Rizal Street, Sagpon, Daraga, Albay",
  priceRange: "₱1,800 - ₱3,500",
  rating: 4.5,
  amenities: ["Restaurant", "WiFi", "Conference Hall"],
},
{
  id: "39",
  name: "New Blossoms Traveller’s Hauz",
  image: "https://images.unsplash.com/photo-1623690791377-5fdf67d3b87a?auto=format&fit=crop&w=1470&q=80",
  description: "Relaxing rooms with massage and food delivery — comfort meets convenience.",
  location: "Doña Maria Subd., Tagas, Daraga, Albay",
  priceRange: "₱1,200 - ₱2,800",
  rating: 4.3,
  amenities: ["Massage", "Room Service", "WiFi"],
},
{
  id: "40",
  name: "Alicia Hotel and Convention Center",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
  description: "Conveniently located minutes away from Legazpi City center — offering modern amenities and event spaces.",
  location: "A. Aquende Drive, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.5,
  amenities: ["Conference Hall", "Free WiFi", "Restaurant"],
},
{
  id: "41",
  name: "Hotel Inigo",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Offers the best blends of coffee by Nespresso and cozy rooms for both leisure and business stays.",
  location: "Rizal St., Brgy. 18, Cabagñan, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,500",
  rating: 4.6,
  amenities: ["Café", "Restaurant", "WiFi", "Event Hall"],
},
{
  id: "42",
  name: "Hotel St. Ellis",
  image: "https://images.unsplash.com/photo-1600047500937-19049c4d9838?auto=format&fit=crop&w=1470&q=80",
  description: "Upscale rooms with quilted headboards, flat screens, tea/coffee-making facilities, and elegant suites.",
  location: "Brgy. 31-Centro-Baybay (POB), Legazpi City, Albay",
  priceRange: "₱3,000 - ₱5,000",
  rating: 4.7,
  amenities: ["Free WiFi", "Restaurant", "Spa", "Conference Room"],
},
{
  id: "43",
  name: "La Venezia Hotel & Spa",
  image: "https://images.unsplash.com/photo-1590490360181-2e6e6f3d3b17?auto=format&fit=crop&w=1470&q=80",
  description: "Stress-free stay with Wi-Fi, taxi, and car hire services for a convenient Legazpi experience.",
  location: "Renaissance Gardens, Washington Drive, Brgy. 40-Cruzada, Legazpi City, Albay",
  priceRange: "₱2,500 - ₱4,800",
  rating: 4.5,
  amenities: ["Spa", "Car Hire", "Restaurant", "WiFi"],
},
{
  id: "44",
  name: "Legazpi Sentro Hotel",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Homey rooms featuring flat-screen TVs, cable programming, and complimentary Wi-Fi.",
  location: "F. Imperial St. corner L. Los Baños Ave., Legazpi City, Albay",
  priceRange: "₱1,800 - ₱3,500",
  rating: 4.4,
  amenities: ["WiFi", "TV", "Restaurant", "Parking"],
},
{
  id: "45",
  name: "Mayon Blue Lotus Corporation",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "Enjoy a free breakfast daily and recreational amenities for a delightful stay.",
  location: "F. Imperial Street corner Terminal Rd., Bitano, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱3,800",
  rating: 4.4,
  amenities: ["Free Breakfast", "WiFi", "Restaurant"],
},
{
  id: "46",
  name: "Ninong’s Hotel",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
  description: "Relaxed hotel in a bustling area with colorful façade and views of Mayon Volcano.",
  location: "Brgy. 16, Kawit East, Washington Drive, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.6,
  amenities: ["Volcano View", "Restaurant", "WiFi"],
},
{
  id: "47",
  name: "Pepperland Hotel and Leisures Corporation",
  image: "https://images.unsplash.com/photo-1582719478170-2c8b5b1a5c68?auto=format&fit=crop&w=1470&q=80",
  description: "Conservative rooms with refined décor and modern amenities near Legazpi Airport.",
  location: "Airport Road, Washington Drive, Brgy. 40-Cruzada, Legazpi City, Albay",
  priceRange: "₱3,000 - ₱5,000",
  rating: 4.6,
  amenities: ["Restaurant", "Bar", "WiFi", "Airport Access"],
},
{
  id: "48",
  name: "The Marison Hotel",
  image: "https://images.unsplash.com/photo-1600047500937-19049c4d9838?auto=format&fit=crop&w=1470&q=80",
  description: "Air-conditioned rooms with modern amenities for business and leisure travelers.",
  location: "Corner Imelda Roces Ave., Brgy. 38, Gogon, Legazpi City, Albay",
  priceRange: "₱3,000 - ₱5,000",
  rating: 4.7,
  amenities: ["Restaurant", "Conference Hall", "WiFi"],
},
{
  id: "49",
  name: "Proxy by The Oriental Albay",
  image: "https://images.unsplash.com/photo-1623690791377-5fdf67d3b87a?auto=format&fit=crop&w=1470&q=80",
  description: "Modern hotel offering free breakfast, a restaurant, and 24-hour front desk services.",
  location: "Purok 1, Brgy. 33, Peñaranda St., Legazpi City, Albay",
  priceRange: "₱2,500 - ₱4,500",
  rating: 4.5,
  amenities: ["Free Breakfast", "WiFi", "Restaurant", "24-Hour Service"],
},
{
  id: "50",
  name: "Tyche Boutique Hotel",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Variety of convenient and tasty dining options with relaxing recreational facilities.",
  location: "Gov. Forbes St. corner Rizal St., Brgy. 31, Centro Baybay, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.5,
  amenities: ["Restaurant", "WiFi", "Boutique Interiors"],
},
{
  id: "51",
  name: "A & A Bed and Breakfast",
  image: "https://images.unsplash.com/photo-1582719478170-2c8b5b1a5c68?auto=format&fit=crop&w=1470&q=80",
  description: "View of Mayon Volcano, walking distance to malls, church, and tourist spots.",
  location: "Diamond St., Imperial Court Subd., Phase 1, Cabangan, Legazpi City",
  priceRange: "₱1,500 - ₱3,000",
  rating: 4.3,
  amenities: ["Volcano View", "Breakfast", "WiFi", "Gift Shop"],
},
{
  id: "52",
  name: "Anniesville Realty and Development Corp.",
  image: "https://images.unsplash.com/photo-1600047500937-19049c4d9838?auto=format&fit=crop&w=1470&q=80",
  description: "Cozy residential rooms just 10 minutes’ walk to Legazpi Boulevard and Albay Gulf.",
  location: "Buckingham St., Imperial Ridgeview Subd., Legazpi City, Albay",
  priceRange: "₱1,200 - ₱2,800",
  rating: 4.2,
  amenities: ["Residential Rooms", "WiFi", "Parking"],
},
{
  id: "53",
  name: "Casablanca Suites",
  image: "https://images.unsplash.com/photo-1590490360181-2e6e6f3d3b17?auto=format&fit=crop&w=1470&q=80",
  description: "Ideal airport hotel for busy executives and tourists eager to explore Bicol.",
  location: "Benny Imperial St., Brgy. 16, Kawit East, Washington Drive (POB), Legazpi City",
  priceRange: "₱2,500 - ₱4,800",
  rating: 4.5,
  amenities: ["Airport Access", "WiFi", "Restaurant", "Conference Hall"],
},
{
  id: "54",
  name: "Casablanca Hotel",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Classic accommodation choice with modern comfort in the heart of Legazpi.",
  location: "238 PNR-Peñaranda St., Brgy. 33, Iraya (POB.), Legazpi City, Albay",
  priceRange: "₱1,800 - ₱3,800",
  rating: 4.3,
  amenities: ["WiFi", "Restaurant", "Event Venue"],
},
{
  id: "55",
  name: "Casa Roces Bed and Breakfast",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "Perfectly situated for tourists and businessmen alike — comfortable and easy to find.",
  location: "#15 Sikatuna St., Old Albay District, Legazpi City",
  priceRange: "₱1,500 - ₱3,000",
  rating: 4.4,
  amenities: ["WiFi", "Breakfast", "Parking"],
},
{
  id: "56",
  name: "Emerald Boutique Hotel",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
  description: "Offers reasonable rates for rooms that exceed expectations — service that delights and amenities that impress.",
  location: "Marquez St., Brgy. 14, Ilawod Old Albay District, Legazpi City",
  priceRange: "₱1,800 - ₱3,500",
  rating: 4.6,
  amenities: ["WiFi", "Restaurant", "Affordable Rates"],
},
{
  id: "57",
  name: "Ellis Ecotel",
  image: "https://images.unsplash.com/photo-1582719478170-2c8b5b1a5c68?auto=format&fit=crop&w=1470&q=80",
  description: "Distinctive nautical-themed interiors with panoramic view of Albay Gulf.",
  location: "3rd & 4th Floor, Bldg. 9, Embarcadero, Legazpi City",
  priceRange: "₱1,500 - ₱3,000",
  rating: 4.4,
  amenities: ["Seaside View", "WiFi", "Restaurant"],
},
{
  id: "58",
  name: "French Cottage",
  image: "https://images.unsplash.com/photo-1600047500937-19049c4d9838?auto=format&fit=crop&w=1470&q=80",
  description: "A small cozy hotel with a homelike feel located in Jamora Subdivision.",
  location: "Jamora Subd., Brgy. 20, Cabangan East, Legazpi City, Albay",
  priceRange: "₱1,000 - ₱2,200",
  rating: 4.2,
  amenities: ["WiFi", "Affordable", "Homey Feel"],
},
{
  id: "59",
  name: "Golite Hostel",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Clean and affordable hostel conveniently located on Washington Drive.",
  location: "Maristel Bldg., Washington Drive, Brgy. Cruzada, Legazpi City, Albay",
  priceRange: "₱800 - ₱1,500",
  rating: 4.1,
  amenities: ["Affordable", "WiFi", "Parking"],
},
{
  id: "60",
  name: "Hotel Liatris",
  image: "https://images.unsplash.com/photo-1600047500937-19049c4d9838?auto=format&fit=crop&w=1470&q=80",
  description: "Unpretentious rooms in a budget-friendly hotel with warm service and a convenient location.",
  location: "Yashano Mall, Imelda Roces Ave., Brgy. Gogon, Legazpi City, Albay",
  priceRange: "₱1,200 - ₱2,500",
  rating: 4.2,
  amenities: ["WiFi", "Restaurant", "Budget-Friendly"],
},
{
  id: "61",
  name: "Hotel Rex",
  image: "https://images.unsplash.com/photo-1590490360181-2e6e6f3d3b17?auto=format&fit=crop&w=1470&q=80",
  description: "Classic city hotel with spacious rooms and easy access to shopping and dining spots.",
  location: "Purok 1, Brgy. 27, Victory Village South, Legazpi City, Albay",
  priceRange: "₱1,500 - ₱3,000",
  rating: 4.3,
  amenities: ["WiFi", "Parking", "Restaurant"],
},
{
  id: "62",
  name: "Lotus Blu Hotel",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Modern rooms with stylish interiors directly connected to Yashano Mall.",
  location: "Imelda Roces Ave., Gogon, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.5,
  amenities: ["Mall Access", "WiFi", "Restaurant"],
},
{
  id: "63",
  name: "Legazpi Tourist Inn",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
  description: "Simple inn perfect for travelers looking for affordable and clean accommodation downtown.",
  location: "Rizal St., Brgy. 27, Victory Village South, Legazpi City, Albay",
  priceRange: "₱800 - ₱1,800",
  rating: 4.0,
  amenities: ["Affordable", "WiFi", "Air Conditioning"],
},
{
  id: "64",
  name: "Legazpi View Hotel",
  image: "https://images.unsplash.com/photo-1582719478170-2c8b5b1a5c68?auto=format&fit=crop&w=1470&q=80",
  description: "Affordable stay with great city access and comfortable air-conditioned rooms.",
  location: "Brgy. 27, Victory Village South, Legazpi City, Albay",
  priceRange: "₱1,000 - ₱2,000",
  rating: 4.1,
  amenities: ["WiFi", "Air Conditioning", "Parking"],
},
{
  id: "65",
  name: "Magayon Hotel",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "Traditional hotel with cozy rooms located near major attractions and restaurants.",
  location: "Gov. Forbes St., Brgy. 31, Centro Baybay, Legazpi City, Albay",
  priceRange: "₱1,200 - ₱2,800",
  rating: 4.2,
  amenities: ["Restaurant", "WiFi", "Parking"],
},
{
  id: "66",
  name: "Mirador Hotel",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Classic-style hotel with a homely ambiance and proximity to Legazpi Port.",
  location: "Brgy. 32, Cabagñan East, Legazpi City, Albay",
  priceRange: "₱1,200 - ₱2,500",
  rating: 4.1,
  amenities: ["WiFi", "Restaurant", "Affordable Rates"],
},
{
  id: "67",
  name: "Our Land Inn",
  image: "https://images.unsplash.com/photo-1600047500937-19049c4d9838?auto=format&fit=crop&w=1470&q=80",
  description: "Small inn offering friendly service and quick access to Legazpi City’s main roads.",
  location: "Brgy. 40, Cruzada, Legazpi City, Albay",
  priceRange: "₱1,000 - ₱2,000",
  rating: 4.0,
  amenities: ["WiFi", "Parking", "Friendly Staff"],
},
{
  id: "68",
  name: "City Corner Hotel",
  image: "https://images.unsplash.com/photo-1623690791377-5fdf67d3b87a?auto=format&fit=crop&w=1470&q=80",
  description: "Convenient city location with basic amenities ideal for quick stays and backpackers.",
  location: "Brgy. 31, Centro Baybay, Legazpi City, Albay",
  priceRange: "₱900 - ₱1,800",
  rating: 4.0,
  amenities: ["Affordable", "WiFi", "Accessible Location"],
},
{
  id: "69",
  name: "Lotus Inn",
  image: "https://images.unsplash.com/photo-1590490360181-2e6e6f3d3b17?auto=format&fit=crop&w=1470&q=80",
  description: "Small, clean inn providing good value for budget travelers.",
  location: "Brgy. 18, Cabagñan West, Legazpi City, Albay",
  priceRange: "₱800 - ₱1,500",
  rating: 4.1,
  amenities: ["WiFi", "Affordable", "Clean Rooms"],
},
{
  id: "70",
  name: "New Millionaires Suites",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
  description: "Elegant suite-type rooms with essential comforts for long or short-term stays.",
  location: "Washington Drive, Brgy. 40, Cruzada, Legazpi City, Albay",
  priceRange: "₱2,000 - ₱3,800",
  rating: 4.4,
  amenities: ["WiFi", "Restaurant", "Suite Rooms"],
},
{
  id: "71",
  name: "Third & Sean’s Place",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "Charming place with clean rooms and close proximity to the main boulevard.",
  location: "Brgy. 39, Bonot, Legazpi City, Albay",
  priceRange: "₱1,000 - ₱2,200",
  rating: 4.3,
  amenities: ["WiFi", "Parking", "Near Boulevard"],
},
{
  id: "72",
  name: "Your Brother’s House Tribal Village",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Rustic tribal-themed village offering a unique cultural lodging experience.",
  location: "San Rafael, Legazpi City, Albay",
  priceRange: "₱1,500 - ₱3,000",
  rating: 4.5,
  amenities: ["Cultural Theme", "WiFi", "Outdoor Space"],
},
{
  id: "73",
  name: "Zuri Transient House",
  image: "https://images.unsplash.com/photo-1582719478170-2c8b5b1a5c68?auto=format&fit=crop&w=1470&q=80",
  description: "Cozy transient stay with essential amenities near the city proper.",
  location: "Purok 2, Sagpon, Daraga, Albay",
  priceRange: "₱800 - ₱1,500",
  rating: 4.1,
  amenities: ["Affordable", "WiFi", "Accessible"],
},
{
  id: "74",
  name: "La Roca Veranda Suites and Restaurant",
  image: "https://images.unsplash.com/photo-1623690791377-5fdf67d3b87a?auto=format&fit=crop&w=1470&q=80",
  description: "Conveniently located near the airport, featuring an outdoor pool and full-service restaurant.",
  location: "Rizal St., Bonot, Legazpi City, Albay",
  priceRange: "₱2,500 - ₱4,800",
  rating: 4.6,
  amenities: ["Swimming Pool", "Restaurant", "WiFi", "Airport Access"],
},
{
  id: "75",
  name: "Casa Basilisa Inc.",
  image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1470&q=80",
  description: "A relaxing hotel located near Cagsawa Ruins and Mayon Volcano, featuring 19 well-appointed rooms with modern amenities.",
  location: "Diversion Road, San Rafael, Guinobatan, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.4,
  amenities: ["Flat-screen TV", "Complimentary Toiletries", "Cable TV", "Free WiFi"],
},
{
  id: "76",
  name: "Ooh La La Paradise Spring Resort",
  image: "https://images.unsplash.com/photo-1582719478173-2d5c45a8a1c3?auto=format&fit=crop&w=1470&q=80",
  description: "A hidden paradise featuring four spring-water pools, a landscaped garden, and multiple sports facilities.",
  location: "Muladbucad Grande, Guinobatan, Albay",
  priceRange: "₱1,500 - ₱3,500",
  rating: 4.6,
  amenities: ["Swimming Pools", "Waterpark", "Sports Courts", "Landscaped Grounds"],
},
{
  id: "77",
  name: "Mayon Garden Resort",
  image: "https://images.unsplash.com/photo-1526481280691-9062e8baf5d2?auto=format&fit=crop&w=1470&q=80",
  description: "A nature-inspired resort at the foot of Mayon Volcano, offering serenity and scenic views.",
  location: "Purok 8, Masarawag, Guinobatan, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.7,
  amenities: ["Mountain View", "Garden", "Restaurant", "Event Venue"],
},
{
  id: "78",
  name: "Kris-Faith of Noah Resort",
  image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1470&q=80",
  description: "A family-friendly resort offering affordable accommodation and fun amenities for all ages.",
  location: "261 P-5, Brgy. San Francisco, Guinobatan, Albay",
  priceRange: "₱1,200 - ₱3,000",
  rating: 4.3,
  amenities: ["Swimming Pool", "Family Rooms", "Picnic Area", "Free WiFi"],
},
{
  id: "79",
  name: "Kayla & Carly Beach Resort",
  image: "https://images.unsplash.com/photo-1529692236671-f1dc28b102d3?auto=format&fit=crop&w=1470&q=80",
  description: "A peaceful coastal escape ideal for relaxation, fresh air, and a quick getaway from the city.",
  location: "Brgy. Tapel, Oas, Albay",
  priceRange: "₱1,500 - ₱3,200",
  rating: 4.2,
  amenities: ["Beachfront", "Cottages", "Restaurant", "Outdoor Seating"],
},
{
  id: "80",
  name: "Palacio Beach Resort",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "A must-visit beach resort offering excellent service, cozy rooms, and memorable seaside experiences.",
  location: "Sitio Imacoto, Cagmanaba, Oas, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.5,
  amenities: ["Beachfront", "Restaurant", "Event Hall", "WiFi"],
},
{
  id: "81",
  name: "Sabando Ocampo Beach Resort",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  description: "Known for stand-up paddleboarding and watersports, ideal for team buildings and group events.",
  location: "Brgy. Maramba, Oas, Albay",
  priceRange: "₱1,800 - ₱3,500",
  rating: 4.4,
  amenities: ["Watersports", "Team Building Area", "Function Hall", "Cottages"],
},
{
  id: "82",
  name: "Victoria Bay Resort",
  image: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&w=1470&q=80",
  description: "Offers hotel accommodations, a restaurant, function hall, swimming pool, and watersports activities.",
  location: "Sitio Imacoto, Brgy. Cagmanaba, Oas, Albay",
  priceRange: "₱2,500 - ₱4,800",
  rating: 4.6,
  amenities: ["Swimming Pool", "Restaurant", "Function Hall", "Watersports"],
},
{
  id: "83",
  name: "Villa Sofia Resort",
  image: "https://images.unsplash.com/photo-1613963931023-9f73d0e7b80a?auto=format&fit=crop&w=1470&q=80",
  description: "Offers excellent service, delicious food, and a stunning view of the sunset by the coast.",
  location: "Sitio Imacoto, Brgy. Cagmanaba, Oas, Albay",
  priceRange: "₱2,000 - ₱4,200",
  rating: 4.5,
  amenities: ["Restaurant", "Sunset View", "Beach Access", "Free WiFi"],
},
{
  id: "84",
  name: "Banana Tourist Villa",
  image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1470&q=80",
  description: "Provides travel and accommodation services perfect for individual or family journeys.",
  location: "Alnay, Polangui, Albay",
  priceRange: "₱1,000 - ₱2,800",
  rating: 4.1,
  amenities: ["Travel Services", "Lounge", "Family Rooms", "WiFi"],
},
{
  id: "85",
  name: "Dreamwave Beach Resort / Dreamwave Hotel Polangui",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  description: "Caters to both business and leisure travelers with complete modern amenities for comfort.",
  location: "Diversion Road, Brgy. Ubaliw, Polangui, Albay",
  priceRange: "₱2,200 - ₱4,800",
  rating: 4.6,
  amenities: ["Swimming Pool", "Restaurant", "Conference Room", "Free WiFi"],
},
{
  id: "86",
  name: "RR Beach Resort",
  image: "https://images.unsplash.com/photo-1526481280691-9062e8baf5d2?auto=format&fit=crop&w=1470&q=80",
  description: "A tropical beach resort with relaxing ocean views, perfect for beach walks and family trips.",
  location: "Sitio Cagbatano, Brgy. Malidong, Pio Duran, Albay",
  priceRange: "₱1,500 - ₱3,500",
  rating: 4.3,
  amenities: ["Beach Access", "Cottages", "Restaurant", "Free Parking"],
},
{
  id: "87",
  name: "Alfredo’s Camp Homestay",
  image: "https://images.unsplash.com/photo-1600585154209-172e5b6f2c4c?auto=format&fit=crop&w=1470&q=80",
  description: "A relaxing and safe homestay ideal for families seeking affordable beach-cation lodging.",
  location: "Sitio Tambac, Maonon, Ligao City, Albay",
  priceRange: "₱800 - ₱2,500",
  rating: 4.2,
  amenities: ["Beach Access", "Homestay", "Kitchenette", "Family Rooms"],
},
{
  id: "88",
  name: "Dajay Homestay",
  image: "https://images.unsplash.com/photo-1617634667039-8e3f6a7f764b?auto=format&fit=crop&w=1470&q=80",
  description: "A private homestay offering comfort, beach views, and local cultural experiences.",
  location: "Sitio Tambac, Maonon, Ligao City, Albay",
  priceRange: "₱1,000 - ₱2,800",
  rating: 4.3,
  amenities: ["Beach View", "Private Rooms", "Cultural Activities", "WiFi"],
},
{
  id: "89",
  name: "La Fontana Beach Resort",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80",
  description: "A great place to chill and relax with your family, offering a satisfying beach experience at an affordable price.",
  location: "Brgy. Cabarian, Ligao City, Albay",
  priceRange: "₱1,200 - ₱3,000",
  rating: 4.3,
  amenities: ["Beachfront", "Family Rooms", "Restaurant", "Outdoor Area"],
},
{
  id: "90",
  name: "Queen’s Resort",
  image: "https://images.unsplash.com/photo-1600585154209-172e5b6f2c4c?auto=format&fit=crop&w=1470&q=80",
  description: "A cozy resort known for its relaxing atmosphere and picturesque spots for families and couples.",
  location: "Purok 7, Herrera, Ligao City, Albay",
  priceRange: "₱1,200 - ₱3,200",
  rating: 4.2,
  amenities: ["Swimming Pool", "Function Area", "Restaurant", "WiFi"],
},
{
  id: "91",
  name: "Elkanville Hotel",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "A premium stay offering luxurious comfort and stress-free accommodations perfect for leisure or business travelers.",
  location: "Sitio Togbon, Batang, Ligao City, Albay",
  priceRange: "₱2,500 - ₱4,500",
  rating: 4.6,
  amenities: ["Luxury Rooms", "Restaurant", "Free WiFi", "Room Service"],
},
{
  id: "92",
  name: "Bloom’s Beach Resort",
  image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1470&q=80",
  description: "A scenic beach resort offering simple yet relaxing accommodations at an affordable price.",
  location: "Sitio Tambac, Maonon, Ligao City, Albay",
  priceRange: "₱1,000 - ₱2,800",
  rating: 4.1,
  amenities: ["Beach Access", "Cottages", "Restaurant", "Free Parking"],
},
{
  id: "93",
  name: "Casa de Misericordia Retreat House & Pilgrim Center",
  image: "https://images.unsplash.com/photo-1624204742653-6de2f523c1cb?auto=format&fit=crop&w=1470&q=80",
  description: "A serene retreat house located near Kawa-Kawa Hill and Nature Park, ideal for pilgrims and quiet getaways.",
  location: "811 Carmel Heights, Kawa-Kawa, Taburan, Ligao City, Albay",
  priceRange: "₱800 - ₱2,000",
  rating: 4.4,
  amenities: ["Retreat Center", "Chapel", "Garden", "Parking"],
},
{
  id: "94",
  name: "Cocofarm Resort",
  image: "https://images.unsplash.com/photo-1590490359683-658d3d23f6b4?auto=format&fit=crop&w=1470&q=80",
  description: "Known for its clean, well-maintained environment and relaxing ambiance surrounded by coconut trees.",
  location: "Purok 5, Brgy. Batang, Ligao City, Albay",
  priceRange: "₱1,200 - ₱2,500",
  rating: 4.3,
  amenities: ["Garden", "Restaurant", "Parking", "Free WiFi"],
},
{
  id: "95",
  name: "David Hometel",
  image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1470&q=80",
  description: "A cozy stay featuring modern amenities, refundable rates, and a full-service restaurant for guests’ comfort.",
  location: "Guilid, Ligao City, Albay",
  priceRange: "₱1,200 - ₱2,800",
  rating: 4.2,
  amenities: ["Restaurant", "WiFi", "Free Parking", "Refundable Rates"],
},
{
  id: "96",
  name: "Don Manuel Rendezvous Resort",
  image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1470&q=80",
  description: "A riverside resort offering a peaceful environment surrounded by natural scenery.",
  location: "Purok 7, Borokborokan, Brgy. Herrera, Ligao City, Albay",
  priceRange: "₱1,000 - ₱2,500",
  rating: 4.3,
  amenities: ["River View", "Function Hall", "Outdoor Area", "WiFi"],
},
{
  id: "97",
  name: "Francis Lodge",
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1470&q=80",
  description: "Features a shared lounge and a coffee shop, providing a homely stay for visitors to Ligao City.",
  location: "Purok 5, Tambo, Ligao City, Albay",
  priceRange: "₱1,000 - ₱2,500",
  rating: 4.1,
  amenities: ["Coffee Shop", "Lounge", "WiFi", "Parking"],
},
{
  id: "98",
  name: "Gulod Tourist Inn",
  image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1470&q=80",
  description: "A charming inn located near Kawa-Kawa Hill and Nature Park, offering convenient access to nearby attractions.",
  location: "California Village, Kawa-Kawa, Tuburan, Ligao City, Albay",
  priceRange: "₱1,000 - ₱2,500",
  rating: 4.2,
  amenities: ["WiFi", "Restaurant", "Parking", "Lounge"],
},
{
  id: "99",
  name: "Hotel Marites",
  image: "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1470&q=80",
  description: "Offers comfortable rooms with air-conditioning and in-room cable TV for a pleasant stay.",
  location: "Sta. Ana Street, Tinago, Ligao City, Albay",
  priceRange: "₱1,200 - ₱2,800",
  rating: 4.2,
  amenities: ["Air Conditioning", "Cable TV", "WiFi", "Parking"],
},
{
  id: "100",
  name: "Hotel Villa de California Inc.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "A full-service hotel featuring WiFi, a swimming pool, spa, restaurant, bar, and fitness gym.",
  location: "618 Maharlika Highway, Corner California Village, Ligao City, Albay",
  priceRange: "₱2,800 - ₱5,000",
  rating: 4.7,
  amenities: ["Swimming Pool", "Spa", "Restaurant", "Gym"],
},
{
  id: "101",
  name: "Park View Hotel",
  image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1470&q=80",
  description: "Known for its excellent service and superior facilities, providing a relaxing and memorable experience.",
  location: "Blumentritt Street, Guilid, Ligao City, Albay",
  priceRange: "₱1,800 - ₱3,500",
  rating: 4.5,
  amenities: ["Restaurant", "Lounge", "WiFi", "Air Conditioning"],
},
{
  id: "102",
  name: "Punta Almara Beach Resort",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  description: "Features multiple stations with pools, mini jacuzzi, and stunning light shows for night relaxation.",
  location: "Stations 1-3: Brgy. Guilid & Sitio Tambac, Brgy. Maonon, Ligao City, Albay",
  priceRange: "₱2,000 - ₱4,200",
  rating: 4.6,
  amenities: ["Swimming Pool", "Jacuzzi", "Light Show", "Beachfront"],
},
{
  id: "103",
  name: "Shore Laterazza Resort",
  image: "https://images.unsplash.com/photo-1613963931023-9f73d0e7b80a?auto=format&fit=crop&w=1470&q=80",
  description: "A cozy and stylish beach resort with a peaceful seaside ambiance, perfect for evening relaxation.",
  location: "Sitio Tambac, Brgy. Maonon, Ligao City, Albay",
  priceRange: "₱1,800 - ₱3,200",
  rating: 4.5,
  amenities: ["Beachfront", "Restaurant", "Outdoor Lounge", "WiFi"],
},
{
  id: "104",
  name: "White Vision Guest House",
  image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1470&q=80",
  description: "Offers cozy and affordable accommodation ideal for families, couples, and group travelers.",
  location: "308 San Pascual St., Brgy. Pandan, Ligao City, Albay",
  priceRange: "₱800 - ₱2,500",
  rating: 4.2,
  amenities: ["Guest House", "WiFi", "Family Rooms", "Parking"],
},
{
  id: "105",
  name: "Josoc Inn",
  image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1470&q=80",
  description: "A comfortable traveler's lodge conveniently located near Bicol Regional Science High School and Ligao Station.",
  location: "Brgy. Bonga, Ligao City, Albay",
  priceRange: "₱900 - ₱2,200",
  rating: 4.1,
  amenities: ["Lodge", "WiFi", "Air Conditioning", "Parking"],
},
{
  id: "106",
  name: "La Veranda Beach Resort",
  image: "https://images.unsplash.com/photo-1623690791377-5fdf67d3b87a?auto=format&fit=crop&w=1470&q=80",
  description: "Offers peaceful beachfront accommodations with top-quality service and serene atmosphere.",
  location: "Sitio Tambac, Brgy. Maonon, Ligao City, Albay",
  priceRange: "₱2,000 - ₱4,000",
  rating: 4.5,
  amenities: ["Beachfront", "Restaurant", "Outdoor Lounge", "WiFi"],
},
{
  id: "107",
  name: "Ligao Bed and Breakfast",
  image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1470&q=80",
  description: "A homely and budget-friendly stay offering warm hospitality and local charm in Ligao City.",
  location: "32 San Jose Street, Brgy. Dunao, Ligao City, Albay",
  priceRange: "₱800 - ₱2,200",
  rating: 4.2,
  amenities: ["Breakfast", "WiFi", "Air Conditioning", "Parking"],
},
{
  id: "108",
  name: "Ligao 559 Apartelle",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
  description: "Offers comfortable apartment-style accommodations near the riverside, ideal for extended stays.",
  location: "Brgy. Tomolin, Ligao City, Albay",
  priceRange: "₱1,200 - ₱3,000",
  rating: 4.3,
  amenities: ["Apartment Suites", "WiFi", "Kitchenette", "Free Parking"],
},
  ],
  onHotelSelect = (id) => console.log(`Hotel selected: ${id}`),
}: HotelsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    price: { min: "", max: "" },
    rating: { min: "", max: "" },
    amenity: [] as string[],
  });

  // --- FILTERING LOGIC ---
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

    // Price Range
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

    // Rating Range
    if (filters.rating.min || filters.rating.max) {
      result = result.filter((hotel) => {
        const rating = hotel.rating;
        const min = filters.rating.min ? parseFloat(filters.rating.min) : 0;
        const max = filters.rating.max ? parseFloat(filters.rating.max) : 5;
        return rating >= min && rating <= max;
      });
    }

    // Amenity Filter
    if (filters.amenity.length > 0) {
      result = result.filter((hotel) =>
        filters.amenity.every((a) =>
          hotel.amenities.some(
            (hA) => hA.toLowerCase() === a.toLowerCase()
          )
        )
      );
    }

    setFilteredHotels(result);
  }, [searchTerm, filters, hotels]);

  const clearFilters = () => {
    setSearchTerm("");
    setFilters({
      price: { min: "", max: "" },
      rating: { min: "", max: "" },
      amenity: [],
    });
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          {/* --- HEADER --- */}
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
              {(searchTerm ||
                filters.price.min ||
                filters.price.max ||
                filters.rating.min ||
                filters.rating.max ||
                filters.amenity.length > 0) && (
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

          {/* --- FILTER MODAL --- */}
          {showFilters && (
            <FilterModal
              onClose={() => setShowFilters(false)}
              filters={filters}
              setFilters={setFilters}
            />
          )}

          {/* --- HOTEL LIST --- */}
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
              Showing {filteredHotels.length} of {hotels.length} accommodations
              in Albay
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelsList;
