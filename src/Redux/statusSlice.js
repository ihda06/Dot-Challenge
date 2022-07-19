import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPlay: false,
    totalQuiz: 0,
    score: []
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
        addScore: (state)=>{
            state.totalQuiz = state.totalQuiz+1
        }
    }
})

export const {play, addQuiz, addScore} = statusSlice.actions

export default statusSlice.reducer