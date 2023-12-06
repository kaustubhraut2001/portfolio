import { createSlice } from "@reduxjs/toolkit";


const darkModeSlice = createSlice({

    name: "darkMode",
    initialState: {
        isDarkMode: true,
    },

    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },

});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;