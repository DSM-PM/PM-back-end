const router = require("express")();
const controller = require("../controller/project");
const { authMiddleware } = require("../middlewares/auth");

router.post("/", authMiddleware, controller.create);
router.get("/", authMiddleware, controller.query);
router.delete("/:id", controller.destroy);

module.exports = router;
