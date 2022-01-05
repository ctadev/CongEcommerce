import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotal: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeItem: (state, action) => {
      const updateCart = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItem = updateCart;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (state) => state.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const updateCart = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItem = updateCart;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    getTotal: (state, action) => {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotal = total;
    },
  },
});

export const { addCart, removeItem, decreaseCart, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
