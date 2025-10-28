// backend/routes/userPreference.js
const express = require("express");
const sql = require("mssql");
const dbConfig = require("../dbFiles/dbConfig");

const router = express.Router();

// 🟢 GET: Fetch user preferences
router.get("/:id/preferences", async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool
      .request()
      .input("UserID", sql.Int, id)
      .query("SELECT Preference FROM UserPreferences WHERE UserID = @UserID");

    const preferences = result.recordset.map((row) => row.Preference);
    res.json({ preferences });
  } catch (error) {
    console.error("Error fetching preferences:", error);
    res.status(500).json({ message: "Error fetching preferences" });
  }
});

// 🟡 POST: Save or update user preferences
router.post("/:id/preferences", async (req, res) => {
  const { id } = req.params;
  const { preferences } = req.body;

  if (!Array.isArray(preferences)) {
    return res.status(400).json({ message: "Invalid preferences format" });
  }

  try {
    const pool = await sql.connect(dbConfig);

    // Delete old preferences first
    await pool
      .request()
      .input("UserID", sql.Int, id)
      .query("DELETE FROM UserPreferences WHERE UserID = @UserID");

    // Insert new preferences
    for (const pref of preferences) {
      await pool
        .request()
        .input("UserID", sql.Int, id)
        .input("Preference", sql.NVarChar(100), pref)
        .query(
          "INSERT INTO UserPreferences (UserID, Preference) VALUES (@UserID, @Preference)"
        );
    }

    res.json({ success: true, message: "Preferences updated successfully" });
  } catch (error) {
    console.error("Error saving preferences:", error);
    res.status(500).json({ message: "Error saving preferences" });
  }
});

module.exports = router;
