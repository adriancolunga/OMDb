import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const user = localStorage.getItem('user')

export const REGISTER_REQUEST = createAsyncThunk(
  "REGISTER",
  ({ userForm, emailForm, pwForm }) => {
    // console.log("REGISTER ACTION DEL FRONT");
    return axios
      .post("http://localhost:3001/api/user/register", {
        username: userForm,
        email: emailForm,
        password: pwForm,
      })
      .then((r) => r.data)
      .catch((e) => console.log(e));
  }
);

export const LOGIN_REQUEST = createAsyncThunk(
  "LOGIN",
  ({ emailForm, pwForm }) => {
    // console.log("ENTRADA LOGIN DEL FRONT", emailForm, pwForm);
    return axios
      .post("http://localhost:3001/api/user/login", {
        email: emailForm,
        password: pwForm,
      })
      .then((r) => r.data)
      .catch((e) => console.log(e));
  }
);

export const LOGOUT_REQUEST = createAsyncThunk("LOGOUT", () => {
  return axios
    .post("http://localhost:3001/api/user/logout")
    .then((r) => r)
    .catch((e) => console.log(e));
});

export const GET_FAVS = createAsyncThunk("ALL_FAVS", (userId) => {
  return axios
    .get(`http://localhost:3001/api/favorite/${userId}`)
    .then((r) => r.data);
});

export const ADD_FAV = createAsyncThunk(
  "ADD_FAVORITES",
  (movie, { getState }) => {
    const { users } = getState();
    if (!users.loggedIn.id)
      alert("Necesitas loguearte para agregar un favorito");
    return axios
      .post(`http://localhost:3001/api/favorite`, {
        userId: users.loggedIn.id,
        movie: movie,
      })
      .then(() => movie);
  }
);

export const DEL_FAV = createAsyncThunk("DEL_FAV", (id) => {
  return axios
    .delete(`http://localhost:3001/api/favorite/${id}`)
    .then((r) => r.data);
});
