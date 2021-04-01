const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("card", {
    title: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.STRING(100),
    },
    pos: {
      type: DataTypes.DOUBLE,
      defaultValue: 65535,
    },
  });
};
