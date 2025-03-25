import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: sessionStorage.getItem("email_address") || null,
  userType: sessionStorage.getItem("user_type") || null,
  isAuthenticated: !!sessionStorage.getItem("email_address"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.userType = action.payload.userType;
      state.isAuthenticated = true;
      sessionStorage.setItem("email_address", action.payload.email);
      sessionStorage.setItem("user_type", action.payload.userType);
    },
    logout: (state) => {
      state.email = null;
      state.userType = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("email_address");
      sessionStorage.removeItem("user_type");
      console.log("User logged out:", state);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
