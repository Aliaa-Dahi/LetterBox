import { configureStore } from "@reduxjs/toolkit";
import lovedReducer from "./lovedSlice";

export const store = configureStore({
  reducer: {
    loved: lovedReducer,
  },
});
