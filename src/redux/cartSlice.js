import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addToCart(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload[0].id
      );
      if (index >= 0) {
        state.cartItems[index].itemQuantity += action.payload[1];
        toast.success(`${action.payload[0].nome} adicionado ao carrinho`, {
          position: "top-right",
        });
      } else {
        const product = {
          ...action.payload[0],
          itemQuantity: action.payload[1],
        };
        state.cartItems.push(product);
        toast.success(`${action.payload[0].nome} adicionado ao carrinho`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const newCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCart;
      toast.error(`${action.payload.nome} removido do carrinho`, {
        position: "top-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCartItem(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[index].itemQuantity > 1) {
        state.cartItems[index].itemQuantity -= 1;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    increaseCartItem(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (
        state.cartItems[index].itemQuantity < state.cartItems[index].quantidade
      ) {
        state.cartItems[index].itemQuantity += 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCartItem,
  increaseCartItem,
  totalPrice,
} = CartSlice.actions;

export default CartSlice.reducer;
