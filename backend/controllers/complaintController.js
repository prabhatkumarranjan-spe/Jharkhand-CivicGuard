const mongoose = require("mongoose");
const { analyzeComplaint } = require("../services/geminiService");

function getComplaintModel() {
  try {
    return require("../models/Complaint");
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      throw Object.assign(new Error("Complaint model is not available yet. Add models/Complaint.js from Person 3."), { statusCode: 503 });
    }
    throw error;
  }
}

function ensureValidId(id) {
  if (!mongoose.isValidObjectId(id)) throw Object.assign(new Error("Invalid ID"), { statusCode: 400 });
}

async function createComplaint(req, res, next) {
  try {
    const Complaint = getComplaintModel();
    const analysis = await analyzeComplaint(req.body);
    const complaint = await Complaint.create({
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo,
      location: req.body.location,
      type: req.body.type,
      category: analysis.category,
      department: analysis.department,
      riskScore: analysis.riskScore,
      severity: analysis.severity,
      urgency: analysis.urgency,
      impact: analysis.impact,
      aiReason: analysis.reason,
      recommendedAction: analysis.recommendedAction,
      status: "Pending"
    });
    res.status(201).json({ success: true, message: "Complaint created successfully", data: complaint });
  } catch (error) { next(error); }
}

async function getComplaints(req, res, next) {
  try {
    const Complaint = getComplaintModel();
    const filter = {};
    if (req.query.city) filter.location = new RegExp(`^${req.query.city.trim()}$`, "i");
    if (req.query.type) filter.type = req.query.type.trim();
    if (req.query.status) filter.status = req.query.status.trim();
    const query = Complaint.find(filter);
    if (req.query.sort === "risk") query.sort({ riskScore: -1 });
    else query.sort({ createdAt: -1 });
    const complaints = await query;
    res.status(200).json({ success: true, message: "Complaints retrieved successfully", data: complaints });
  } catch (error) { next(error); }
}

async function getComplaintById(req, res, next) {
  try {
    ensureValidId(req.params.id);
    const complaint = await getComplaintModel().findById(req.params.id);
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });
    res.status(200).json({ success: true, message: "Complaint retrieved successfully", data: complaint });
  } catch (error) { next(error); }
}

async function verifyComplaint(req, res, next) {
  try {
    ensureValidId(req.params.id);
    const complaint = await getComplaintModel().findById(req.params.id);
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });
    if (complaint.status !== "Pending") return res.status(400).json({ success: false, message: "Only Pending complaints can be verified" });
    complaint.status = "Verified";
    await complaint.save();
    res.status(200).json({ success: true, message: "Complaint verified successfully", data: complaint });
  } catch (error) { next(error); }
}

async function assignComplaint(req, res, next) {
  try {
    ensureValidId(req.params.id);
    const complaint = await getComplaintModel().findById(req.params.id);
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });
    if (complaint.status !== "Verified") return res.status(400).json({ success: false, message: "Only Verified complaints can be assigned" });
    complaint.assignedOfficer = req.body.assignedOfficer;
    complaint.status = "Assigned";
    await complaint.save();
    res.status(200).json({ success: true, message: "Complaint assigned successfully", data: complaint });
  } catch (error) { next(error); }
}

async function updateComplaintStatus(req, res, next) {
  try {
    ensureValidId(req.params.id);
    const complaint = await getComplaintModel().findById(req.params.id);
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });
    complaint.status = req.body.status;
    await complaint.save();
    res.status(200).json({ success: true, message: "Complaint status updated successfully", data: complaint });
  } catch (error) { next(error); }
}

module.exports = { createComplaint, getComplaints, getComplaintById, verifyComplaint, assignComplaint, updateComplaintStatus };
