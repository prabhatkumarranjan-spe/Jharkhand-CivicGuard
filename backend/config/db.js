const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.ENV") });

function normalizeMongoUri(uri) {
  let parsed;

  try {
    parsed = new URL(uri);
  } catch {
    throw new Error("MongoDB URI is invalid. Check MONGODB_URI in backend/.ENV.");
  }

  if (
    parsed.protocol === "mongodb:" &&
    parsed.hostname.endsWith(".mongodb.net") &&
    !parsed.port
  ) {
    return uri.replace(/^mongodb:\/\//i, "mongodb+srv://");
  }

  return uri;
}

async function connectDB() {
  const configuredUri = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!configuredUri) {
    throw new Error("MONGODB_URI is missing. Set it in backend/.ENV before starting the server.");
  }

  const mongoUri = normalizeMongoUri(configuredUri);
  await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 10000 });
  return mongoose.connection;
}

module.exports = connectDB;
module.exports.normalizeMongoUri = normalizeMongoUri;