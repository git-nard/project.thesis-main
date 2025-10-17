// backend/dbFiles/dbConfig.js

const config = {
  user: "test",       // Use double backslash for domain\user or just username
  password: "test123",  // Add password here if needed
  server: "MSI",       // Usually localhost or your MSSQL server hostname
  database: "Wanderer",
  options: {
    trustServerCertificate: true,  // For local dev, disable encryption verification
    enableArithAbort: true,
  },
  port: 1433,   // Default MSSQL port
};

module.exports = config;
