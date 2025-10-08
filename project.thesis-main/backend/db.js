const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,           // SQL login user
  password: process.env.DB_PASS,       // SQL login password
  server: process.env.DB_HOST,         // e.g. localhost
  database: process.env.DB_NAME,       // your DB name
  options: {
    encrypt: false,                    // set true for Azure
    trustServerCertificate: true       // needed for local dev
  }
};

async function connectDB() {
  try {
    await sql.connect(config);
    console.log('✅ Connected to SQL Server');
  } catch (err) {
    console.error('❌ Database connection failed:', err);
  }
}

module.exports = { sql, connectDB };
