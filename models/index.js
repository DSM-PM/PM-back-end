"use strict";

const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Board = require("./board")(sequelize, Sequelize);
db.Card = require("./card")(sequelize, Sequelize);
db.List = require("./list")(sequelize, Sequelize);
db.Project = require("./project")(sequelize, Sequelize);
db.Issue = require("./issue")(sequelize, Sequelize);

db.User.hasMany(db.Board, { foreignKey: "userId", targetKey: "userId" });
db.Board.belongsTo(db.User, { foreignKey: "userId" });
db.Board.hasMany(db.List);
db.User.hasMany(db.Project, { foreignKey: "userId", targetKey: "userId" });
db.Project.belongsTo(db.User, { foreignKey: "userId" });
db.Project.hasMany(db.Issue);

module.exports = db;
