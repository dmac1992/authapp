import { createSlice } from "@reduxjs/toolkit";
import pages from "../../mappings/pages";

export const pageSlice = createSlice({
    name: "page",
    initialState: pages.HOME,
    reducers: {
        setPage: (state, action) => {
            return action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
