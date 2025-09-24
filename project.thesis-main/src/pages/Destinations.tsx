import { useEffect, useState } from "react";

interface Destination {
  destination_id: number;
  province: string;
  city_municipality: string;
  destination_name: string;
}

function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    const url = city
      ? `http://localhost:5000/api/destinations/${city}`
      : "http://localhost:5000/api/destinations";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, [city]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tourist Destinations in Albay</h1>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Cities</option>
        <option value="Legazpi City">Legazpi City</option>
        <option value="Daraga">Daraga</option>
        <option value="Camalig">Camalig</option>
        {/* Add more cities if needed */}
      </select>

      <ul className="mt-4 space-y-2">
        {destinations.map((d) => (
          <li key={d.destination_id} className="border p-3 rounded-lg">
            <strong>{d.destination_name}</strong>
            <p>{d.city_municipality}, {d.province}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Destinations;
