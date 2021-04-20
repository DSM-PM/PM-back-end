const router = require("express")();
const controller = require("../controller/issue");

router.post("/", controller.create);
router.get("/:id", controller.get);

module.exports = router;
