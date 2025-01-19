import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";


const reduxStore = configureStore({
    reducer: {
        auth: authReducer
    }
});


export { reduxStore };