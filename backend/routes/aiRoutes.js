const express = require("express");
const { analyzeComplaintRequest } = require("../controllers/aiController");
const { validateAnalyzeInput } = require("../middleware/validationMiddleware");

const router = express.Router();

router.post("/analyze", validateAnalyzeInput, analyzeComplaintRequest);

module.exports = router;
