import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPlay: false,
    totalQuiz: 0,
    score: 0
}

export const statusSlice = createSlice({
    name:"player",
    initialState,
    reducers:{
        play: (state)=>{
            state.isPlay = !state.isPlay
        },
        addQuiz: (state)=>{
            state.totalQuiz = state.totalQuiz+1
        },
        addScore: (state, action)=>{
            state.score = action.payload
        }
    }
})

export const {play, addQuiz, addScore} = statusSlice.actions

export default statusSlice.reducer