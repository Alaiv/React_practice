import {headerAPI} from "../api/api_requests";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const IS_FETCHING = 'IS_FETCHING'
const SET_AVATAR = 'SET_AVATAR'
const GET_CAPTCHA = 'GET_CAPTCHA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: null,
    avatar: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payLoad
            }
        case SET_AVATAR:
            return {
                ...state, avatar: action.ava
            }
        case GET_CAPTCHA:
            return {
                ...state, captcha: action.url
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA, payLoad: {id, email, login, isAuth}
})
export const toggleLoader = (fetching) => ({type: IS_FETCHING, fetching})
export const setCaptcha = (url) => ({type: GET_CAPTCHA, url})
export const setAvatar = (ava) => ({type: SET_AVATAR, ava})

export const getAuthUserInfo = () => async dispatch => {
    try {
        dispatch(toggleLoader(true))
        const data = await headerAPI.getAuthUser()
        dispatch(toggleLoader(false))
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setUserData(id, email, login, true))
        }
    } catch (error) {
        console.error(error)
    }


}


export const getLoginValues = (val) => {
    return async dispatch => {
        const response = await headerAPI.authorizeUser(val)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserInfo())
            dispatch(setCaptcha(null))
        } else {
            if (response.data.resultCode === 10) {
                const response = await headerAPI.getCaptcha()
                dispatch(setCaptcha(response.data.url))
            }
            let msg = response.data.messages.length > 0 ? response.data.messages[0] : 'Undefined error'
            dispatch(stopSubmit('login', {_error: msg}))
        }

    }
}

export const unAuthorizeUser = () => async dispatch => {
    const response = await headerAPI.unAuthorizeUser()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer