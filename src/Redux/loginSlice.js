import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false
}

export const loginSlice = createSlice({
    name:"status",
    initialState,
    reducers:{
        loged: (state)=>{
            state.isLogin = !state.isLogin
        }
        
    }
})

export const {loged} = loginSlice.actions

export default loginSlice.reducer