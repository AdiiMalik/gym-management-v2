export const sellProduct = async (req, res) => {
  try {
    const { id } = req.params; // Product ID
    const { quantity } = req.body; // Sold quantity

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock" });
    }

    // Reset daily sales if date changed
    const today = new Date().toDateString();
    if (product.lastSaleDate.toDateString() !== today) {
      product.dailySales = 0;
    }

    // Update fields
    product.stock -= quantity;
    product.sales += quantity;
    product.dailySales += quantity;
    product.lastSaleDate = new Date();

    await product.save();

    res.json({ message: "Sale recorded", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
