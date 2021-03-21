import bcrypt from "bcrypt-nodejs";

export const passwordEncoding = async (password) => {
  return await bcrypt.hashSync(password);
};

export const passwordCompare = async (inputPassword, encodedPassword) => {
  return await bcrypt.compareSync(inputPassword, encodedPassword);
};
