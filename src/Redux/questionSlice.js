import { createSlice } from "@reduxjs/toolkit"


export const questionsSlice = createSlice({
    name: 'question',
    initialState: {
        loading: 'idle',
        questions: {},
        err: null
    },
    reducers: {
        addData: (state, action) => {
            return {...state.questions, questions: action.payload}
        },
       
    },
  
})

// Destructure and export the plain action creators
export const { addData } = questionsSlice.actions


export default questionsSlice.reducer

