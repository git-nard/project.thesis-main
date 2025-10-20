import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  MapPin,
  Mountain,
  Cloud,
  Thermometer,
  Users,
  History,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Wider container with more padding */}
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Widened main content area */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">About Albay</h1>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Discover the beauty, history, and culture of Albay Province in the
            Philippines.
          </p>

          {/* Hero Image (taller and full width) */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
            <img
              src="https://albay.gov.ph/wp-content/uploads/2020/02/joenabells_20200226_120826_0.jpg"
              alt="Mayon Volcano"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">
                Albay Province, Philippines
              </h2>
              <p className="text-white/90">
                Home to the perfect cone of Mayon Volcano
              </p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 text-red-500 mb-2" />
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-sm text-gray-600">
                  Bicol Region, Philippines
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-blue-500 mb-2" />
                <h3 className="font-bold mb-1">Population</h3>
                <p className="text-sm text-gray-600">
                  Approximately 1.3 million
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Thermometer className="h-10 w-10 text-orange-500 mb-2" />
                <h3 className="font-bold mb-1">Climate</h3>
                <p className="text-sm text-gray-600">
                  Tropical with rainy season
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About Section */}
          <div className="space-y-10 mb-12 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <History className="h-6 w-6 mr-2 text-gray-700" />
                History
              </h2>
              <p className="text-gray-700 mb-4">
                Albay has a rich history dating back to pre-colonial times. The
                province was established on March 10, 1917, although it had
                existed as a political unit since the Spanish colonial period.
                The name "Albay" is derived from the local word "Albay," meaning
                "to the volcano," referring to the iconic Mayon Volcano.
              </p>
              <p className="text-gray-700">
                Throughout its history, Albay has been shaped by volcanic
                eruptions, particularly from Mayon Volcano, which has erupted
                over 50 times since its first recorded eruption in 1616. The
                most destructive eruption occurred in 1814, which buried the
                town of Cagsawa, leaving only the bell tower of its church
                visible above the volcanic debris.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Mountain className="h-6 w-6 mr-2 text-gray-700" />
                Geography
              </h2>
              <p className="text-gray-700 mb-4">
                Albay is located in the Bicol Peninsula at the southeastern part
                of Luzon island. The province is characterized by its varied
                topography, from the iconic Mayon Volcano to coastal areas along
                the Albay Gulf and the Pacific Ocean.
              </p>
              <p className="text-gray-700">
                Mayon Volcano, standing at 2,462 meters (8,077 feet), is the
                province's most prominent geographical feature. Known for its
                perfect cone shape, it is one of the most active volcanoes in
                the Philippines and a major tourist attraction. The province
                also features fertile plains, rolling hills, and beautiful
                beaches.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Cloud className="h-6 w-6 mr-2 text-gray-700" />
                Climate
              </h2>
              <p className="text-gray-700">
                Albay has a tropical rainforest climate with no pronounced dry
                season. The province experiences significant rainfall throughout
                the year, with the heaviest precipitation occurring from
                November to January during the northeast monsoon. The average
                annual temperature ranges from 25°C to 28°C (77°F to 82°F), with
                high humidity levels. Albay is occasionally affected by
                typhoons, particularly during the rainy season from June to
                November.
              </p>
            </div>
          </div>

          {/* Culture Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Culture and Cuisine</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2">Cultural Heritage</h3>
                <p className="text-gray-700 mb-4">
                  Albay's culture is a blend of indigenous Bicolano traditions
                  and influences from Spanish colonization. The province is
                  known for its colorful festivals, traditional crafts, and
                  religious practices. The people of Albay, known as Albayanos,
                  are known for their resilience, hospitality, and strong
                  community bonds.
                </p>
                <p className="text-gray-700">
                  Traditional arts and crafts in Albay include abaca weaving,
                  pottery, and woodcarving. The province is also home to various
                  cultural festivals, including the Magayon Festival, which
                  celebrates the legend of Daragang Magayon and the beauty of
                  Mayon Volcano.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Bicolano Cuisine</h3>
                <p className="text-gray-700 mb-4">
                  Albay is famous for its distinctive cuisine, characterized by
                  the liberal use of chili peppers and coconut milk. Bicolano
                  food is known for its spicy and flavorful dishes that reflect
                  the region's agricultural abundance.
                </p>
                <p className="text-gray-700">
                  Signature dishes include Bicol Express, Laing, and Pinangat —
                  all cooked with coconut milk and chili. The region is also
                  known for its unique desserts and snacks, such as sili (chili)
                  ice cream — a spicy-sweet treat that has become a must-try for
                  visitors.
                </p>
              </div>
            </div>
          </div>

          {/* Tourism Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tourism in Albay</h2>
            <p className="text-gray-700 mb-6">
              Albay has emerged as a premier tourist destination in the
              Philippines, offering a diverse range of attractions from natural
              wonders to historical sites and cultural experiences. The
              province's tourism industry has grown significantly in recent
              years, contributing to its economic development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2">Key Attractions</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Mayon Volcano - The iconic perfect cone volcano</li>
                  <li>Cagsawa Ruins - Historical site with Mayon Volcano backdrop</li>
                  <li>Lignon Hill Nature Park - Panoramic views of Legazpi City</li>
                  <li>Sumlang Lake - Serene lake with Mayon Volcano views</li>
                  <li>Hoyop-Hoyopan Cave - Natural cave with interesting formations</li>
                  <li>Embarcadero de Legazpi - Waterfront commercial complex</li>
                  <li>Daraga Church - Spanish colonial-era church</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Activities</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>ATV rides around Mayon Volcano</li>
                  <li>Hiking and trekking</li>
                  <li>Cultural tours and festival participation</li>
                  <li>Culinary tours and cooking classes</li>
                  <li>Beach activities and island hopping</li>
                  <li>Wildlife watching at Albay Park and Wildlife</li>
                  <li>Shopping for local handicrafts and souvenirs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
