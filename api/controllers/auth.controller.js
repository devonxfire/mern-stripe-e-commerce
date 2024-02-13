import { errorHandler } from "../utils/errorHandler.js";
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Signup
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Required fields check
  if (!username || !email || !password) {
    return next(errorHandler(401, "All fields are required"));
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return next(errorHandler(401, "User already exists"));
    }

    // Hash password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to DB
    await newUser.save();
    return res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  // Required fields check
  if (!email || !password) {
    return next(errorHandler(401, "All fields are required"));
  }

  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    return next(errorHandler(404, "User does not exist"));
  }

  // Compare passwords
  const isValidPassword = bcryptjs.compareSync(password, user.password);

  if (!isValidPassword) {
    return next(errorHandler(403, "Invalid password"));
  }

  // Create token and store in cookie
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("access_token", token, { httpOnly: true });

  return res.status(200).json("User signed in successfully");
};
