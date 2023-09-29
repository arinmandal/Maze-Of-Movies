import { createSlice } from "@reduxjs/toolkit";

const AiSearchSlice = createSlice({
  name: "SearchSlice",
  initialState: {
    enableAiSearch: false
  },
  reducers: {
    toggleAiSearch: (state) => {
      state.enableAiSearch = !state.enableAiSearch;
    }
  }
})



export const { toggleAiSearch } = AiSearchSlice.actions;
export default AiSearchSlice.reducer