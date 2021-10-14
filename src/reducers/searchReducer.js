import { createReducer } from "@reduxjs/toolkit";
import { API_MOVIE, API_SINGLEMOVIE } from "./actions/searchActions";

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
     /*  const sortedPayload = action.payload.Search.sort(
        (a, b) => b.Year - a.Year
      ); */
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
});
