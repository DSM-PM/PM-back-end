const { Board, List } = require("../models");

const create = async (req, res) => {
  let { title } = req.body;

  if (!title) res.status(400).end("보드 제목이 없음");

  const board = Board.build({ title });
  await board.save().catch((err) => {
    res.status(404).json({
        message: "저장 실패",
        err: err.message,
      });
  });
  await List.bulkCreate([
    { title: "Todo", pos: 65535, boardId: board.id },
    { title: "Doing", pos: 65535 * 2, boardId: board.id },
    { title: "Done", pos: 65535 * 4, boardId: board.id },
  ]);

  res.status(201).json({ item: board });
};


module.exports = {
  create,
};
