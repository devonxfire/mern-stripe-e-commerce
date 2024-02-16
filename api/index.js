import express from "express";
import { connectDb } from "./config/connectDb.js";
import authRouter from "./routes/auth.route.js";
import menuRouter from "./routes/menu.route.js";
import getUser from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import stripe from "stripe";

// Connect to DB
connectDb();

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Stripe
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const stripeItems = new Map([
  [1, { name: "The Cheezanator", amount: 795 }],
  [2, { name: "Southern Chicken Burger", amount: 685 }],
]);

// Routes
app.use("/api/auth", authRouter);
app.use("/api/menu", menuRouter);
app.use("/api/user", getUser);

// Error handling
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({ error: message, statusCode, success: false });
});

app.listen(3000, () => console.log("Listening on port 3000"));
