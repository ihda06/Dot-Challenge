const initialState = {
    isPlay: false,
    totalQuiz: 0,
    score: []
}

const status = (state = initialState, action) => {
    switch (action.type) {
        case "play": 
        return {
            ...state, isPlay: !state.isPlay
        }
        case "addQuiz": 
        return {...state, totalQuiz: state.totalQuiz+1}
        case "addScore": 
        return(state)=>{
            state.totalQuiz = state.totalQuiz+1
        }
        default:
            return state
    }
}

export default status