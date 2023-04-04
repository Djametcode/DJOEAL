import { UserModel } from "../model/usermodel.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Please login first" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    req.userModel = {
      userID: payload.userId,
      username: payload.username,
    };
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
