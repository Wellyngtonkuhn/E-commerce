import { createSlice } from "@reduxjs/toolkit";

const CheckoutSlice = createSlice({
  name: "checkout",
  initialState: {
    userCheckoutInfo: [],
    userCheckoutAddress: [],
    deliveryTax: ''
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
    handleCheckoutTax(state, action){
      return{
        ...state,
        deliveryTax: action.payload
      }
    }
  },
});

export const { addUserInfo, addUserAddrees, handleCheckoutTax } = CheckoutSlice.actions;

export default CheckoutSlice.reducer;
