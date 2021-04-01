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

const get = async (req, res) => {
  const { id } = req.params;
  const item = await Board.findOne({
    where: { id },
    include: [
      {
        model: List,
        include: [
          {
            model: Card,
          },
        ],
      },
    ],
  });
  if (!item)
    return res.status(404).json({
      message: "실패",
    });

  item.lists.sort((a, b) => a.pos - b.pos);
  item.lists.forEach((list) => {
    list.cards.sort((a, b) => a.pos - b.pos);
  });

  res.json({ item });
};


module.exports = {
  create,
  get,
};
