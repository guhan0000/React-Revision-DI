import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slice/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
