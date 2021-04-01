module.exports = (sequelize, DataTypes) => {
  return sequelize.define("board", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
    },
    bgColor: {
      type: DataTypes.STRING(100),
      defaultValue: "rgb(0, 121, 191)",
    },
    userId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  });
};
