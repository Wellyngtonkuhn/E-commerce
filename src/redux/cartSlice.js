import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalItems: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload[0].id
      );
      if (index >= 0) {
        state.cartItems[index].itemQuantity += action.payload[1];
      } else {
        const product = {
          ...action.payload[0],
          itemQuantity: action.payload[1],
        };
        state.cartItems.push(product);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
