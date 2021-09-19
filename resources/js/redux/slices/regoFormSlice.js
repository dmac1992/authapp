import { createSlice } from "@reduxjs/toolkit";

export const regoFormSlice = createSlice({
    name: "registrationForm",
    initialState: {
        firstName: {
            value: "daniel",
            errorMessage: null,
        },
        lastName: {
            value: "mccarthy",
            errorMessage: null,
        },
        email: {
            value: "dmccarthy2012@hotmail.co.uk ",
            errorMessage: null,
        },
        password: {
            value: "Bogheads16!",
            errorMessage: null,
        },
        passwordConfirmation: {
            value: "Bogheads16!",
            errorMessage: null,
        },
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setPasswordConfirmation: (state, action) => {
            state.passwordConfirmation = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
} = regoFormSlice.actions;

export default regoFormSlice.reducer;
