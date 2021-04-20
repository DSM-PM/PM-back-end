module.exports = (sequelize, DataTypes) => {
    return sequelize.define("issue", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING(100),
      },
      category: {
        type: DataTypes.STRING(100),
      },
      board_id: {
        type: DataTypes.INTEGER,
      },
    });
  };
  