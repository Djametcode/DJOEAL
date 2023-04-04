import express from "express";
const route = express.Router();
import { register, login } from "../controller/authcontroller.js";

route.post("/regist", register);
route.post("/login", login);

const authRouter = route;
export { authRouter };
