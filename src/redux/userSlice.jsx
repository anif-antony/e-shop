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
      console.log("Users Data:", state.users); // Log users array
    },
    loginUser: (state, action) => {
      const user = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
      }
      console.log("Current User:", state.currentUser); // Log current user
    },
    logoutUser: (state) => {
      state.currentUser = null;
      console.log("User logged out.");
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
