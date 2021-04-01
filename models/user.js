const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    userId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(100),
    },
  });
};
