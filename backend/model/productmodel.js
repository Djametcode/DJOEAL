import { UserModel } from "./usermodel.js";
import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    nameProduct: {
      type: String,
      required: [true, "Please provide product Name"],
    },
    price: {
      type: Number,
      required: [true, "Please provide Price"],
    },
    images: {
      type: String,
      default: "",
    },
    stock: {
      type: Number,
      required: [true, "please provide Stock"],
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);
export { ProductModel };
