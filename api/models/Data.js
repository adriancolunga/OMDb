const S = require("sequelize");
const sequelize = require("../config/db");

class Data extends S.Model {}
Data.init(
  {
    Poster: {
      type: S.STRING,
    },
    Genre: {
      type: S.STRING,
    },
    Released: {
      type: S.STRING,
    },
    Rated: {
      type: S.STRING,
    },
    imdbRating: {
      type: S.STRING,
    },
    Director: {
      type: S.STRING,
    },
    Writer: {
      type: S.STRING,
    },
    Actors: {
      type: S.STRING,
    },
    Plot: {
      type: S.STRING,
    },
  },
  { sequelize, modelName: "data" }
);

module.exports = Data