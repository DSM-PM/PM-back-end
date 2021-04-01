const express = require("express");
const routes = require("./routes");
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
require("dotenv").config();
app.use("/", routes);
sequelize.sync();

app.listen(5000, () => {
  console.log("server on");
});
