const S = require("sequelize");
const sequelize = require("../config/db");

class Favs extends S.Model {}
Favs.init(
  {
    Title: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    imdbID: {
      type: S.STRING,
      allowNull: false,
    },
    Poster: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "favs" }
);

module.exports = Favs;
