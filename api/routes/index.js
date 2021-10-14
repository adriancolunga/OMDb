const router = require("express").Router();
const userRoute = require("./user");
const favRoute = require("./favorites");
const dataRoute = require("./data");

router.use("/user", userRoute);
router.use("/favorite", favRoute);
router.use("/data", dataRoute);

module.exports = router;
