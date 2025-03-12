import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: sessionStorage.getItem("emailAddress") || null, // Load from sessionStorage
  isAuthenticated: !!sessionStorage.getItem("emailAddress"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem("emailAddress", action.payload);
    },
    logout: (state) => {
      state.email = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("emailAddress");
      console.log("User logged out:", state);
    },
    
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
