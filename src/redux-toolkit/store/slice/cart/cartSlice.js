import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id,
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseQty: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQty: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
