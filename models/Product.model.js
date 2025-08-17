import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    imageURL: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
