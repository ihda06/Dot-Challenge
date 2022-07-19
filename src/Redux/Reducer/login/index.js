const initialState = {
    isLogin: false
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case "loged":
            return {...state, isLogin: !state.isLogin,}
        default:
            return state
    }
}

export default login