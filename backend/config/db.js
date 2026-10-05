const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.ENV") });

async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is missing. Set it in backend/.ENV before starting the server.");
  }

  await mongoose.connect(mongoUri);
  return mongoose.connection;
}

module.exports = connectDB;