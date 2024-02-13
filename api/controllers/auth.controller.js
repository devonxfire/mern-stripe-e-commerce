import { errorHandler } from "../utils/errorHandler.js";

// Signup
export const signup = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(errorHandler(401, "All fields are required"));
  }
};
