import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
    },
    reducers: {
        setUser: (state, action) => {
            console.log("setUser reducer");
            console.log(action);
            state = action.payload;
        },
        removeUser: (state) => {
            state = {
                firstName: "",
                lastName: "",
                email: "",
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
