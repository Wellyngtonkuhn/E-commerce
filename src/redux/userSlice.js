import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const UserSlice = createSlice({
  name: "token",
  initialState: {
    token: Cookies.get("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || [],
  },
  reducers: {
    addToken(state, { payload }) {
      state.token = payload.token 
      state.user = payload.user;

      Cookies.set("token", payload.token, { expires: 1 });
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    removeToken(state) {
      state.token = "";
      state.user = [];

      Cookies.remove("token");
      localStorage.removeItem("user");
    },
  },
});

export const { addToken, removeToken } = UserSlice.actions;
export default UserSlice.reducer;
