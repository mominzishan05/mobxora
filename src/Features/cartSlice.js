import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")),
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removecart: (state, action) => {
      state.items = state.items.filter((val) => val.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addtocart, removecart } = cartSlice.actions;
export default cartSlice.reducer;
