module.exports = (sequelize, DataTypes) => {
  return sequelize.define("project", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
    },
    userId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  });
};
