import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchQuestion = createAsyncThunk(
    'question/getQuestion',
    async (category, difficulty) => {
        try {

            const res = await axios.get("https://opentdb.com/api.php?", {
                params: {
                    amount: 10,
                    category: category,
                    difficulty: difficulty
                }
            })
            return [...res.data]
        }
        catch (err) {
            return err.message
        }
    }
)

export const questionsSlice = createSlice({
    name: 'question',
    initialState: {
        loading: 'idle',
        questions: [],
        err: null
    },
    reducers: {
        addData: (state, action) => {
            return void(state.questions = state.questions.concat(action.payload))
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchQuestion.pending, (state, action) => {
            state.loading = 'loading'
        }).addCase(fetchQuestion.fulfilled, (state, action) => {
            state.loading = `success`
            state.questions = state.questions.concat(action.payload)
        }).addCase(fetchQuestion.rejected, (state, action) => {
            state.loading = `failed`
            state.err = action.error.message
        })
    }
})

export const selectAllQuestion = (state) => state.question.questions

// Destructure and export the plain action creators
export const { addData } = questionsSlice.actions


export default questionsSlice.reducer

