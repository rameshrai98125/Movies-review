import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlic";
import personReducer from "./reducers/personSlice";
import tvReducer from "./reducers/tvSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    person: personReducer,
    tv: tvReducer,
  },
});
