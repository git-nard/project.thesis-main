// backend/db.js
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const { sql, poolPromise } = require("./dbFiles/dbOperation");

const app = express();
const port = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

app.use(cors());
app.use(bodyParser.json());

// Utility: Generate JWT
function generateToken(user) {
  return jwt.sign(
    {
      id: user.Id,
      name: user.Name,
      email: user.Email,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

// Middleware: Verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Expect "Bearer <token>"

  if (!token) return res.status(401).json({ message: "Access token missing" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token" });
    req.user = user;
    next();
  });
}

// -------------------- REGISTER --------------------
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "Please fill all fields." });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const pool = await poolPromise;

    const checkEmailResult = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM Users WHERE Email = @email");

    if (checkEmailResult.recordset.length > 0)
      return res.status(409).json({ message: "Email already registered." });

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

// -------------------- LOGIN --------------------
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Please provide email and password." });

  try {
    const pool = await poolPromise;

    const userResult = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM Users WHERE Email = @email");

    const user = userResult.recordset[0];
    if (!user)
      return res.status(401).json({ message: "Invalid email or password." });

    const isMatch = await bcrypt.compare(password, user.PasswordHash);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password." });

    // ✅ Generate JWT token
    const token = generateToken(user);

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

// -------------------- PROTECTED ROUTE EXAMPLE --------------------
app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", sql.Int, req.user.id)
      .query("SELECT Id, Name, Email FROM Users WHERE Id = @id");

    const user = result.recordset[0];
    res.json({ user });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({ message: "Server error." });
  }
});

// -------------------- 404 HANDLER --------------------
app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
