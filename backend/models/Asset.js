const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    assetId: { type: String, trim: true, unique: true, sparse: true },
    city: { type: String, trim: true },
    type: { type: String, trim: true },
    location: { type: String, trim: true },
    lastMaintenance: { type: Date },
    previousComplaints: { type: Number, min: 0, default: 0 },
    condition: { type: String, trim: true },
    traffic: { type: Number, min: 0, max: 100 },
    rainfallRisk: { type: Number, min: 0, max: 100 },
    riskScore: { type: Number, min: 0, max: 100 },
    status: { type: String, trim: true, default: "Active" },
  },
  { versionKey: false }
);

module.exports = mongoose.models.Asset || mongoose.model("Asset", assetSchema);