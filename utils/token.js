import jwt from "jsonwebtoken";

export const access = async (id, secret) => {
  return await jwt.sign({ id }, secret, { expiresIn: "1000m" });
};
