import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [], // Store registered users
    loggedInUser: null, // Store the logged-in user
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const existingUser = state.users.find((u) => u.email === action.payload.email);
            if (!existingUser) {
                state.users.push(action.payload);
            }
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find((u) => u.email === email && u.password === password);
            state.loggedInUser = user || null;
        },
        logoutUser: (state) => {
            state.loggedInUser = null;
        }
    },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;