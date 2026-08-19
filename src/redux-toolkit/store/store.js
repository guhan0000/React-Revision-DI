import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slice/counter/counterSlice";
import cartReducer from "./slice/cart/cartSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    cart: cartReducer,
  },
});
