import { Issue } from "../models";

const create = async (req, res, next) => {
  const { content, id, category } = req.body;
  try {
    if (!content) throw new Error("내용이 없음");
    const issue = await Issue.create({ content, id, category });
    res.status(201).json({ item: issue });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const get = async (req, res, next) => {
  const id = req.params.id;
  try {
    const issueList = await Issue.findAll({ where: { id } });
    res.json({ issueList });
  } catch (err) {
    res.status(404).json({
      message: "실패",
      err: err.message,
    });
  }
};

module.exports = {
  create,
  get,
};
