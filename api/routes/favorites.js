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

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const favs = await user.getFavs();
    res.send(favs);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", (req, res) => {
  Favs.destroy({
    where: { imdbID: req.params.id },
  }).then(() => res.status(204).end());
});

module.exports = router;
