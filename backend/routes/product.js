import express, { Router } from "express";
const route = express.Router();
import {
  addProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
} from "../controller/productcontroller.js";

route.post("/create", addProduct);
route.get("/get-all", getAllProduct);
route.delete("/delete/:Id", deleteProduct);
route.patch("/update-product/:Id", updateProduct);

const productRouter = route;
export { productRouter };
