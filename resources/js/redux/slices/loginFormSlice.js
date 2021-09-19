import { createSlice } from "@reduxjs/toolkit";

export const loginFormSlice = createSlice({
    name: "loginForm",
    initialState: {
        email: {
            value: "dmccarthy2012@hotmail.co.uk ",
            errorMessage: null,
        },
        password: {
            value: "Bogheads16!",
            errorMessage: null,
        },
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setEmail,
    setPassword,
} = loginFormSlice.actions;

export default loginFormSlice.reducer;
