import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    onSpecial: {
      type: Boolean,
      required: true,
    },
    imageUrl: {
      type: String,

      default:
        "https://static.vecteezy.com/system/resources/previews/013/159/720/non_2x/burger-fast-food-icon-clipart-illustration-vector.jpg",
    },
  },
  { timestamps: true }
);

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);
