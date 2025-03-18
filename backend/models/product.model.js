import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true } // this will add createdAt and updatedAt fields
);

const Product = mongoose.model("Product", productSchema); // "Product" is the name of the collection

export default Product;
