import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkmodeslice";


const store = configureStore({

    reducer: {
        darkmode: darkModeSlice,
    },
});



export default store;