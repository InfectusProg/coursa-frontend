import { configureStore } from "@reduxjs/toolkit";
import { testsReducer } from "./slices/tests";
import { authReducer } from "./slices/auth";

const store = configureStore({
    reducer:{
        tests: testsReducer,
        auth: authReducer
    },
})

export default store