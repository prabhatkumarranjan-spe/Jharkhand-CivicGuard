require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const complaintRoutes = require("./routes/complaintRoutes");
const assetRoutes = require("./routes/assetRoutes");
const aiRoutes = require("./routes/aiRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CivicGuard Jharkhand backend is running"
  });
});

app.use("/api/complaints", complaintRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/ai", aiRoutes);

app.use(notFound);
app.use(errorHandler);

async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("MONGODB_URI is not set. API will start, but database endpoints will fail until it is configured.");
    } else {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");
    }

    app.listen(PORT, () => {
      console.log(`CivicGuard backend listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to MongoDB:", error.message);
    process.exit(1);
  }
}

if (require.main === module) startServer();

module.exports = { app, startServer };
