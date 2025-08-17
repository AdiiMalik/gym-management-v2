import Sale from "../models/Sale.model.js";
import Product from "../models/Product.model.js";

// Create Sale (Checkout)
export const createSale = async (req, res) => {
  try {
    const { products, paymentMethod } = req.body;
    let total = 0;

    // Calculate total & reduce stock
    for (let item of products) {
      total += item.price * item.qty;
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.qty }
      });
    }

    const sale = new Sale({
      products,
      totalAmount: total,
      paymentMethod
    });

    await sale.save();
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all sales
export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find().sort({ createdAt: -1 });
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
