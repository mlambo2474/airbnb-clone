import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const { setUser, addToCart, removeFromCart } = appSlice.actions;
export default appSlice.reducer;
