const router = require("express")();
const controller = require("../controller/board");
const { authMiddleware } = require("../middlewares/auth");

router.post("/", authMiddleware, controller.create);
router.get("/", authMiddleware, controller.query);
router.get("/:id", controller.get);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
