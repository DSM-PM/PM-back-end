const Sequelize = require("sequelize");
const { Card } = require("../models");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("list", {
    title: {
      type: DataTypes.STRING(100),
    },
    pos: {
      type: DataTypes.DOUBLE,
      defaultValue: 65535,
    },
  });
};
