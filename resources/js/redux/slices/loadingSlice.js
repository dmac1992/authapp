import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({

    name: "loading",
    initialState: false,
    reducers: {
        toggleLoadState: (state, action) => {
            return action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { toggleLoadState } = loadingSlice.actions;

export default loadingSlice.reducer;
