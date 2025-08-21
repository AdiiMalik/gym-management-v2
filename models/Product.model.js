
import express from "express";
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  price: { type: Number, required: true },
  stock: { type: Number, required: true }, // Quantity
  sales: { type: Number, default: 0 }, // Total sales
  dailySales: { type: Number, default: 0 }, // Sales of today
  lastSaleDate: { type: Date, default: new Date() }, // Reset checker
  imageURL: String,
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
