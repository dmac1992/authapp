import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({

    name: "loading",
    initialState: {
        loading: false,
    },
    reducers: {
        toggleLoading: (state, payload) => {
            state = payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { toggleLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
