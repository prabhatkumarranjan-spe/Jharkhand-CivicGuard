const mongoose = require("mongoose");

function getAssetModel() {
  try {
    return require("../models/Asset");
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") throw Object.assign(new Error("Asset model is not available yet. Add models/Asset.js from Person 3."), { statusCode: 503 });
    throw error;
  }
}

async function getAssets(req, res, next) {
  try {
    const assets = await getAssetModel().find({}).sort({ riskScore: -1 });
    res.status(200).json({ success: true, message: "Assets retrieved successfully", data: assets });
  } catch (error) { next(error); }
}

async function getAssetById(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) throw Object.assign(new Error("Invalid ID"), { statusCode: 400 });
    const asset = await getAssetModel().findById(req.params.id);
    if (!asset) return res.status(404).json({ success: false, message: "Asset not found" });
    res.status(200).json({ success: true, message: "Asset retrieved successfully", data: asset });
  } catch (error) { next(error); }
}

module.exports = { getAssets, getAssetById };
