import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(404).json({ success: false, error: "Product not found" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // user will send the product data in the request body

  // Save the product to the database
  if (
    !product.title ||
    !product.description ||
    !product.price ||
    !product.image
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error saving product:", error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid product ID" });
  }

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
