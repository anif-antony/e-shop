import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      console.log("Login attempt:", action.payload); // Debugging log

      const user = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );

      if (user) {
        state.currentUser = user; // ✅ Set currentUser correctly
        console.log("User logged in:", state.currentUser); // Debugging log
      } else {
        console.log("Invalid credentials"); // Debugging log
      }
    },
    updateUser: (state, action) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
    logoutUser: (state) => {
      state.currentUser = null; // ✅ Properly resets the logged-in user
      console.log("User logged out"); // Debugging log
    },
  },
});

export const { registerUser, loginUser, updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
