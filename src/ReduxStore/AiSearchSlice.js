import { createSlice } from "@reduxjs/toolkit";

const AiSearchSlice = createSlice({
  name: "SearchSlice",
  initialState: {
    enableAiSearch: false,
    movieResult: null,
    movieNames: null,
  },
  reducers: {
    toggleAiSearch: (state) => {
      state.enableAiSearch = !state.enableAiSearch;
    },
    addAiSeacrhResult: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    }
  }
})



export const { toggleAiSearch, addAiSeacrhResult } = AiSearchSlice.actions;
export default AiSearchSlice.reducer