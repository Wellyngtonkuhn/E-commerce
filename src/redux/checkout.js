import { createSlice } from "@reduxjs/toolkit";

const CheckoutSlice = createSlice({
  name: "checkout",
  initialState: {
    userCheckoutInfo: [],
    userCheckoutAddress: JSON.parse(localStorage.getItem("userCheckoutAddress")) || [],
    deliveryTax: JSON.parse(localStorage.getItem("deliveryTax")) || [],
  },
  reducers: {
    addUserInfo(state, action) {
      return {
        ...state,
        userCheckoutInfo: action.payload,
      };
    },
    addUserAddrees(state, { payload }) {
      state.userCheckoutAddress = payload
      localStorage.setItem("userCheckoutAddress", JSON.stringify(payload));
    },
    handleCheckoutTax(state, { payload }){
      state.deliveryTax = payload
      localStorage.setItem("deliveryTax", JSON.stringify(payload));
    },
    handleClearLocalStorageOrder(state){
      state.userCheckoutAddress = [];
      state.deliveryTax = [];

      localStorage.removeItem("userCheckoutAddress");
      localStorage.removeItem("deliveryTax");
    }
  },
});

export const { addUserInfo, addUserAddrees, handleCheckoutTax, handleClearLocalStorageOrder } = CheckoutSlice.actions;

export default CheckoutSlice.reducer;
