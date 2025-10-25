process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from "express";
import fetch from "node-fetch";

const app = express();

// simple helper to extract tag content
function extractTagContent(text, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = text.match(regex);
  return match ? match[1].trim() : null;
}

// helper to safely fetch and parse XML-ish data
async function safeFetchText(url) {
  const res = await fetch(url);
  return await res.text();
}

app.get("/api/phivolcs", async (req, res) => {
  let volcanoData = { message: "No volcano update available." };

  try {
    // 🌋 VOLCANO FEED
    try {
      const volcanoText = await safeFetchText(
        "https://www.phivolcs.dost.gov.ph/index.php/rss/volcano"
      );
      const itemMatch = volcanoText.match(/<item>([\s\S]*?)<\/item>/i);
      if (itemMatch) {
        const item = itemMatch[1];
        volcanoData = {
          title: extractTagContent(item, "title") || "Untitled volcano update",
          description:
            extractTagContent(item, "description")?.replace(/<[^>]+>/g, "") ||
            "No description available.",
          link: extractTagContent(item, "link"),
          pubDate: extractTagContent(item, "pubDate"),
        };
      }
    } catch (err) {
      console.warn("⚠️ Volcano fetch failed:", err.message);
    }

    res.json({
      source: "PHIVOLCS Volcano Feed",
      timestamp: new Date().toISOString(),
      volcano: volcanoData,
    });
  } catch (err) {
    console.error("❌ PHIVOLCS fetch failed:", err);
    res.status(500).json({
      error: "Unable to fetch PHIVOLCS data at the moment.",
    });
  }
});

app.listen(3000, () => console.log("✅ PHIVOLCS RSS API running on port 3000"));
