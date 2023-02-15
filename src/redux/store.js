import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import  CheckoutSlice from "./checkout";
import UserSlice from "./userSlice";
import userClick from "./userClick";
import showMobile from "./showMobile";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: UserSlice,
    checkout: CheckoutSlice,
    clickView: userClick,
    showMobile
  },
});
