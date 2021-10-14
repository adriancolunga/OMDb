import { createReducer } from "@reduxjs/toolkit";
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  ADD_FAV,
  GET_FAVS,
} from "./actions/userActions";

const initState = {
  loggedIn: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  favMovies: [],
  allFavs: [],
};

export const userReducer = createReducer(initState, (builder) => {
  builder
    .addCase(REGISTER_REQUEST.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(REGISTER_REQUEST.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload[0]));
      return {
        ...state,
        loggedIn: action.payload[0],
        loading: false,
      };
    })
    .addCase(LOGIN_REQUEST.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(LOGIN_REQUEST.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        loggedIn: action.payload,
        loading: false,
      };
    })
    .addCase(ADD_FAV.fulfilled, (state, action) => {
      return {
        ...state,
        favMovies: [action.payload, ...state.favMovies],
      };
    })
    .addCase(GET_FAVS.fulfilled, (state, action) => {
      return {
        ...state,
        allFavs: action.payload,
      };
    })
    .addCase(LOGOUT_REQUEST.fulfilled, (state, action) => {
      localStorage.removeItem("user");
      return {
        ...state,
        loggedIn: false,
      };
    });
});
