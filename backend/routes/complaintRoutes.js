const express = require("express");
const {
  createComplaint,
  getComplaints,
  getComplaintById,
  verifyComplaint,
  assignComplaint,
  updateComplaintStatus
} = require("../controllers/complaintController");
const {
  validateComplaintInput,
  validateStatus,
  validateAssignment
} = require("../middleware/validationMiddleware");

const router = express.Router();

router.route("/").post(validateComplaintInput, createComplaint).get(getComplaints);
router.get("/:id", getComplaintById);
router.patch("/:id/verify", verifyComplaint);
router.patch("/:id/assign", validateAssignment, assignComplaint);
router.patch("/:id/status", validateStatus, updateComplaintStatus);

module.exports = router;
