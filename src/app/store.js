import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./feature/articleSlice";

const store = configureStore({
    reducer:{
        articles : articleSlice
    }
})

export default store;