const { departmentByType } = require("../utils/departmentMapper");

const allowedTypes = Object.keys(departmentByType);
const allowedStatuses = ["Pending", "Verified", "Assigned", "In Progress", "Completed", "Closed"];
const allowedLevels = ["Low", "Medium", "High", "Critical"];

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateComplaintInput(req, res, next) {
  const { name, description, location, type } = req.body;
  const missing = ["name", "description", "location", "type"].filter((field) => !isNonEmptyString(req.body[field]));

  if (missing.length) {
    return res.status(400).json({ success: false, message: `Required fields cannot be empty: ${missing.join(", ")}` });
  }
  if (!allowedTypes.includes(type.trim())) {
    return res.status(400).json({ success: false, message: `Invalid type. Allowed types: ${allowedTypes.join(", ")}` });
  }
  req.body.name = name.trim();
  req.body.description = description.trim();
  req.body.location = location.trim();
  req.body.type = type.trim();
  next();
}

function validateAnalyzeInput(req, res, next) {
  const { description, location, type } = req.body;
  const missing = ["description", "location", "type"].filter((field) => !isNonEmptyString(req.body[field]));
  if (missing.length) return res.status(400).json({ success: false, message: `Required fields cannot be empty: ${missing.join(", ")}` });
  if (!allowedTypes.includes(type.trim())) return res.status(400).json({ success: false, message: `Invalid type. Allowed types: ${allowedTypes.join(", ")}` });
  req.body.description = description.trim();
  req.body.location = location.trim();
  req.body.type = type.trim();
  next();
}

function validateStatus(req, res, next) {
  if (!isNonEmptyString(req.body.status) || !allowedStatuses.includes(req.body.status.trim())) {
    return res.status(400).json({ success: false, message: `Invalid status. Allowed statuses: ${allowedStatuses.join(", ")}` });
  }
  req.body.status = req.body.status.trim();
  next();
}

function validateAssignment(req, res, next) {
  if (!isNonEmptyString(req.body.assignedOfficer)) {
    return res.status(400).json({ success: false, message: "assignedOfficer is required and cannot be empty" });
  }
  req.body.assignedOfficer = req.body.assignedOfficer.trim();
  next();
}

function validateAIOutput(analysis) {
  const requiredStrings = ["category", "department", "severity", "urgency", "impact", "reason", "recommendedAction"];
  const invalidString = requiredStrings.find((field) => !isNonEmptyString(analysis?.[field]));
  if (invalidString) throw Object.assign(new Error(`Invalid AI response: missing or invalid ${invalidString}`), { statusCode: 502, code: "INVALID_AI_RESPONSE" });
  if (!Number.isFinite(Number(analysis.riskScore)) || Number(analysis.riskScore) < 0 || Number(analysis.riskScore) > 100) {
    throw Object.assign(new Error("Invalid AI response: riskScore must be between 0 and 100"), { statusCode: 502, code: "INVALID_AI_RESPONSE" });
  }
  for (const field of ["severity", "urgency", "impact"]) {
    if (!allowedLevels.includes(analysis[field])) throw Object.assign(new Error(`Invalid AI response: ${field} must be Low, Medium, High, or Critical`), { statusCode: 502, code: "INVALID_AI_RESPONSE" });
  }
  return { ...analysis, riskScore: Number(analysis.riskScore) };
}

module.exports = { allowedTypes, allowedStatuses, validateComplaintInput, validateAnalyzeInput, validateStatus, validateAssignment, validateAIOutput };
