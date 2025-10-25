import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CloudRain, Flame, Info } from "lucide-react";

interface AlertData {
  type: "weather" | "volcano" | "info";
  title: string;
  description: string;
  time?: string;
}

const LiveAlert = () => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      const results: AlertData[] = [];

      try {
        // 🌦 WEATHER UPDATE
        try {
          const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Legazpi,PH&appid=025726ae353d8aafa5f04c4cf8f38747&units=metric`
          );
          const weather = await weatherRes.json();
          if (weather.weather && weather.main) {
            results.push({
              type: "weather",
              title: "Weather Update",
              description: `Current weather in Albay: ${weather.weather[0].description}, ${weather.main.temp}°C.`,
            });
          }
        } catch {
          results.push({
            type: "info",
            title: "Weather Feed Unavailable",
            description: "Unable to fetch current weather information.",
          });
        }

        // 🌋 VOLCANO ALERT
        try {
          const volcanoFeedUrl = encodeURIComponent(
            "https://www.phivolcs.dost.gov.ph/index.php?option=com_content&view=category&id=19&Itemid=30&format=feed&type=rss"
          );
          const volcanoRes = await fetch(`https://api.allorigins.win/get?url=${volcanoFeedUrl}`);
          const volcanoText = await volcanoRes.json();
          const parser = new DOMParser();
          const xml = parser.parseFromString(volcanoText.contents, "text/xml");
          const firstVolcanoItem = xml.querySelector("item");

          if (firstVolcanoItem) {
            results.push({
              type: "volcano",
              title: firstVolcanoItem.querySelector("title")?.textContent || "Volcano Alert",
              description: firstVolcanoItem.querySelector("description")?.textContent || "",
              time: firstVolcanoItem.querySelector("pubDate")?.textContent
                ? new Date(firstVolcanoItem.querySelector("pubDate")!.textContent!).toLocaleString()
                : undefined,
            });
          } else {
            results.push({
              type: "info",
              title: "No Active Volcano Alerts",
              description: "No recent volcano bulletins from PHIVOLCS.",
            });
          }
        } catch (err) {
          console.error("Volcano fetch failed:", err);
          results.push({
            type: "info",
            title: "Volcano Feed Unavailable",
            description: "Unable to fetch volcano alerts from PHIVOLCS.",
          });
        }

        setAlerts(results);
      } catch (error) {
        console.error("Error fetching alerts:", error);
        setAlerts([
          {
            type: "info",
            title: "Error",
            description: "An unexpected error occurred while fetching alerts.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
    const interval = setInterval(fetchAlerts, 5 * 60 * 1000); // refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: AlertData["type"]) => {
    switch (type) {
      case "weather":
        return <CloudRain className="h-4 w-4 text-blue-500" />;
      case "volcano":
        return <Flame className="h-4 w-4 text-red-500" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-4 text-sm text-gray-500">
        Fetching live alerts...
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert, idx) => (
        <Alert key={idx}>
          <AlertTitle className="flex items-center gap-2">
            {getIcon(alert.type)}
            {alert.title}
          </AlertTitle>
          <AlertDescription>
            {alert.description}
            {alert.time && (
              <div className="text-xs text-gray-400 mt-1">
                {`Last updated: ${alert.time}`}
              </div>
            )}
          </AlertDescription>
        </Alert>
      ))}
    </div>
  );
};

export default LiveAlert;
