const { User, Favs } = require("../models/index");
const router = require("express").Router();
const passport = require("passport");

router.post("/", (req, res) => {
  const { Title, imdbID, Poster } = req.body.movie;
  Favs.create({
    Title,
    imdbID,
    Poster,
  }).then((fav) => {
    User.findByPk(req.body.userId).then((user) => {
      fav.setUser(user);
      res.send(fav);
    });
  });
});

router.get("/all", (req, res) => {
  Favs.findAll().then((favs) => res.status(200).send(favs));
})

router.delete("/:id", (req, res) => {
  Favs.destroy({
    where: { imdbID: req.params.id },
  }).then(() => res.status(204).end());
});

module.exports = router;
