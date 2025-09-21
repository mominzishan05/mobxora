import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../Features/cartSlice";
export const Store = configureStore({
 reducer:{
    carts:itemReducer
 }
});
