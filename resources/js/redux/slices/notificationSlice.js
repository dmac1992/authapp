import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: "sdfsdfsdfsd",
    reducers: {
        setNotification: (state, action) => {
            return action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
