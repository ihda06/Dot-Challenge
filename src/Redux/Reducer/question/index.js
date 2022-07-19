const initialState = {
    data: []
}

const question = (state = initialState, action) => {
    switch (action.type) {
        case "addQuestion":
            return {...state, data: action.payload}
        default:
            return state
    }
}

export default question