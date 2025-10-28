import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    google: any;
  }
}

interface LocationItem {
  name: string;
  lat: number;
  lng: number;
  type: "destination" | "spot" | "activity" | "hotel" | "restaurant" | "event";
}

const InteractiveMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("spot");

  // ✅ Use your key from .env
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const locations: LocationItem[] = [
    { name: "Mayon Volcano", lat: 13.243296506618261, lng: 123.70282423083981, type: "spot" },
    { name: "Cagsawa Ruins", lat: 13.166165503176495, lng: 123.7011489731595, type: "spot" },
    { name: "Danao Lake", lat: 13.35785650935286, lng: 123.57349801006664, type: "spot" },
    { name: "Kawa-Kawa Hill", lat: 13.226493084715312, lng: 123.55472403069774, type: "spot" },
    { name: "Joroan Church", lat: 13.49191717973196, lng: 123.61806328942602, type: "spot" },
    { name: "Mayon Skyline", lat: 13.28501986904518, lng: 123.67118133399738, type: "spot" },
    { name: "Misibis Beach Resort & Casino", lat: 13.245307627880814, lng: 123.90929895192971, type: "spot" },
    { name: "Vera Falls", lat: 13.353157280331926, lng: 123.62143379729368, type: "spot" },
    { name: "Blacksand Beaches", lat: 13.306223665250249, lng: 123.78170547294108, type: "spot" },
    { name: "Cagraray Eco Park", lat: 13.242803516830104, lng: 123.90248149147996, type: "spot" },
    { name: "Pototan Cave", lat: 13.250096449551442, lng: 123.9384566638988, type: "spot" },
    { name: "Embarcadero de Legazpi", lat: 13.143547049313332, lng: 123.758487567307, type: "spot" },
    { name: "Kapuntukan Hill", lat: 13.142945016654034, lng: 123.75925318993724, type: "spot" },
    { name: "Japanese Tunnel", lat: 13.17076781166089, lng: 123.6642903916029, type: "spot" },
    { name: "Albay Park and Wildlife", lat: 13.158095526011044, lng: 123.73054300138695, type: "spot" },
    { name: "Lignon Hill", lat: 13.161246321792555, lng: 123.72941055368405, type: "spot" },
    { name: "Legazpi Boulevard", lat: 13.136178856711231, lng: 123.76230115368391, type: "spot" },
    { name: "Hoyop-Hoyopan Cave", lat: 13.121829438097175, lng: 123.65575777130444, type: "spot" },
    { name: "Calabidongan Cave", lat: 13.11858852414638, lng: 123.6357949107058, type: "spot" },
    { name: "Mainit Spring", lat: 13.079158722589318, lng: 123.60085769389335, type: "spot" },
    { name: "Quituinan Hill", lat: 13.170659825592727, lng: 123.66529239036346, type: "spot" },
    { name: "Sumlang Lake", lat: 13.179182325095846, lng: 123.671641669029, type: "spot" },
    { name: "Quitinday Green Hills", lat: 13.100589577898186, lng: 123.61622427787462, type: "spot" },
    { name: "Busay Falls", lat: 13.308931876405667, lng: 123.73519413049685, type: "spot" },
    { name: "Jovellar Underground River", lat: 13.081282595837754, lng: 123.60927648288269, type: "spot" },
    { name: "Legazpi Boulevard", lat: 13.135035984302041, lng: 123.76365689282538, type: "destination" },
    { name: "Sawangan Park", lat: 13.142776932531286, lng: 123.76067299793192, type: "destination" },
    { name: "Albay Parks and Wildlife", lat: 13.157483036556284, lng: 123.73048905368411, type: "destination" },
    { name: "Black Lava ATV (Your Brother ATV)", lat: 13.171199691056714, lng: 123.73372285233197, type: "destination" },
    { name: "Seventy Six (76) Farm", lat: 13.197896398329252, lng: 123.74859670641997, type: "destination" },
    { name: "Pinaric View Deck", lat: 13.135167201825668, lng: 123.72519726717537, type: "destination" },
    { name: "St. Raphael Parish Church", lat: 13.153085614340085, lng: 123.75381190212548, type: "destination" },
    { name: "Legazpi Highlands", lat: 13.124777425855033, lng: 123.7285473963382, type: "destination" },
    { name: "Kalayaan Park", lat: 13.156833697960709, lng: 123.74720524475052, type: "destination" },
    { name: "St. Gregory the Great Cathedral", lat: 13.139511050573958, lng: 123.73298259121485, type: "destination" },
    { name: "Museo de Legazpi", lat: 13.139103358771225, lng: 123.73367713833933, type: "destination" },
    { name: "Peñaranda Park", lat: 13.138618315646532, lng: 123.73364073923061, type: "destination" },
    { name: "Liberty Bell", lat: 13.138916142740786, lng: 123.73493943833921, type: "destination" },
    { name: "Mythical Heroes of Ibalong", lat: 13.131187368993611, lng: 123.76893666946745, type: "destination" },
    { name: "Rawis Landing", lat: 13.17436113457184, lng: 123.75271652998738, type: "destination" },
    { name: "Giant Statue of Our Lady of Nuestra Senora of Salvation @ Tamaoyan", lat: 13.170467959771136, lng: 123.73926945368433, type: "destination" },
    { name: "Cagsawa Ruins - Busay Daraga Albay – National Cultural Treasure", lat: 13.166092420328315, lng: 123.70113880135185, type: "destination" },
    { name: "Legazpi Boulevard", lat: 13.1345, lng: 123.7587, type: "activity" },
    { name: "Pottery Making and Shopping at Brgy. Putsan Tiwi Albay", lat: 13.477101241625812, lng: 123.67147131079616, type: "activity" },
    { name: "Dining at DJC Halo Halo for the best Halo Halo in Albay", lat: 13.149033082983319, lng: 123.75048481528471, type: "activity" },
    { name: "Pilgrimage Activities at Joroan Church", lat: 13.488589479020916, lng: 123.61802120892769, type: "activity" },
    { name: "Maritime Procession of Our Lady of Salvation (August)", lat: 13.502194663850918, lng: 123.61713802186887, type: "activity" },
    { name: "Sinimbahanan Ruins & the Churches of St. Lawrence Tour", lat: 13.473376891016422, lng: 123.68099487444547, type: "activity" },
    { name: "Swimming at Vera Falls", lat: 13.35653450054345, lng: 123.62111950706458, type: "activity" },
    { name: "Water tubing activities at Brgy. Soa Malinao", lat: 13.407203336000237, lng: 123.67578299107238, type: "activity" },
    { name: "Culture and Heritage Church at Sts. Anne & Joachim Parish Church", lat: 13.398619672939779, lng: 123.70468413988965, type: "activity" },
    { name: "Going up / Trekking Mayon Skyline and Planetarium", lat: 13.294114049839363, lng: 123.67116955839018, type: "activity" },
    { name: "Cultural Heritage Tour (St. John the Baptist Church, Bahay na Bato)", lat: 13.364656038299001, lng: 123.72930080051736, type: "activity" },
    { name: "Shopping / Educational Tour at the Pandayan / Cutleries in Brgy. Cobo", lat: 13.370144097569678, lng: 123.7318195422299, type: "activity" },
    { name: "Swimming at the Different Resorts in Tabaco City", lat: 13.358983284905166, lng: 123.72857947076795, type: "activity" },
    { name: "Dine In / Check-in at their Restaurants and Hotels", lat: 13.35937786110055, lng: 123.72937293820763, type: "activity" },
    { name: "Enjoy Nature / Take Instagram Pics at Hiraya Manawari Nature Park", lat: 13.355907821621006, lng: 123.69264412426666, type: "activity" },
    { name: "Nature Viewing / Dine In / Strolling at Malilipot Sea Wall and Boulevard", lat: 13.324513279750272, lng: 123.74406714105524, type: "activity" },
    { name: "Pinukpok Weaving at Pinukpok Handicrafts", lat: 13.30536898383377, lng: 123.73343594424793, type: "activity" },
    { name: "Swimming at Vanishing Island, Busay Falls, and Spring Resorts", lat: 13.308503142691894, lng: 123.73471508107703, type: "activity" },
    { name: "The Oriental Legazpi", lat: 13.1438, lng: 123.7348, type: "hotel" },
    { name: "Casa Cecilia Gamboa’s Orchard - Purok 1 San Jose, Malilipot Albay", lat: 13.292167837873539, lng: 123.7538122056836, type: "hotel" },
    { name: "Misibis Resort and Hotel Management Inc. - Sitio Mosboron, Brgy. Misibis, Bacacay, Albay", lat: 13.243009304789343, lng: 123.90738520036273, type: "hotel" },
    { name: "Patio de San Jose Resort and Convention Center, Inc. - Purok 5, Brgy. San Jose, Malilipot, Albay", lat: 13.305649726460338, lng: 123.75348467801977, type: "hotel" },
    { name: "Bienvinida Hotel and Resort - Purok 4, Brgy. San Juan, Sto. Domingo, Albay", lat: 13.232275110869447, lng: 123.77800195309982, type: "hotel" },
    { name: "Costal View Beach Resort - Calayucay, Sto. Domingo, Albay", lat: 13.236511094681818, lng: 123.78257428008783, type: "hotel" },
    { name: "Costa Palmera Resort and Seaside Apartel - Purok 3, Calayucay, Sto. Domingo, Albay", lat: 13.23838678030078, lng: 123.78741949542932, type: "hotel" },
    { name: "Dorotea Resort and Spa - Brgy. Cajugotan, Sto. Domingo, Albay", lat: 13.281710469283867, lng: 123.80982006011223, type: "hotel" },
    { name: "Facade Hotel - A.A. Berces St., Tabaco City, Albay", lat: 13.357407461960362, lng: 123.72860552011183, type: "hotel" },
    { name: "HCG Residence Mansion - HCG Bldg., Ziga Avenue, Tabaco City, Albay", lat: 13.357566966840562, lng: 123.72990783433893, type: "hotel" },
    { name: "Palces Resort - San Francisco, Malilipot, Albay", lat: 13.312996677309032, lng: 123.74893834195318, type: "hotel" },
    { name: "Reyes Beach Resort and Restaurant - Purok 2, Brgy. Calayucay, Sto. Domingo, Albay", lat: 13.238473485894186, lng: 123.78613090425952, type: "hotel" },
    { name: "Manhattan Beach Resort - Brgy. Calayucay, Sto. Domingo, Albay", lat: 13.238486430356778, lng: 123.78993075309984, type: "hotel" },
    { name: "1st Colonial Grill", lat: 13.1381, lng: 123.7359, type: "restaurant" },
    { name: "DJC Halo Halo - Albay", lat: 13.457831836292339, lng: 123.6805639672095, type: "restaurant" },
    { name: "Magayon Pizzeria - Albay", lat: 13.472455151024176, lng: 123.67779009214631, type: "restaurant" },
    { name: "24/7 Balikbayan Resort Restaurant - Albay", lat: 13.487354112951493, lng: 123.63444020892788, type: "restaurant" },
    { name: "Papa Roland's - Albay", lat: 13.365623266158627, lng: 123.72677476277404, type: "restaurant" },
    { name: "Graceland - Albay", lat: 13.357302843251494, lng: 123.7300060107729, type: "restaurant" },
    { name: "Jollibee Tabaco - Albay", lat: 13.357681858756443, lng: 123.72987768008996, type: "restaurant" },
    { name: "McDonald's Tabaco - Albay", lat: 13.358078311959533, lng: 123.729982316629, type: "restaurant" },
    { name: "Chowking Tabaco - Albay", lat: 13.35823681256468, lng: 123.73003683776058, type: "restaurant" },
    { name: "Mang Inasal Tabaco - Albay", lat: 13.358176304036002, lng: 123.72996375310198, type: "restaurant" },
    { name: "BBQ King Tabaco - Albay", lat: 13.356159737397952, lng: 123.7303092531022, type: "restaurant" },
    { name: "Taiwan Blended Teas Tabaco - Albay", lat: 13.360430025722039, lng: 123.73093016659624, type: "restaurant" },
    { name: "Tea Habit Tabaco - Albay", lat: 13.362796687966174, lng: 123.73130590359602, type: "restaurant" },
    { name: "Chai Connection Tabaco - Albay", lat: 13.35567310111809, lng: 123.73050229010562, type: "restaurant" },
    { name: "Bon Appetea Tabaco - Albay", lat: 13.357557890538523, lng: 123.7285494806696, type: "restaurant" },
    { name: "Mesa Mano Restaurant Tabaco - Albay", lat: 13.357407604631192, lng: 123.72769305368652, type: "restaurant" },
    { name: "The Brew Authoritea Tabaco - Albay", lat: 13.357060491098444, lng: 123.72691579601425, type: "restaurant" },
    { name: "Tabaco Benvenuti Italian Resto - Albay", lat: 13.359555795710156, lng: 123.73520036717818, type: "restaurant" },
    { name: "Abing's Food Haus Tabaco - Albay", lat: 13.36264708889768, lng: 123.72418356142255, type: "restaurant" },
    { name: "Noks Lechon Manok & Refreshment Tabaco - Albay", lat: 13.359064619085807, lng: 123.73019163834198, type: "restaurant" },
    { name: "Q Place Kubo Restogrill Tabaco - Albay", lat: 13.358685174594616, lng: 123.7259541635024, type: "restaurant" },
    { name: "Angel's Pizza Tabaco - Albay", lat: 13.35738765907362, lng: 123.72850278252274, type: "restaurant" },
    { name: "Unicorner Cafe Tabaco - Albay", lat: 13.35836455474085, lng: 123.73504547604672, type: "restaurant" },
    { name: "Urbanitea Tabaco - Albay", lat: 13.355265185402853, lng: 123.72020048601732, type: "restaurant" },
    { name: "Singapo Lah Cafe Tabaco - Albay", lat: 13.356442614491508, lng: 123.7242209536865, type: "restaurant" },
    { name: "Molave Cafe Tabaco - Albay", lat: 13.35368303981929, lng: 123.73134385368665, type: "restaurant" },
    { name: "Ishiaya Greys Cafe Tabaco - Albay", lat: 13.377870554422811, lng: 123.71871096680049, type: "restaurant" },
    { name: "Ishiaya Garden Bistro Tabaco - Albay", lat: 13.377333090811538, lng: 123.71870262299758, type: "restaurant" },
    { name: "Bona's Cafe Tabaco - Albay", lat: 13.358677750578074, lng: 123.73059337923186, type: "restaurant" },
    { name: "Martha's Kitchen Tabaco - Albay", lat: 13.359736778720846, lng: 123.72343329569416, type: "restaurant" },
    { name: "Magayon Festival", lat: 13.139, lng: 123.734, type: "event" },
    { name: "Daraga Albay Cagsawa Festival", lat: 13.122905722337055, lng: 123.69541638795278, type: "event" },
    { name: "Puto Festival", lat: 13.140799794718102, lng: 123.37224534929382, type: "event" },
    { name: "Sarung Banggui Festival", lat: 13.232647486708998, lng: 123.77950279546238, type: "event" },
    { name: "Layag Festival", lat: 13.2363362735808, lng: 124.00649738732592, type: "event" },
    { name: "Pinangat Festival", lat: 13.183051814974426, lng: 123.65627952524332, type: "event" },
    { name: "Pulang-Anggui Festival", lat: 13.296586964880866, lng: 123.4871243892817, type: "event" },
    { name: "Tabak Festival", lat: 13.361270691014134, lng: 123.72840918842826, type: "event" },
    { name: "Lubid Festival", lat: 13.299287647731134, lng: 123.71818832476086, type: "event" },
    { name: "Alinao Festival", lat: 13.397388795947329, lng: 123.70495733801216, type: "event" },
    { name: "Libon Paroy Festival", lat: 13.260505608780253, lng: 123.37126309160068, type: "event" },
    { name: "Coron Festival", lat: 13.46278837655458, lng: 123.64025660521003, type: "event" },
    { name: "Ibalong Festival", lat: 13.144736598546825, lng: 123.75307958008612, type: "event" },
    { name: "Guinobatan Longganisa Festival", lat: 13.192008737017437, lng: 123.59979756301958, type: "event" },
    { name: "Karagumoy Festival", lat: 13.295782904477186, lng: 123.87458156443331, type: "event" },
    { name: "Quipia Festival", lat: 13.079746998017947, lng: 123.60919845124967, type: "event" },
    { name: "Nito – Talahib Festival", lat: 13.125862734789436, lng: 123.8669803785929, type: "event" },
    { name: "Tinapa Festival", lat: 13.048024083422133, lng: 123.4612559068636, type: "event" },
    { name: "Sunflower Festival", lat: 13.24007319828191, lng: 123.53285052144747, type: "event" },
  ];

  useEffect(() => {
    if (!window.google && apiKey) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else if (window.google) {
      initMap();
    }
  }, [apiKey]);

  const initMap = () => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 13.1438, lng: 123.7353 },
        zoom: 11,
      });
      setMap(newMap);
    }
  };

  useEffect(() => {
    if (!map) return;

    // Remove old markers
    markers.forEach((m) => m.setMap(null));

    // Filter locations by category
    const filtered = locations.filter((loc) => loc.type === activeCategory);
    const newMarkers: any[] = [];

    filtered.forEach((loc) => {
      const marker = new window.google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map,
        title: loc.name,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div style="font-weight:bold">${loc.name}</div>`,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      newMarkers.push(marker);
    });

    setMarkers(newMarkers);
  }, [activeCategory, map]);

  const categories = [
    { key: "destination", label: "Destinations" },
    { key: "spot", label: "Tourist Spots" },
    { key: "activity", label: "Activities" },
    { key: "hotel", label: "Hotels" },
    { key: "restaurant", label: "Restaurants" },
    { key: "event", label: "Events" },
  ];

  return (
    <div className="w-full">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <Button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`${
              activeCategory === cat.key
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-xl shadow border"
      ></div>
    </div>
  );
};

export default InteractiveMap;
