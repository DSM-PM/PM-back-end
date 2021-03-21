const router = require("express")();
const controller = require("../controller/user");

router.post("/register", controller.register);
router.post("/auth", controller.auth);

module.exports = router;
