import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import searchReducers from "./AiSearchSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    ai: searchReducers,
  }
})


export default appStore;