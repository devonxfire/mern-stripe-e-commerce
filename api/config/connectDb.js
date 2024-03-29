import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB!");
};
