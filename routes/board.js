const router = require("express")();
const controller = require("../controller/board");

router.post("/", controller.create);
router.get("/", controller.query);
router.get("/:id", controller.get);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
