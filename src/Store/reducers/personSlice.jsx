import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

const personSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loadperson: (state, action) => {
      state.info = action.payload;
    },
    removeperson: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadperson, removeperson } = personSlice.actions;

export default personSlice.reducer;
