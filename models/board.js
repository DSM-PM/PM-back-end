module.exports = (sequelize, DataTypes) => {
  return sequelize.define("board", {
    title: {
      type: DataTypes.STRING(100),
    },
    bgColor: {
      type: DataTypes.STRING(100),
      defaultValue: "rgb(0, 121, 191)",
    },
  });
};
