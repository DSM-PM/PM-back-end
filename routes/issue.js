const router = require("express")();
const controller = require("../controller/issue");
const { authMiddleware } = require("../middlewares/auth");

router.post("/", authMiddleware, controller.create);
router.get("/:id", authMiddleware, controller.get);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.destroy);

module.exports = router;
