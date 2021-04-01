const jwt = require("jsonwebtoken");

export const authMiddleware = async (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) {
    res.status(403).json({ message: "token required" });
  }
  try {
    await jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) throw new Error(err);
      req.decoded = decoded;
      next();
    });
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};
