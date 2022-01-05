import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: "https://fakestoreapi.com/products",
  reducers: {
    category: (state, action) => {
      return (state = `https://fakestoreapi.com/products/category/${action.payload}`);
    },
    products: (state, action) => {
      return (state = "https://fakestoreapi.com/products");
    },
  },
});

export const { products, category } = apiSlice.actions;

export default apiSlice.reducer;
