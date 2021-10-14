import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./reducers/searchReducer";
import { userReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    movies: searchReducer,
    users: userReducer 
  },
});
