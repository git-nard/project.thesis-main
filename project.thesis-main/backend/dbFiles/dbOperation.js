// backend/dbFiles/dbOperation.js
const sql = require("mssql");
const config = require("./dbConfig");

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("✅ Connected to MSSQL");
    return pool;
  })
  .catch(err => {
    console.error("❌ Database Connection Failed!", err);
    throw err;
  });

module.exports = {
  sql,
  poolPromise,
};
