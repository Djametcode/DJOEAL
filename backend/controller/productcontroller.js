import { ProductModel } from "../model/productmodel.js";

const addProduct = async (req, res) => {
  try {
    req.body.createdBy = req.userModel.username;
    const data = await ProductModel.create({ ...req.body });
    return res.status(200).json({ msg: "success", data });
  } catch (error) {
    return res.status(404).json({ msg: "Fails" });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const data = await ProductModel.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log(Id);
    const data = await ProductModel.findOneAndDelete({ _id: Id });
    if (!data) {
      return res.status(404).json({ msg: "product not found" });
    }

    return res.status(200).json({ msg: "deleted product", data });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await ProductModel.findOneAndUpdate(
      { _id: Id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json({ msg: "success update", data });
  } catch (error) {
    console.log(error);
  }
};

export { addProduct, getAllProduct, deleteProduct, updateProduct };
