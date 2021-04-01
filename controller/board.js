const { Board, List, Card } = require("../models");

const create = async (req, res, next) => {
  const userId = req.decoded.id;
  console.log(userId);
  const { title } = req.body;

  try {
    if (!title) throw new Error("제목이 없음")
    const board = await Board.create({ title, userId });
    res.status(201).json({ item: board });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};


module.exports = {
  create,
};
