const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    photo: { type: String, trim: true },
    location: { type: String, trim: true },
    type: { type: String, trim: true },
    category: { type: String, trim: true },
    department: { type: String, trim: true },
    riskScore: { type: Number, min: 0, max: 100 },
    severity: { type: String, enum: ["Low", "Medium", "High", "Critical"] },
    urgency: { type: String, enum: ["Low", "Medium", "High", "Critical"] },
    impact: { type: String, enum: ["Low", "Medium", "High", "Critical"] },
    aiReason: { type: String, trim: true },
    recommendedAction: { type: String, trim: true },
    status: { type: String, trim: true, default: "Pending" },
    assignedOfficer: { type: String, trim: true, default: "" },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = mongoose.models.Complaint || mongoose.model("Complaint", complaintSchema);