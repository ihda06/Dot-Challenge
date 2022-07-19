import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "./loginSlice"
import statusReducer from "./statusSlice"
import questionReducer from "./questionSlice"

export const store = configureStore({
    reducer: {
        status: loginReducer,
        player: statusReducer,
        question: questionReducer,
    }
})