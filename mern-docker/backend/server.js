import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// Use env var if provided, else default to the Docker DNS name "mongo"
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/mern_db";

mongoose.connect(MONGO_URL, { dbName: "mern_db" })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo error:", err));

// Simple API
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express backend 🚀" });
});

// Health
app.get("/health", (_, res) => res.send("OK"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on http://0.0.0.0:${PORT}`));

