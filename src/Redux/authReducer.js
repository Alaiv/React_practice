const SET_USER_DATA = 'ADD-SET_USER_DATA'
const IS_FETCHING = 'IS_FETCHING'
const SET_AVATAR = 'SET_AVATAR'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    avatar: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.fetching, isAuth: true
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


export default authReducer