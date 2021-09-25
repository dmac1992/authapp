import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     firstName: "",
//     lastName: "",
//     email: "",
// };

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state) => {
            return {};
        }
    },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
