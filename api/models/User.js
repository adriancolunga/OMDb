const S = require("sequelize");
const sequelize = require("../config/db");
const { hash, genSalt } = require("bcrypt");

class User extends S.Model {}
User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize, modelName: "user" }
);

User.prototype.hashPw = function (pw, salt) {
  return hash(pw, salt);
};

User.beforeCreate((user) => {
  return genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hashPw(user.password, salt);
    })
    .then((hash) => (user.password = hash));
});

module.exports = User;
