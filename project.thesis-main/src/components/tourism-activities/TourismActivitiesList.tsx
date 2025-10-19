import React from "react";
import TourismActivitiesCard from "./TourismActivitiesCard";

export const activities = [
  // TIWI
  {
    id: "tiwi-pottery",
    name: "Pottery Making and Shopping",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-WXkxnkym2Wngq-Ct9FjBsabpcfqq0h5fg&s",
    description: "Experience Tiwi’s traditional pottery-making culture and bring home handcrafted clay souvenirs.",
    municipality: "Tiwi, Albay",
    category: "Cultural Activity"
  },
  {
    id: "tiwi-halo",
    name: "DJC Halo-Halo Food Stop",
    image: "https://images.deliveryhero.io/image/fd-ph/LH/ex8g-listing.jpg",
    description: "Taste the popular DJC Halo-Halo, a local dessert favorite.",
    municipality: "Tiwi, Albay",
    category: "Food & Dining"
  },
  {
    id: "tiwi-joroan-church",
    name: "Pilgrimage at Joroan Church",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e7/90/c6/our-lady-of-salvation.jpg?w=1200&h=-1&s=1",
    description: "Visit Joroan Church and join local pilgrimage traditions.",
    municipality: "Tiwi, Albay",
    category: "Religious Site"
  },
  {
  id: "tiwi-maritime-procession",
  name: "Maritime Procession of Our Lady of Salvation (August)",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9u-1dYlxsqHw1lSTAdfV2SFUo1N8VaZmkwQ&s",
  description: "Join Tiwi’s annual maritime procession honoring Our Lady of Salvation every August.",
  municipality: "Tiwi, Albay",
  category: "Religious / Festival"
},
{
  id: "tiwi-sinimbahanan-ruins",
  name: "Sinimbahanan Ruins & St. Lawrence Church Tour",
  image: "https://silverbackpacker.com/wp-content/uploads/2017/08/Interior-of-the-ruins-Church-of-St.-Lawrence-Tiwi.jpg",
  description: "Discover Tiwi’s historic ruins and the old St. Lawrence church structures.",
  municipality: "Tiwi, Albay",
  category: "Heritage"
},

  // MALINAO
  {
    id: "malinao-vera",
    name: "Vera Falls Swimming",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6bvjF49PaguF5t1a6XHK6J3plNU9gFZ4Og&s",
    description: "Relax with a refreshing swim at Vera Falls.",
    municipality: "Malinao, Albay",
    category: "Waterfall"
  },
  {
    id: "malinao-tubing",
    name: "Water Tubing at Brgy. Soa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMr36u8y-HqCthMUuNsjWZ1pu1WL2fAwsXsA&s",
    description: "Thrilling water tubing for adventure seekers.",
    municipality: "Malinao, Albay",
    category: "Adventure"
  },

  // TABACO
  {
    id: "tabaco-mayon-skyline",
    name: "Mayon Skyline Trek",
    image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/u5crzg5fwkypy6xxhdv2/AlbayPrivateDayTourwithMayonSkyline-KlookPhilippines.jpg",
    description: "Trek to the Mayon Skyline viewpoint for panoramic volcano views.",
    municipality: "Tabaco, Albay",
    category: "Viewpoint"
  },
  {
    id: "tabaco-pandayan",
    name: "Pandayan / Cutleries Tour (Brgy. Cobo)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-KL_06GbSHsI4LMPj0T2_uIX0Ts3ctqXY4A&s",
    description: "See local metalwork and handcrafted cutlery.",
    municipality: "Tabaco, Albay",
    category: "Crafts"
  },
  {
  id: "tabaco-heritage-tour",
  name: "Cultural Heritage Tour at St. John the Baptist Church & Bahay na Bato",
  image: "https://happyislandinn.com/wp-content/uploads/2023/07/IMG_2327.jpg",
  description: "Step back in time visiting Bahay na Bato and Tabaco’s heritage church.",
  municipality: "Tabaco, Albay",
  category: "Cultural Heritage"
},
{
  id: "tabaco-resorts",
  name: "Swimming at the Different Resorts in Tabaco City",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ab/d4/7a/hotel-fina.jpg?w=1200&h=-1&s=1",
  description: "Relax and cool off at Tabaco’s nearby spring and resort destinations.",
  municipality: "Tabaco, Albay",
  category: "Leisure / Resort"
},
{
  id: "tabaco-hiraya-nature",
  name: "Enjoy Nature and Take Photos at Hiraya Manawari Nature Park",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLrOlXLRUhek7tSq1dSeEMz9_5KuTeowOMGQ&s",
  description: "Visit Hiraya Manawari Nature Park for scenic views and peaceful outdoor moments.",
  municipality: "Tabaco, Albay",
  category: "Nature / Viewpoint"
},

  // MALILIPOT
  {
    id: "malilipot-busay",
    name: "Busay Falls",
    image: "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Busay-6.jpg",
    description: "A beautiful multi-tiered waterfall with tropical surroundings.",
    municipality: "Malilipot, Albay",
    category: "Waterfall"
  },
  {
  id: "malilipot-seawall",
  name: "Nature Viewing and Dine-In at Malilipot Seawall & Boulevard",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMp2bNUAq8IW8ui-woLIZUZAx296HzjyDdw&s  ",
  description: "Enjoy scenic sea views and local dining at Malilipot Boulevard.",
  municipality: "Malilipot, Albay",
  category: "Leisure / Dining"
},
{
  id: "malilipot-pinukpok-weaving",
  name: "Pinukpok Weaving at Pinukpok Handicrafts",
  image: "https://i0.wp.com/dateline-ibalon.com/wp-content/uploads/2023/05/Kutur-Bidibidi-1.jpg?resize=723%2C542&ssl=1",
  description: "Witness the traditional Pinukpok weaving craft and shop local textiles.",
  municipality: "Malilipot, Albay",
  category: "Cultural / Handicraft"
},
{
  id: "malilipot-vanishing-island",
  name: "Swimming at Vanishing Island, Busay Falls and Spring Resorts",
  image: "https://malilipot.wordpress.com/wp-content/uploads/2018/05/busayfalls3-e1526603709826.jpg?w=1086",
  description: "Swim, relax, and enjoy at Busay Falls and the seasonal Vanishing Island.",
  municipality: "Malilipot, Albay",
  category: "Water Activity"
},

  // BACACAY
  {
    id: "bacacay-cagraray",
    name: "Cagraray Eco Park & Misibis Bay",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/431956171.jpg?k=c8d9d4c852ef78a67074523ab9c96507dd624936d483ab9308b13a0330aa2a58&o=&hp=1",
    description: "Eco-park attractions, viewdecks, and luxury resort experiences.",
    municipality: "Bacacay, Albay",
    category: "Resort / Park"
  },
  {
    id: "bacacay-islandhop",
    name: "Island Hopping & Black Sand Beaches",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/08/51/e8.jpg",
    description: "Boat tours to nearby islands and black sand beaches.",
    municipality: "Bacacay, Albay",
    category: "Island / Beach"
  },
  {
  id: "bacacay-cagbulacao",
  name: "Spelunking at Cagbulacao Limestone Rock Formations",
  image: "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Hoyop-7.jpg",
  description: "Adventure through limestone caves and rock formations in Bacacay.",
  municipality: "Bacacay, Albay",
  category: "Adventure / Spelunking"
},
{
  id: "bacacay-karagumoy",
  name: "Karagumoy (Mat) Weaving",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEuQ4mgXp19DY34HelVwU-PFE8YhsPTewIg&s",
  description: "Discover Bacacay’s mat-weaving industry and purchase handwoven souvenirs.",
  municipality: "Bacacay, Albay",
  category: "Craft / Cultural"
},
{
  id: "bacacay-casa-simeon",
  name: "Dine and Stay at Casa Simeon",
  image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/118496605.jpg?k=a31231be0403d19fb488a7f4e5cda247494202ec5a23438d9809e689623d1a96&o=&hp=1",
  description: "Experience Bacacay’s heritage hotel and restaurant — Casa Simeon.",
  municipality: "Bacacay, Albay",
  category: "Heritage / Dining"
},
{
  id: "bacacay-black-sand-resorts",
  name: "Dip, Relax, and Enjoy at the Black Sand Beach Resorts",
  image: "https://www.taraletsanywhere.com/wp-content/uploads/2023/10/costa-palmera-resort1.jpg",
  description: "Unwind along Bacacay’s famous black sand beaches and coastal resorts.",
  municipality: "Bacacay, Albay",
  category: "Beach / Resort"
},

  // STO. DOMINGO
  {
    id: "stodom-mirisbiris",
    name: "Mirisbiris Farm & Nature Center",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/208240098.jpg?k=3959c6e1d52c99eb4681837c1d15bfe142b878df81d2bbedd32d68a20a9c7273&o=",
    description: "Farm tourism, gardens, and hands-on agritourism experiences.",
    municipality: "Sto. Domingo, Albay",
    category: "AgriTourism"
  },
  {
  id: "stodom-spring-resorts",
  name: "Swimming at the Spring Resorts",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbc3Rc2b8La8xdFw0q_0WVRgorOFvwD6WaQg&s",
  description: "Cool off and relax at Sto. Domingo’s natural spring resorts.",
  municipality: "Sto. Domingo, Albay",
  category: "Resort / Leisure"
},
{
  id: "stodom-paper-mache",
  name: "Paper Mache Making at Dom’s Handicraft",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EO0cJRSPGNUKwAS1tYS2iTERZSmhzqx4lQ&s",
  description: "Learn the art of paper mache crafting at local workshops.",
  municipality: "Sto. Domingo, Albay",
  category: "Handicraft / Art"
},
{
  id: "stodom-mangrove-tour",
  name: "Water Mangrove Tour at Brgy. Buhatan",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQNLuLo144WzAYtGUl22NTkz_o5417kgYSw&s",
  description: "Take a relaxing mangrove river tour and experience eco-tourism up close.",
  municipality: "Sto. Domingo, Albay",
  category: "Nature / EcoTourism"
},
{
  id: "stodom-heritage-tour",
  name: "Heritage Tour: Potenciano Gregorio Mausoleum & St. Dominic Church",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6DjXk1wr3TiG9-Lj2oqgu4LeJsVXDp0f4w&s",
  description: "Visit Sto. Domingo’s heritage landmarks and historical sites.",
  municipality: "Sto. Domingo, Albay",
  category: "Heritage / Culture"
},
{
  id: "stodom-aguas-farm",
  name: "Feed the Fishes and Turtles at Aguas Farm",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4c9Ah5dlgZu6lsE4fZMRkbr5byYSYdovm7A&s",
  description: "Enjoy nature and interact with animals at Aguas Farm.",
  municipality: "Sto. Domingo, Albay",
  category: "AgriTourism"
},

  // LEGAZPI CITY
  {
    id: "legazpi-mayon-atv",
    name: "Mayon ATV Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1N_fBiza77WII6iaakT92IMcRv4SspUenQ&s",
    description: "Ride ATVs across volcanic trails for a thrilling experience.",
    municipality: "Legazpi City, Albay",
    category: "Adventure"
  },
  {
    id: "legazpi-zipline",
    name: "Zipline at Ligñon Hill",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmvd4iD9bINV0oEWsmCho-3yLaP-FMatXZg&s",
    description: "Fly across the sky and enjoy Mayon views.",
    municipality: "Legazpi City, Albay",
    category: "Adventure / Viewpoint"
  },
  {
    id: "legazpi-boulevard",
    name: "Sunset Walk at Legazpi Boulevard",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-2NHq-qc_YUXBkPRu_XpQKBffOivoDxIAw&s",
    description: "Relaxing seaside strolls and scenic sunsets.",
    municipality: "Legazpi City, Albay",
    category: "Leisure"
  },
  {
  id: "legazpi-water-sports",
  name: "Water and Sport Activities at Legazpi Boulevard",
  image: "https://legazpi.gov.ph/wp-content/uploads/2023/04/skywalk-adventure.jpg",
  description: "Try exciting water sports like jet-skiing and kayaking along Legazpi Boulevard.",
  municipality: "Legazpi City, Albay",
  category: "Water Sports"
},
{
  id: "legazpi-atv",
  name: "All Terrain Vehicle (ATV) Ride at Black Lava Wall Trail",
  image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/97/df/88.jpg",
  description: "Ride ATVs through volcanic trails near the Mayon Volcano.",
  municipality: "Legazpi City, Albay",
  category: "Adventure"
},
{
  id: "legazpi-zipline",
  name: "Zipline at Ligñon Hill and Embarcadero de Legazpi",
  image: "https://embarcaderohotel.com/wp-content/uploads/2018/02/EH_ZipLine.jpg",
  description: "Enjoy a thrilling zipline with scenic views of Legazpi and Mayon.",
  municipality: "Legazpi City, Albay",
  category: "Adventure / Viewpoint"
},
{
  id: "legazpi-mice",
  name: "MICE Activities in Legazpi",
  image: "https://files01.pna.gov.ph/ograph/2023/06/30/bicol-mayon-ko.jpg",
  description: "Attend business conferences and events in Legazpi’s top venues.",
  municipality: "Legazpi City, Albay",
  category: "Business / MICE"
},
{
  id: "legazpi-culinary",
  name: "Culinary Treats at Authentic Restos in Legazpi",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3L3YrBcTkrwfZ6lG-h4lxNQ2UcHefVX1Mg&s",
  description: "Indulge in authentic Bicolano and international dishes across Legazpi restaurants.",
  municipality: "Legazpi City, Albay",
  category: "Food & Dining"
},
{
  id: "legazpi-stroll",
  name: "Strolling at Legazpi Boulevard and Sawangan Park",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUUnorIcdu4xZm-zlrZeb_sOrjOVzFEcKwQ&s",
  description: "Enjoy sunset walks and seaside views at Sawangan Park and the Boulevard.",
  municipality: "Legazpi City, Albay",
  category: "Leisure / Nature"
},
{
  id: "legazpi-heritage",
  name: "Heritage Tour of Peñaranda Park, Liberty Bell, and St. Gregory Cathedral",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/b9/1a/41/the-penaranda-park.jpg?w=900&h=500&s=1",
  description: "Visit Legazpi’s historic monuments and churches that mark Albay’s heritage.",
  municipality: "Legazpi City, Albay",
  category: "Heritage / Cultural"
},


  // MANITO
{
  id: "manito-kayak",
  name: "Kayaking at Manito Mangrove Park",
  image: "https://dvnak526bu6js.cloudfront.net/new/Manuel_Antonio/Tours/_1200x630_crop_center-center_82_none/hero_Mangrove-Kayak.jpg?mtime=1721783399",
  description: "Paddle through mangrove channels and watch coastal wildlife.",
  municipality: "Manito, Albay",
  category: "Nature"
},
{
  id: "manito-crab-catching",
  name: "Crab Catching at Cawit Mangrove Site",
  image: "https://prdp.da.gov.ph/wp-content/uploads/2017/12/IMG_1044-728x350.jpg",
  description: "Experience traditional crab-catching activities with locals.",
  municipality: "Manito, Albay",
  category: "AgriTourism / Adventure"
},
{
  id: "manito-firefly",
  name: "Firefly Watching at the Mangrove Park",
  image: "https://gttp.images.tshiftcdn.com/413749/x/0/6.jpg?width=380&height=411&fit=crop&quality=75&dpr=2",
  description: "Marvel at glowing fireflies illuminating the mangroves at night.",
  municipality: "Manito, Albay",
  category: "Nature / Night Activity"
},
{
  id: "manito-hanging-bridge",
  name: "Hanging Bridge Adventure & ATV at MJM Beach Resort",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53d_VDUbITEKaF49VeU7ApTDNGcnfLHY4BA&s",
  description: "Test your balance on hanging bridges and ride ATVs by the sea.",
  municipality: "Manito, Albay",
  category: "Adventure / Leisure"
},
{
  id: "manito-nagaso-lake",
  name: "Marvel at NagAso Boiling Lake & Inang Maharang Lake",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1tUuCbuUY-MpucnqMvscADGf5r2f-jNdng&s",
  description: "Explore Manito’s geothermal lakes and enjoy scenic nature.",
  municipality: "Manito, Albay",
  category: "Nature / Hiking"
},

  // RAPU-RAPU
  {
  id: "rapurapu-islands",
  name: "Island Hopping at Guinanayan, Carugcog, and Burad Beaches",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgu9AqEd3C34lh8kcpIuYyxdwlqIT4wuo_ZQ&s",
  description: "Swim and snorkel in Rapu-Rapu’s pristine island beaches.",
  municipality: "Rapu-Rapu, Albay",
  category: "Island / Beach"
},
{
  id: "rapurapu-seafood",
  name: "Enjoy Fresh Seafood at Local Resorts",
  image: "https://pix10.agoda.net/hotelImages/300195/-1/0bf003520b35b8ea071f05e6b715715c.jpg?ce=0&s=414x232",
  description: "Taste freshly caught seafood served by coastal resorts.",
  municipality: "Rapu-Rapu, Albay",
  category: "Food & Dining"
},

  // CAMALIG
  {
    id: "camalig-sumlang-rafting",
    name: "Sumlang Lake Rafting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbEGqKWASl4oLyUOfbL07lFq1wvBdnZn67Q&s",
    description: "Bamboo rafts with a picturesque view of Mayon Volcano.",
    municipality: "Camalig, Albay",
    category: "Leisure / Nature"
  },
  {
    id: "camalig-quitinday",
    name: "Quitinday Green Hills Trekking",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHwEeAtOLoyXHrEn53qU2wW-GkrZVVOl14g&s",
    description: "Rolling green hills great for hikes and photos.",
    municipality: "Camalig, Albay",
    category: "Hiking"
  },
  {
    id: "camalig-cave",
    name: "Calabidongan Cave Exploration",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRSfwld7hfGpDoFsWXIWRXpB0BTJUn2v4fQ&s",
    description: "Caving adventures and underground streams.",
    municipality: "Camalig, Albay",
    category: "Adventure"
  },
{
  id: "camalig-hoyop-hoyopan",
  name: "Spelunking at Hoyop Hoyopan Cave",
  image: "https://legazpirentacar.com/wp-content/uploads/sites/4/2023/05/Hoyop-2.jpg.crdownload.jpg",
  description: "Explore underground caves with unique rock formations.",
  municipality: "Camalig, Albay",
  category: "Adventure / Spelunking"
},
{
  id: "camalig-heritage",
  name: "Heritage Tour of Camalig Cabecera and Colonial Houses",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR119JHNoo9Jt_9AA_pX9-Sc9MBVtzOUpUqDg&s",
  description: "Discover Camalig’s old colonial houses and historic churches.",
  municipality: "Camalig, Albay",
  category: "Heritage / Cultural"
},
{
  id: "camalig-pinangat",
  name: "Relish Authentic Pinangat Dishes",
  image: "https://albay.gov.ph/wp-content/uploads/2020/02/Pinangat-500x346-1.jpg",
  description: "Taste the traditional Bicolano Pinangat in roadside stores.",
  municipality: "Camalig, Albay",
  category: "Food & Dining"
},
{
  id: "camalig-sumlang-lake",
  name: "Kayak or Raft at Sumlang Lake",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2MCXsfhyfooMTIjY_vkih3PM9Tnc33eNEwGwanQvV9scVjIuuSE8u0w1dSpC6fconRLdlxtNPLkSH3AsmIqrfLlppoL63kGZPKbDwVP0nI7DXZEwBiCgNvYUWby6jdXrXSQH8TFlHh6GQ5C3f5YSZaQK01kirfdI7UpYVWAvSClWXKnKcPtUDFPYl/s2048/Bicol%2520Sumlang%2520Lake%2520Mayon%2520View6.JPG",
  description: "Paddle across Sumlang Lake with Mayon Volcano in the background.",
  municipality: "Camalig, Albay",
  category: "Leisure / Nature"
},
{
  id: "camalig-mice",
  name: "Host Events at La Mia Corazon & Socorro’s The Venue",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvNBxjkErDXBD7kUGcS0kr6_0gAfCo01p8A&s",
  description: "Celebrate special occasions at Camalig’s scenic event venues.",
  municipality: "Camalig, Albay",
  category: "MICE / Events"
},
{
  id: "camalig-bee-farm",
  name: "Bee Farming & Agri-Tourism at Albay Farmer’s Bounty Village",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsYC4-4WjSm9FVQcj_wyu9UTCLNIq08RF-Q&s",
  description: "Learn about bee farming, cacao, and dairy processing.",
  municipality: "Camalig, Albay",
  category: "AgriTourism"
},
{
  id: "camalig-elmiro-farm",
  name: "Harvest Vegetables at El Miro de Shei Integrated Farm",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6wFowJo9vXKpYRI5hLFpBs_Ahvw339j97A&s",
  description: "Pick vegetables and dine at Café Portofino.",
  municipality: "Camalig, Albay",
  category: "AgriTourism / Dining"
},

  // DARAGA
  {
    id: "daraga-cagsawa",
    name: "Cagsawa & Budiao Ruins Heritage Tour",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpTijh00avNH5kPiWyum6eg-8-O7_tnIxGw&s",
    description: "Visit iconic ruins and heritage temples.",
    municipality: "Daraga, Albay",
    category: "Heritage"
  },
{
  id: "daraga-atv",
  name: "Mayon Lava ATV Adventure",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53d_VDUbITEKaF49VeU7ApTDNGcnfLHY4BA&s",
  description: "Experience thrilling rides through lava trails at the foot of Mayon Volcano.",
  municipality: "Daraga, Albay",
  category: "Adventure"
},
{
  id: "daraga-church",
  name: "Daraga Church (Nuestra Señora de la Porteria)",
  image: "https://i.pinimg.com/736x/15/d4/21/15d421dfd98adb748544e1a547fb1653.jpg",
  description: "Marvel at the Baroque architecture of Daraga’s iconic hilltop church.",
  municipality: "Daraga, Albay",
  category: "Religious / Heritage"
},
{
  id: "daraga-culinary",
  name: "Food Crawl in Daraga’s Local Eateries",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qi-JCJ66Gg6mbHfitYNtGfi26fri2aqEnw&s",
  description: "Savor local Bicolano delicacies in Daraga’s homegrown restaurants.",
  municipality: "Daraga, Albay",
  category: "Food & Dining"
},

  // JOVELLAR
{
  id: "jovellar-silay-cave",
  name: "Spelunking at Silay Cave 1 and 2",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAcC2hh6owLmanSNw7vR8FBbEGG0D0fYZ0A&s",
  description: "Explore the fascinating limestone formations and underground streams of Silay Cave 1 and 2.",
  municipality: "Jovellar, Albay",
  category: "Caving / Adventure"
},
{
  id: "jovellar-underground-river",
  name: "Bamboo Rafting at Jovellar Underground River",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1AkRC-k89cknlVMT3OqXXZ1Hz61fwQaYFg&s",
  description: "Glide along the serene underground river on a bamboo raft surrounded by natural rock formations.",
  municipality: "Jovellar, Albay",
  category: "Adventure / Nature"
},
{
  id: "jovellar-falls",
  name: "Swimming at Sigpit Falls, Quibaraw Falls, and Magtaguinting Falls",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4s4Phuroo3y8HO_pBzbIiz9wZybeKHNj9Bg&s",
  description: "Take a refreshing dip in Jovellar’s series of cascading waterfalls with crystal-clear waters.",
  municipality: "Jovellar, Albay",
  category: "Waterfall / Nature"
},
{
  id: "jovellar-mayanpayan-hills",
  name: "Trek Mayanpayan Hills",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6kX-z_Nn39Jh-7WGKnp54cMRU5HMaCNawg&s",
  description: "Enjoy a scenic trek across Mayanpayan Hills offering panoramic views of the countryside.",
  municipality: "Jovellar, Albay",
  category: "Hiking / Nature"
},
{
  id: "jovellar-tayjose-farm",
  name: "Tay Jose’s Agri Farm Hot Spring & Honey Bee Harvesting",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-PVTS9CViVK2BEowKgHcm85y-SbD8-US1g&s",
  description: "Relax in a natural hot spring pool and experience beekeeping activities at Tay Jose’s Agri Farm.",
  municipality: "Jovellar, Albay",
  category: "AgriTourism / Leisure"
},


  // GUINOBATAN
{
  id: "guinobatan-heritage-tour",
  name: "Educational & Cultural Heritage Tour",
  image: "https://pinaywise.com/wp-content/uploads/2024/02/Albay-Bicol-Full-Day-Pilgrimage-Tour.jpg",
  description: "Discover Guinobatan’s historical landmarks including the Simeon Ola Museum & Shrine, Colegio de Buenaventura Ruins, Town Plaza, and Our Lady of the Assumption Parish Church.",
  municipality: "Guinobatan, Albay",
  category: "Cultural / Heritage"
},
{
  id: "guinobatan-ola-cave",
  name: "Spelunking at Ola Cave",
  image: "https://i0.wp.com/beewndrful.wordpress.com/wp-content/uploads/2019/09/2019-09-12-05-1566467270.-e1568280916691.jpg?fit=1200%2C617&ssl=1&w=640",
  description: "Embark on an exciting underground adventure exploring the rock chambers of Ola Cave.",
  municipality: "Guinobatan, Albay",
  category: "Caving / Adventure"
},
{
  id: "guinobatan-longganisa",
  name: "Taste of Longganisa de Guinobatan",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9DKGes-3PZDTRk_alTXjAcvc4hAErgwC4g&s",
  description: "Savor the unique flavor of Guinobatan’s signature Longganisa, a must-try local delicacy.",
  municipality: "Guinobatan, Albay",
  category: "Food & Dining / Cultural"
},
{
  id: "guinobatan-spring-resorts",
  name: "Swimming at Guinobatan’s Spring Resorts",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgD6TgnCYCozgXHk7fHfGXMSxX1yIJS8lzg&s",
  description: "Cool off and relax in the natural spring waters at the various resorts scattered around Guinobatan.",
  municipality: "Guinobatan, Albay",
  category: "Leisure / Nature"
},
{
  id: "guinobatan-fhm-gardens",
  name: "Nature Viewing and Swimming at FHM Gardens",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNCkVaYopHGcXjZPI-tcU3PVnIfNWSrg4RQ&s",
  description: "Experience the serene ambiance of FHM Gardens while enjoying swimming and picturesque nature views.",
  municipality: "Guinobatan, Albay",
  category: "Nature / Leisure"
},


  // LIGAO
{
  id: "ligao-tambac-beach",
  name: "Swimming at Sitio Tambac Maonon Beaches",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmLxFzYCFTK331NHPEwzPpU5Kk1FNn-_3mw&s",
  description: "Unwind and swim along the serene coastal beaches of Sitio Tambac in Maonon, Ligao City.",
  municipality: "Ligao City, Albay",
  category: "Beach / Leisure"
},
{
  id: "ligao-batong-languyon",
  name: "Snorkeling at Batong Languyon",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78ARZFZrh2tPoY07F4UKUSnbdDHbuPYJ4eQ&s",
  description: "Dive and snorkel through the vibrant marine life of Batong Languyon’s crystal-clear waters.",
  municipality: "Ligao City, Albay",
  category: "Water Activities / Nature"
},
{
  id: "ligao-masaraga-campsite",
  name: "Trekking at The Campsite Mount Masaraga, Hobbit Hill & Paayahayan sa Bulod",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijYDJAsjaq3OkcOVv9vwVSZ6SpzWO02ZGlg&s",
  description: "Experience nature at its best through scenic treks and camping at Mount Masaraga, Hobbit Hill, and Paayahayan sa Bulod.",
  municipality: "Ligao City, Albay",
  category: "Hiking / Adventure"
},
{
  id: "ligao-puto-macapuno",
  name: "Taste Ligao’s Famous Puto Macapuno",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8OMp1G3XX-6vZlg4B7_B94gR6EXiVtFCfg&s",
  description: "Indulge in Ligao’s signature delicacy — the sweet and chewy Puto Macapuno, a local favorite.",
  municipality: "Ligao City, Albay",
  category: "Food & Dining / Cultural"
},
{
  id: "ligao-kawa-kawa-bambusetum",
  name: "Nature Viewing at Kawa-Kawa Hill and Bambusetum",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8dwtIN33O9KxfGmnhd5q3fVk8V3A5mtzgg&s",
  description: "Marvel at the scenic beauty of Kawa-Kawa Hill and explore the lush greenery of the Bambusetum Garden.",
  municipality: "Ligao City, Albay",
  category: "Nature / Leisure"
},
{
  id: "ligao-pilgrimage-kawakawa",
  name: "Pilgrimage at Kawa-Kawa Hill & Divine Mercy Monastery Shrine",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM8vgeyz80FJdw3Sw513yusoAlcxblqzKBw&s",
  description: "Reflect and pray at the Fourteen Stations of the Cross at Kawa-Kawa Hill and the Divine Mercy Monastery Shrine.",
  municipality: "Ligao City, Albay",
  category: "Religious / Pilgrimage"
},


  // OAS
{
  id: "oas-coastal-resorts",
  name: "Swimming at the Coastal Resorts of Oas",
  image: "https://images.summitmedia-digital.com/spotph/images/2018/12/17/water-park-oas-3-1545017391.jpg",
  description: "Take a refreshing dip and enjoy seaside relaxation at Oas’ coastal resorts along Albay’s western shores.",
  municipality: "Oas, Albay",
  category: "Beach / Leisure"
},
{
  id: "oas-trinity-islands",
  name: "Diving at Trinity Islands",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8m0MQcXwzTvtDDG0xdjgaTxAIehIakY9Hrg&s",
  description: "Explore the colorful underwater world of Trinity Islands, a hidden gem for diving and snorkeling enthusiasts.",
  municipality: "Oas, Albay",
  category: "Water Activities / Adventure"
},
{
  id: "oas-st-michael-church",
  name: "Heritage Tour at St. Michael the Archangel Parish Church",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxVuc9GPJPEXcXu2C8M8bFnZTYyof2Ly0UA&s",
  description: "Visit one of Albay’s oldest stone churches, rich in history and Spanish colonial architecture.",
  municipality: "Oas, Albay",
  category: "Religious / Heritage"
},
{
  id: "oas-puto-macapuno",
  name: "Shop Oas Puto Macapuno (OTOP)",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwWmKtgh1BciWvJUB_Qgsd0Ww8iFfb_yzmw&s",
  description: "Bring home the town’s famous OTOP product — Oas Puto Macapuno, a soft and creamy rice cake delicacy.",
  municipality: "Oas, Albay",
  category: "Food & Dining / Souvenir"
},
{
  id: "oas-victoria-sabando",
  name: "Water Activities at Victoria Bay and Sabando Beach Resorts",
  image: "https://lh5.googleusercontent.com/p/AF1QipNvBAHV1KX3vA9MZ6MSQxL_Jph_kx9jvTVXt8q7=w1600",
  description: "Have fun with beach sports, swimming, and boating at Victoria Bay and Sabando Beach Resorts.",
  municipality: "Oas, Albay",
  category: "Recreation / Water Activities"
},

  // PIODURAN
{
  id: "pioduran-buhawi-hills",
  name: "Trek Buhawi Hills and Panganiran Ranges",
  image: "https://albay.gov.ph/wp-content/uploads/2020/02/87364783_1305621266305518_1576858665330147328_o-1024x683.jpg",
  description: "Hike across the breathtaking Buhawi Hills and Panganiran Ranges for panoramic views of Pioduran’s countryside.",
  municipality: "Pioduran, Albay",
  category: "Hiking / Nature"
},
{
  id: "pioduran-marigondon-beach",
  name: "Swimming at the Beaches of Marigondon",
  image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577702792.webp?k=cebd23a0438600f86cc30f296fc4b437d80cbac1eec93d474f8b18f5f28410a2&o=",
  description: "Take a relaxing swim and unwind at the scenic coastal beaches of Marigondon, Pioduran.",
  municipality: "Pioduran, Albay",
  category: "Beach / Leisure"
},
{
  id: "pioduran-mangrove-sanctuary",
  name: "Kayaking at the Mangrove Sanctuary",
  image: "https://www.rappler.com/tachyon/r3-assets/AA18C917EB48450CA080EF5E98C8B0DA/img/335109FE19DE49CAA4A3F1F9575BE803/1_-_MAGICAL_RIVER_JOURNEY.jpg",
  description: "Paddle through tranquil mangrove waterways while observing rich coastal biodiversity.",
  municipality: "Pioduran, Albay",
  category: "Adventure / Nature"
},
{
  id: "pioduran-dried-fish-shopping",
  name: "Shopping for Dried Fishes",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluQtw0OhGApagS88U4ClKgtHHQqGGtsoEiA&s",
  description: "Visit the local market to buy freshly sun-dried fish — a must-try local delicacy and souvenir.",
  municipality: "Pioduran, Albay",
  category: "Local Products / Food"
},
{
  id: "pioduran-bulalacao-cave",
  name: "Spelunking at Bulalacao Cave in Brgy. Flores",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1SFD_3ywWhFFC3gNQexxcouH1iDG2rXnoQ&s",
  description: "Explore the hidden wonders of Bulalacao Cave with its rock formations and subterranean chambers.",
  municipality: "Pioduran, Albay",
  category: "Caving / Adventure"
},


  // POLANGUI
{
  id: "polangui-danao-lake",
  name: "Harvest Sinarapan at Danao Lake",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hEgg46Rme6IIfF0nZ9_R6XomsbY8oLrYpA&s",
  description: "Experience harvesting the world’s smallest fish, the Sinarapan, while enjoying the serene beauty of Danao Lake.",
  municipality: "Polangui, Albay",
  category: "AgriTourism / Nature"
},
{
  id: "polangui-galuda-farm",
  name: "Sugar Cane Processing at Galuda Farm",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hEgg46Rme6IIfF0nZ9_R6XomsbY8oLrYpA&s",
  description: "Witness traditional sugar cane processing and learn about local farming techniques at Galuda Farm.",
  municipality: "Polangui, Albay",
  category: "AgriTourism / Educational"
},
{
  id: "polangui-heritage-tour",
  name: "Educational & Heritage Tour of Sts. Peter and Paul Parish",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuOtzZfF-Lke3HKHwOmFZQrFj-LZMLj3RBw&s",
  description: "Visit the historic Sts. Peter and Paul Parish Church and explore Polangui’s rich cultural and religious heritage.",
  municipality: "Polangui, Albay",
  category: "Heritage / Religious"
},


  // LIBON
{
  id: "libon-villa-miranda-grapes",
  name: "Grape Picking at Villa Miranda Farm and Grapes",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Ma7pfTXoCzBGGNfkecMhhzhB5jRwTBqwMg&s",
  description: "Enjoy grape picking and learn about vineyard farming at Villa Miranda Farm — a unique agri-tourism experience in Libon.",
  municipality: "Libon, Albay",
  category: "AgriTourism / Farm Experience"
},
{
  id: "libon-bantigue-cove",
  name: "Island Getaway at Bantigue Cove",
  image: "https://files.peakd.com/file/peakd-hive/itravelrox/Ep7tbrmfaFbv59mNiHcZTEsy7MCBryXwYSSE64ain7SdScMDnwymikHmiMxLprD8huQ.jpg",
  description: "Relax and unwind on the white sandy shores of Bantigue Cove, one of Libon’s best island destinations.",
  municipality: "Libon, Albay",
  category: "Island / Beach"
},
{
  id: "libon-coastal-resorts",
  name: "Swimming at Attorney’s Beach, Mag-Aga Resort, and Other Coastal Resorts",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrfB5XPshQwmMVzQYa8ghoGWTf4YqpzKZCw&s",
  description: "Take a refreshing swim and bask in the sun at Libon’s popular coastal resorts and beaches.",
  municipality: "Libon, Albay",
  category: "Beach / Leisure"
},
{
  id: "libon-cultural-heritage-tour",
  name: "Cultural Heritage Tour at St. James the Greater Parish Church, Libon Museum, and Flaming Water",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOJW6WscUVbemB6zYyOOuj5oUjRi612lNqg&s",
  description: "Discover Libon’s deep cultural roots through its historic church, local museum, and the mystical Flaming Water site.",
  municipality: "Libon, Albay",
  category: "Cultural / Heritage"
},
{
  id: "libon-rawis-sandbar",
  name: "Boat Ride to Rawis Sandbar",
  image: "https://albay.gov.ph/wp-content/uploads/2020/02/Bacacay_04.jpg",
  description: "Take a scenic boat trip to Rawis Sandbar and enjoy panoramic views of Libon’s coastal beauty.",
  municipality: "Libon, Albay",
  category: "Leisure / Nature"
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
