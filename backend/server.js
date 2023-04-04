import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

//PACKAGES
import connectDB from "./db/connectDB.js";
import { authRouter } from "./routes/auth.js";
import { productRouter } from "./routes/product.js";
import auth from "./middleware/authentication.js";

app.use(express.json());
app.use("/api/v6/auth", authRouter);
app.use("/api/v6/product", auth, productRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log("Server running ......"));
  } catch (error) {
    console.log(error);
  }
};

start();
