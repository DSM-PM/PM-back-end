const express = require("express");
const routes = require("./routes");
const { sequelize } = require("./models");
const app = express();

app.use(express.json());
require("dotenv").config();
app.use("/", routes);
sequelize.sync();

app.listen(5000, () => {
  console.log("server on");
});
