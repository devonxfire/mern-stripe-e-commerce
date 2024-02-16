import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://cdn.dribbble.com/users/935504/screenshots/3123811/media/fd9fdb08dfd37d6a13e95d3298f4a82b.png?resize=768x576&vertical=center",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
