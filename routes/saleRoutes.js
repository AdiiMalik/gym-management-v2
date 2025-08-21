

import express from "express";
import { createSale, getDailySales, getSales, deleteSale} from "../controllers/saleController.js";

const router = express.Router();

router.post("/", createSale);
router.get("/daily", getDailySales);
router.get("/", getSales); 
router.delete('/:id', deleteSale);
export default router;
