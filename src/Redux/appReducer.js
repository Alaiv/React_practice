import {getAuthUserInfo} from "./authReducer";

const INITIALIZE = 'INITIALIZE'

let initialState = {
    init: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE:
            return {...state, init: true}
        default:
            return state;
    }
}


export const initApp = () => ({type: INITIALIZE})

export const initializeApp = () => dispatch => {
    dispatch(getAuthUserInfo()).then(() => {
        dispatch(initApp())
    })
}

export default appReducer