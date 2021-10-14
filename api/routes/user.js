const { User } = require("../models/index");
const router = require("express").Router();
const passport = require("passport");

router.post("/register", (req, res) => {
  const { email } = req.body;
  User.findOrCreate({
    where: { email },
    defaults: req.body,
  })
    .then((user) => res.status(201).send(user))
    .catch((e) => console.log(e));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("ENTRADA LOGIN DEL BACK", req.body);
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

module.exports = router;
