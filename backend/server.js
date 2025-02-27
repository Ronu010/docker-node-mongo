const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("✅ Connected to MongoDB"));

app.get("/", (req, res) => {
  res.send("🚀 Hello from Dockerized Node.js App!");
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
