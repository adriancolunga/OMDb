const User = require("./User");
const Favs = require("./Favs");
const Data = require("./Data");

User.hasMany(Favs);
Favs.belongsTo(User);

module.exports = { User, Favs, Data };
