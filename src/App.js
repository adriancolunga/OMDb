import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/home/Landing";
import LoginForm from "./components/home/LoginForm";
import { SingleMovie } from "./components/home/SingleMovie";
import RegisterForm from "./components/home/RegisterForm";
import Favorites from "./components/home/Favorites";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/favorites" component={Favorites} />
        <Route
          path="/movie/:id"
          render={({ match }) => <SingleMovie id={match.params.id} />}
        />
        <Redirect from="/" to="/login" />
      </Switch>
    </>
  );
}
