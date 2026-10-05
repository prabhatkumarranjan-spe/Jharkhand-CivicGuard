const connectDB = require("../config/db");
const Asset = require("../models/Asset");
const { assets, classification } = require("./assets");
const mongoose = require("mongoose");

async function seedDemoAssets() {
  await connectDB();

  const operations = assets.map((asset) => ({
    updateOne: {
      filter: { assetId: asset.assetId },
      update: { $setOnInsert: asset },
      upsert: true,
    },
  }));

  const result = await Asset.bulkWrite(operations, { ordered: true });
  console.log(
    `${classification}: ${result.upsertedCount} new assets inserted; existing demo assets were left unchanged.`
  );
}

seedDemoAssets()
  .catch((error) => {
    console.error("Failed to seed demo assets:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
