import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../redux/apiSlice";
import modalSlice from "../redux/modalSlice";
import cartSlice from "../redux/cart";

const store = configureStore({
  reducer: {
    apiLink: apiSlice,
    modalSlice: modalSlice,
    cartSlice: cartSlice,
  },
});

export default store;
