import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const LOADING = createAction("LOADING");
export const API_MOVIE = createAsyncThunk("API_MOVIE", (text) => {
  return axios
    .get(`http://www.omdbapi.com/?apikey=5cf2c9f5&s=${text}`)
    .then(({ data }) => {
      console.log('DATA', data)
      if (data.Response === 'Fase') console.log('NO HAY DATA')
      else {
        const sortedPayload = data.Search.sort(
          (a, b) => b.Year - a.Year
        );
          return sortedPayload
      }
    });
});

export const API_SINGLEMOVIE = createAsyncThunk("API_SINGLEMOVIE", (id) => {
  return axios
    .get(`http://www.omdbapi.com/?apikey=5cf2c9f5&i=${id}`)
    .then((r) => r.data);
});

export const API_TYPE = createAsyncThunk('API_TYPE', (type)=> {
  return axios.get(`http://www.omdbapi.com/?apikey=5cf2c9f5&type=${type}`)
})