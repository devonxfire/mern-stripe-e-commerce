import express from "express";
import { connectDb } from "./config/connectDb.js";
import authRouter from "./routes/auth.route.js";

// Connect to DB
connectDb();

// Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);

// Error handling
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({ error: message, statusCode, success: false });
});

app.listen(3000, () => console.log("Listening on port 3000"));
