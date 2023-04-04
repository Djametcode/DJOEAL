import { UserModel } from "../model/usermodel.js";

const register = async (req, res) => {
  try {
    const data = await UserModel.create({ ...req.body });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(501).json({ msg: "Please fill with correct" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(501).json({ msg: "User not found" });
    }

    const isPass = await user.comparePassword(password);
    if (!isPass) {
      return res.status(501).json({ msg: "Password wrong" });
    }

    const token = await user.createJWT();
    return res
      .status(200)
      .json({ user: { username: user.username, email: user.email }, token });
  } catch (error) {
    console.log(error);
  }
};

export { register, login };
