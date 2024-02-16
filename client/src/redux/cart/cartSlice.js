import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCart: [],
  error: null,
  loading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addToCartSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentCart = state.currentCart
        ? [...state.currentCart, action.payload]
        : [action.payload];
    },
    addToCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addToCartFailure, addToCartStart, addToCartSuccess } =
  cartSlice.actions;
export default cartSlice.reducer;
