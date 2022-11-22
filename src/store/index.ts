import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter";

export default configureStore({
  devTools: true,
  reducer: {
    counter: counterReducer,
  },
});
