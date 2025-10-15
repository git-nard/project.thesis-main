import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Clock, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const itineraries = [
  {
    id: "terrestrial-skyline-express",
    title: "Terrestrial Skyline Express",
    details: `
            DAY 1
            7:00AM - Assembly/Proceed to Tiwi, Albay
            8:30 AM - ETA at Joroan Church
            Activities:
            Offer candles/novena; picture taking
            9:30 AM - Leave for 24/7 Balikbayan Resort
            Snacks at the Resort
            10:30 AM - PhilCeramics
            11:00 AM - Proceed to Brgy. Cobo for Cutlery factory
            Activities:
            Learn the basics of cutlery production
            Photo ops
            Shopping of cutleries
            11:45 AM - Busay falls
            12:15NN - Proceed to Gamboa’s Orchard for Lunch
            11:30PM-Proceed to Cagraray Eco Park
            2:30PM-ETA at Cagraray and Vista Maris Chapel
            3:30PM-Depart Cagraray
            4:30PM-Proceed to Mirisbiris Gardens and Nature Center
            Activities:
            Trek going to the 100 years lava rock formation at the beach front while enjoying the different 
            species of plants along the way.
            5:30 PM – Agua’s Farm
            Enjoy and interact with some of the farm animals in the area 
            6:00 PM – Back to Legazpi City
    `,
  },
  {
    id: "terrestrial-magay on-express",
    title: "Terrestrial Magayon Express",
    details: `
            DAY 1
            8:00AM - Proceed to Camalig, Albay
            8:45AM - ETA at Quitinday Greenhills
            Trekking - 15 to 20 minutes
            9:45AM - Depart for Solong Eco Park and Cave
            10:00AM-ETA at Solong Eco Park
            Activities:
            Pose for your intagramable pics while enjoying the view of the green hills.
            11:00AM-Proceed to Hoyop-hoyopan Cave
            Activities:
            Spelunking/Photo Ops
            12:00NN-Lunch at Quituinan Hill
            1:00PM-El Miro de Shei
            2:00PM-Albay Farmer’s Bounty Village 
            Activities:
            Product demo of cacao and pili / Albay Ice cream box / Mushroom production
            3:00PM-Proceed to Sumlang Lake
            Activities:
            Bamboo Rafting/Kayakking
            OTOP Pasalubong
            5:00PM-Back to Legazpi City
    `,
  },
  {
    id: "terrestrial-magay on-express",
    title: "Terrestrial Magayon Express",
    details: `
            7:00AM-Proceed to Daraga, Albay
            8:30AM-Our Lady of the Gate Parish Church
            9:00AM-Proceed to Cagsawa Ruins
            Budiao Ruins
            10:00AM-All Terrain Vehicle Ride at Mayon Skydrive
            11:00AM-Albay Parks and Wildlife
            11:45AM-Lignon Hills
            12:15PM-Lunch within Legazpi City
            2:00PM-Farm Plate Gabawan Daraga
            4:30PM-Proceed to Kalayaan Park
            5:30PM-Sawangan Park/Legazpi Boulevard
            6:30PM-End of tour
    `,
  },
  {
    id: "greenscape",
    title: "Greenscape",
    details: `
            DAY 1
            8:00AM-Depart for Jovellar
            9:00AM-ETA at Jovellar
            Activity:
            Spelunking at Silay Cave 2
            10:30AM-Jovellar Underground River
            Activities:
            Balsa Ride
            Cliff Jumping and Swimming
            12:00NN-Lunch
            1:00PM-Sigpit Falls
            Swimming
            4:00PM-Proceed to Tay Jose Farm
            4:45PM-Sunset at Mayanpayan Hills
            6:00PM-Back to the hotel
    `,
  },
  {
    id: "greenscape",
    title: "Greenscape",
    details: `
            DAY 2
            7:30AM-Assembly time and Breakfast
            8:00AM-Depart to Ligao City
            8:45AM-Proceed to Carmelite Monastery
            9:30AM-Kawa-kawa Hill/Bambusetum
            12:00NN-Lunch at La Terraza/Nory’s
            1:00PM-Proceed to Mt. Masaraga the Campsite
            ( Picturesque view of Mount Mayon and Masaraga while enjoying Nature at its best )
            3:00PM- Paayahayan sa Bulod
            4:00PM-Hobbit Hill
            4:30PM-Puto Macapuno drop by
            4:45PM-Back to the Hotel
    `,
  },
  {
    id: "greenscape",
    title: "Greenscape",
    details: `
            DAY 3
            6:45PM-Assembly time/Breakfast
            7:00AM-Depart to Pioduran
            8:30AM-ETA at Pioduran
            8:45AM-Trek to Buhawi Hills
            12:00NN-BUhawi Hills
            2:00PM-Trek going down of Buhawi Hills
            5:00PM-ETA at Pioduran town proper
            5:15PM-Back to the hotel
    `,
  },
  {
    id: "greenscape",
    title: "Greenscape",
    details: `
            DAY 4
        6:30AM-Assembly time/Breakfast
        7:00AM-Depart to Libon
        8:30AM-Trek to Mt. Quiasog (2hrs trek)
        10:30AM-ETA at Mt. Quiasog
        (Lunch)
        1:00PM-Going down to Villa Miranda Farm
        3:00PM-ETA at Villa Miranda Farm
        Activities:
        Grape picking (when in season)
        4:30PM-Back to the hotel
    `,
  },
  {
    id: "aquatic-east-coast",
    title: "Aquatic — Albay East Coast",
    details: `
        DAY 01
        7:00 AM-Leave for Tiwi Albay
        8:30 AM-ETA at Brgy.Baybay Tiwi
        8:45 AM-Prepare for Corangon Shoal-15 to 20 mins boat ride
        ( tide dependent, low tide schedule should be monitored )
        10:00 AM-Leave for Malilipot Albay,Brgy 3 Seawall
        Vanishing Island / Sea Breeze ( camping area,cottages,rooms, function hall )
        LUNCH
        2:00 PM-Bacacay Island Hopping
        Mataas Beach
        Murupwerta Rock Formations
        Cagbulacao Rock Formations
        6:00 PM-End of Tour
    `,
  },
  {
    id: "aquatic-gulf-coast",
    title: "Aquatic — Albay Gulf Coast",
    details: `
            DAY O1
            7:30 AM-Proceed to Manito Albay
            8:30 AM-Muladbucad White Beach Resort
            Swimming / Photo ops
            Parong Beach 
            Inang Maharang Boiling Lake
            11:30 AM-Proceed to Brgy.Cawit 
            12:00 NN-Lunch at D ‘ Beach Camp
            3:00 PM-Kayakking at the Mangrove Area
            Kayak Sunset Viewing
            5:30 PM-Back to Legazpi
    `,
  },
  {
    id: "aquatic-gulf-coast",
    title: "Aquatic — Albay Gulf Coast",
    details: `
            DAY 03
            Guinanayan Island Resort
    `,
  },
  {
    id: "aquatic-west-coast",
    title: "Aquatic — Albay West Coast",
    details: `
            DAY O1
            7:00 AM-Proceed to Pioduran Albay
            9:00 AM-ETA @ Aquasilvi Mangroves
            10:00 AM-Proceed to Sitio Tambac Maonon Ligao City
            Visit/ Benchmark of the different resorts at the area/ Photo ops
            Snorkeling at Batong Languyon
            12:00 NN-Lunch at Sabado Nights Restaurant
            1:30 PM-Proceed to Brgy.Cagmanaba Oas Albay
            Punta Estrella Beach / Jump off to Trinity Islands
            5:30 PM-Back to Legazpi ( option overnight stay at Victoria Bay Resorts )
    `,
  },
  {
    id: "aquatic-west-coast",
    title: "Aquatic — Albay West Coast",
    details: `
            DAY 02
            8:00 AM-Proceed to Libon for Attorney’s Beach Resort
            10:00 AM-Bantigue Cove Resort
            12:00 NN-Lunch at Villa Miranda Resort
            Experience the newest Floating Cottage at their resort
            4:00 PM-Back to Legazpi
    `,
  },
];

const RecommendedIteneraries: React.FC = () => {
  useEffect(() => {
    document.title = "Recommended Itineraries - Albay Travel";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6">
          <Link to="/itineraries">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Itineraries
            </Button>
          </Link>
        </div>

        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
            Recommended Itineraries
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Full day-by-day recommended travel circuits across Albay — use these
            as a base or customize your own.
          </p>
        </header>

        <main className="space-y-10">
          {itineraries.map((it) => (
            <article
              key={it.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {it.title}
                    </h2>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                    </div>
                  </div>
                </div>

                {/* Day-by-day details: render preserved whitespace for readability */}
                <div className="prose max-w-none text-gray-800 whitespace-pre-line">
                  {it.details.trim()}
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default RecommendedIteneraries;
