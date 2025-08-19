import Product from "../models/Product.model.js";

// Add new product
// export const addProduct = async (req, res) => {
//   try {
//     const { name, description, category, price, stock } = req.body;

//     const product = new Product({
//       name,
//       description,
//       category,
//       price,
//       stock,
//      imageURL: req.file ? `/uploads/${req.file.filename}` : null
     
//     });

//     await product.save();
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export const addProduct = async (req, res) => {
  try {
    const { name, description, category, price, stock } = req.body;

    const baseURL = process.env.BASE_URL || "";

    const product = new Product({
      name,
      description,
      category,
      price,
      stock,
      imageURL: req.file ? `${baseURL}/uploads/${req.file.filename}` : null,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.imageURL = `/uploads/${req.file.filename}`;
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
