import {getAuthUserInfo} from "./authReducer";

const INITIALIZE = 'INITIALIZE'
const ERROR_MODAL = 'ERROR_MODAL'

let initialState = {
    init: false,
    showErrorModal: false,
    errorMessageModal: null
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE:
            return {...state, init: true}
        case ERROR_MODAL:
            return {...state, showErrorModal: action.isNeeded ? true : false, errorMessageModal: action.modalError}
        default:
            return state;
    }
}


export const initApp = () => ({type: INITIALIZE})
export const showErrorModal = (isNeeded, modalError) => ({type: ERROR_MODAL, isNeeded, modalError})

export const initializeApp = () => dispatch => {
    dispatch(getAuthUserInfo()).then(() => {
        dispatch(initApp())
    })
}

export const handleAllRejections = (err) => async dispatch => {
    dispatch(showErrorModal(true, err))
    await setTimeout(() => dispatch(showErrorModal(false, null)), 3000)
}

export default appReducer