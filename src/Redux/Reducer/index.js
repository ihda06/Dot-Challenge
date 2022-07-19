import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login";
import questionReducer from "./question";
import statusReducer from "./status";


export default combineReducers({
    loginReducer, questionReducer, statusReducer
})