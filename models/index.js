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

db.User.hasMany(db.Board, { foreignKey: "userId", targetKey: "userId" });
db.Board.belongsTo(db.User, { foreignKey: "userId" });
db.Board.hasMany(db.List);
db.List.hasMany(db.Card);
module.exports = db;
