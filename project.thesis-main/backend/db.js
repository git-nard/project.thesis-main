// backend/db.js
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");

const { sql, poolPromise } = require("./dbFiles/dbOperation");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const pool = await poolPromise;

    // Check if email exists
    const checkEmailResult = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM Users WHERE Email = @email");

    if (checkEmailResult.recordset.length > 0) {
      return res.status(409).json({ message: "Email already registered." });
    }

    // Insert user
    await pool
      .request()
      .input("name", sql.NVarChar, name)
      .input("email", sql.NVarChar, email)
      .input("passwordHash", sql.NVarChar, hashedPassword)
      .query(
        "INSERT INTO Users (Name, Email, PasswordHash) VALUES (@name, @email, @passwordHash)"
      );

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error." });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide email and password." });
  }

  try {
    const pool = await poolPromise;

    // Find user by email
    const userResult = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM Users WHERE Email = @email");

    const user = userResult.recordset[0];

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Compare password with hash
    const isMatch = await bcrypt.compare(password, user.PasswordHash);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Generate a mock token (replace with JWT if needed)
    const token = "mock-token-1234567890";

    // Send user data and token (exclude password hash)
    res.json({
      token,
      user: {
        id: user.Id,
        name: user.Name,
        email: user.Email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error." });
  }
});

// Catch-all 404 for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
