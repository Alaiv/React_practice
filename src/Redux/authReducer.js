import {headerAPI} from "../api/api_requests";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const IS_FETCHING = 'IS_FETCHING'
// const SET_AVATAR = 'SET_AVATAR'
const GET_CAPTCHA = 'GET_CAPTCHA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: '',
    hideCaptcha: true,
    avatar: 'https://pbs.twimg.com/profile_images/1381794212329353216/GUB0WjQg_400x400.jpg'
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        // case SET_AVATAR:
        //     return {
        //         ...state, avatar: action.ava
        //     }
        case GET_CAPTCHA:
            return {
                ...state, captcha: action.url, hideCaptcha: action.hide,
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
})
export const toggleLoader = (fetching) => ({type: IS_FETCHING, fetching})
export const setCaptcha = (url, hide) => ({type: GET_CAPTCHA, url, hide})
// export const setAvatar = (ava) => ({type: SET_AVATAR, ava})

export const getAuthUserInfo = () => dispatch => {
    dispatch(toggleLoader(true))

    return headerAPI.getAuthUser()
        .then(data => {
            dispatch(toggleLoader(false))
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true))
            }
        })


}


export const getLoginValues = (val) => {
    return dispatch => {
        headerAPI.authorizeUser(val)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setCaptcha('', true))
                    dispatch(getAuthUserInfo())
                }
                if (response.data.resultCode === 10) {
                    headerAPI.getCaptcha()
                        .then(response => {
                            dispatch(setCaptcha(response.data.url, false))
                        })
                } else if (response.data.resultCode === 1) {
                    let msg = response.data.messages.length > 0 ? response.data.messages[0] : 'Undefined error'
                    dispatch(stopSubmit('login', {_error: msg}))
                }
            })
    }
}

export const unAuthorizeUser = () => {
    return dispatch => {
        headerAPI.unAuthorizeUser()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer