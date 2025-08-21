// controllers/saleController.js
import Sale from "../models/Sale.model.js";
import Product from "../models/Product.model.js";

export const createSale = async (req, res) => {
  try {
    const { products, totalAmount, paymentMethod } = req.body;

    // Deduct stock and prepare sale details
    const detailedProducts = await Promise.all(
      products.map(async (p) => {
        const product = await Product.findById(p.productId);
        if (!product) throw new Error(`Product not found: ${p.productId}`);
        
        if (product.stock < p.qty) {
          throw new Error(`Not enough stock for ${product.name}`);
        }

        // Deduct stock
        product.stock -= p.qty;
        await product.save();

        return {
          productId: product._id,
          name: product.name,
          qty: p.qty,
          price: product.price,
        };
      })
    );

    const sale = new Sale({
      products: detailedProducts,
      totalAmount,
      paymentMethod,
    });

    await sale.save();
    res.status(201).json(sale);
  } catch (error) {
    console.error("Error creating sale:", error.message);
    res.status(500).json({ message: error.message });
  }
};
export const getDailySales = async (req, res) => {
  try {
    const sales = await Sale.find()
      .populate("products.productId", "name") // get product name
      .sort({ createdAt: -1 });

    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sales", error });
  }
};
export const getSales = async (req, res) => {
  try {
    const { from, to } = req.query;

    // Build date filter if both from and to are provided
    let filter = {};
    if (from && to) {
      filter.createdAt = {
        $gte: new Date(from + "T00:00:00Z"),
        $lte: new Date(to + "T23:59:59Z"),
      };
    }

    const sales = await Sale.find(filter)
      .populate("products.productId", "name price") // populate productId with name + price
      .sort({ createdAt: -1 }); // latest first

    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await Sale.findByIdAndDelete(id);

    if (!sale) return res.status(404).json({ message: 'Sale not found' });

    res.json({ message: 'Sale deleted successfully', sale });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};