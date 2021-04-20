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

module.exports = {
  create,
};
