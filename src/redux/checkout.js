import { createSlice } from "@reduxjs/toolkit";

const CheckoutSlice = createSlice({
  name: "checkout",
  initialState: {
    userCheckoutInfo: [],
    userCheckoutAddress: [],
  },
  reducers: {
    addUserInfo(state, action) {
      return {
        ...state,
        userCheckoutInfo: action.payload,
      };
    },
    addUserAddrees(state, action) {
      return {
        ...state,
        userCheckoutAddress: action.payload,
      };
    },
  },
});

export const { addUserInfo, addUserAddrees } = CheckoutSlice.actions;

export default CheckoutSlice.reducer;
