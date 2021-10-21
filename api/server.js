const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./config/db");

const { User } = require("./models/index");
const routes = require("./routes/index");

const app = express();

///// MIDDLEWARE /////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secret"));

// require('./config/passport')(passport)

// const LocalStrategy = require("passport-local").Strategy; // estategia local de autenticación
// const User = require("../models/User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    
    (email, password, done) => {
      User.findOne({
        where: { email },
      })
      .then((user) => {
        if (!user) return done(null, false);
        user.hashPw(password, user.salt).then((pwHashed) => {
          if (pwHashed !== user.password) return done(null, false);
          else return done(null, user);
        });
      })
      .catch(done);
      }
      )
      );
      
      passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findOne(id).then((user) => done(null, user));
      });
      
      app.use(passport.initialize());
      app.use(passport.session());
      
      ///// ROUTES /////
      app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    console.log("CONECTADO");
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch(console.error);
