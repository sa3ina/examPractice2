import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Slice";

export const store = configureStore({
  reducer: {
    product: counterReducer,
  },
});
