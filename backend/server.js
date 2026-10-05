const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const complaintRoutes = require("./routes/complaintRoutes");
const assetRoutes = require("./routes/assetRoutes");
const aiRoutes = require("./routes/aiRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = new Set([
  ...(process.env.WEB_ORIGIN || "").split(",").map((origin) => origin.trim()).filter(Boolean),
  ...(process.env.NODE_ENV === "production"
    ? []
    : ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:4173", "http://127.0.0.1:4173"])
]);

app.use(cors({
  origin(origin, callback) {
    callback(null, !origin || allowedOrigins.has(origin));
  }
}));
app.use(express.json({ limit: "10mb" }));

app.get("/api/health", (req, res) => {
  const databaseConnected = mongoose.connection.readyState === 1;
  res.status(databaseConnected ? 200 : 503).json({
    success: databaseConnected,
    database: databaseConnected ? "connected" : "disconnected",
    message: databaseConnected
      ? "CivicGuard Jharkhand backend and database are running"
      : "CivicGuard Jharkhand backend is running, but MongoDB is not connected"
  });
});

app.use("/api/complaints", complaintRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/ai", aiRoutes);

app.use(notFound);
app.use(errorHandler);

async function startServer() {
  try {
    await connectDB();
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`CivicGuard backend listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to MongoDB:", error.message);
    if (error.name === "MongooseServerSelectionError") {
      console.error("Check MongoDB Atlas Network Access, cluster status, and database-user credentials.");
    }
    process.exit(1);
  }
}

if (require.main === module) startServer();

module.exports = { app, startServer };
