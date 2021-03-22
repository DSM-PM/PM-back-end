const router = require("express")();
const user = require("./user");
const board = require("./board");
router.use("/user", user);
router.use("/board", board);
module.exports = router;
