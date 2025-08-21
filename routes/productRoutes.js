import express from "express";
import multer from "multer";
import path from "path";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
import { sellProduct } from "../controllers/SellProductController.js";
const router = express.Router();

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage });

// Routes with image upload handling
router.post("/", upload.single("image"), addProduct);
router.get("/", getProducts);
router.put("/:id", upload.single("image"), updateProduct);
router.delete("/:id", deleteProduct);
router.post("/:id/sell", sellProduct);
export default router;
