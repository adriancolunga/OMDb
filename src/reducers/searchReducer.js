import { createReducer } from "@reduxjs/toolkit";
import { API_MOVIE, API_SINGLEMOVIE, BY_YEAR } from "./actions/searchActions";
import Alert from "@mui/material/Alert";

const initState = {
  movies: [],
  loading: false,
  movie: [],
};

export const searchReducer = createReducer(initState, (builder) => {
  builder
    .addCase(API_MOVIE.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(API_MOVIE.fulfilled, (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    })
    .addCase(API_SINGLEMOVIE.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(API_SINGLEMOVIE.fulfilled, (state, action) => {
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    });
  // .addCase(BY_YEAR.pending, (state, action) => {
  //   return {
  //     ...state,
  //     loading: true,
  //   };
  // })
  // .addCase(BY_YEAR.fulfilled, (state, action) => {
  //   return {
  //     ...state,
  //     movie: action.payload,
  //     loading: false,
  //   };
  // });
});
