const { IssueList, IssueCard, Project } = require("../models");

const create = async (req, res, next) => {
  const userId = req.decoded.id;
  const { title } = req.body;

  try {
    if (!title) throw new Error("제목이 없음");
    const project = await Project.create({ title, userId });
    res.status(201).json({ item: project });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = {
  create,
};
