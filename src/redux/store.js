import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import UserSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: UserSlice
  },
});
