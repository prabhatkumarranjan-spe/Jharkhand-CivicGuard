const { analyzeComplaint } = require("../services/geminiService");

async function analyzeComplaintRequest(req, res, next) {
  try {
    const analysis = await analyzeComplaint(req.body);
    res.status(200).json({ success: true, message: "Complaint analyzed successfully", analysis });
  } catch (error) { next(error); }
}

module.exports = { analyzeComplaintRequest };
