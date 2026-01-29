const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "appdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("DB error");
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("✅ Backend running on port 3000");
});
