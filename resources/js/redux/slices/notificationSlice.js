import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        value: ""
    },
    reducers: {
        setNotification: (state, message) => {
            state = message;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
