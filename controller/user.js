const { User } = require("../models");
import { passwordCompare, passwordEncoding } from "../utils/bcyrpt";
import { access } from "../utils/token";

const register = async (req, res) => {
  const password = await passwordEncoding(req.body.password);
  try {
    await User.create({
      userId: req.body.userId,
      password: password,
    });
    res.status(200).json({
      message: "회원가입성공",
    });
  } catch (err) {
    res.status(409).json({
      message: "이미있음",
      err: err.message,
    });
  }
};

const auth = async (req, res) => {
  const user = await findUser(req.body.userId);
  if (!(await passwordCompare(req.body.password, user.password))) res.status(404).json("실패");

  const accessToken = await access(user.userId, process.env.SECRET_KEY);
  res.status(200).json(accessToken);
};

export const findUser = async (userId) => {
  try {
    const user = await User.findOne({ where: { userId: userId } });
    return user;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  register,
  auth,
};
