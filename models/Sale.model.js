import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        qty: Number,
        price: Number
      }
    ],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["Cash", "Card"], default: "Cash" }
  },
  { timestamps: true }
);

export default mongoose.model("Sale", saleSchema);
