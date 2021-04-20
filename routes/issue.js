const router = require("express")();
const controller = require("../controller/issue");

router.post("/", controller.create);

module.exports = router;
