import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import  CheckoutSlice from "./checkout";
import UserSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: UserSlice,
    checkout: CheckoutSlice
  },
});
