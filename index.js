const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// This should print immediately
console.log("Starting server...");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/myprojectdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

