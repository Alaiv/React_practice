import {headerAPI} from "../api/api_requests";

const SET_USER_DATA = 'ADD-SET_USER_DATA'
const IS_FETCHING = 'IS_FETCHING'
const SET_AVATAR = 'SET_AVATAR'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    avatar: 'https://pbs.twimg.com/profile_images/1381794212329353216/GUB0WjQg_400x400.jpg'
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_AVATAR:
            return {
                ...state, avatar: action.ava
            }

        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setAvatar = (ava) => ({type: SET_AVATAR, ava})
export const toggleLoader = (fetching) => ({type: IS_FETCHING, fetching})

export const getAuthUserInfo = () => {

    return (dispatch) => {
        dispatch(toggleLoader(true))
        headerAPI.getAuthUser()
            .then(data => {
                dispatch(toggleLoader(false))
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }

}


export default authReducer