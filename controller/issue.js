import { Issue } from "../models";

const create = async (req, res, next) => {
  const { content, board_id, category } = req.body;
  try {
    if (!content) throw new Error("내용이 없음");
    const issue = await Issue.create({ content, board_id, category });
    res.status(201).json({ item: issue });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const get = async (req, res, next) => {
  const board_id = req.params.id;
  try {
    const issueList = await Issue.findAll({ where: { board_id } });
    res.json({ issueList });
  } catch (err) {
    res.status(404).json({
      message: "실패",
      err: err.message,
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;
  try {
    await Issue.update({ category }, { where: { id } });
    res.status(201).json({
      message: "카드 카테고리 수정 성공",
    });
  } catch (err) {
    res.status(404).json({
      message: "실패",
      err: err.message,
    });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await Issue.destroy({ where: { id } });
    res.status(204).json({
      message: "삭제 성공",
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

module.exports = {
  create,
  get,
  update,
  destroy,
};
