import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./feature/articleSlice";

const store = configureStore({
    reducer:{
        article : articleSlice
    }
})

export default store;