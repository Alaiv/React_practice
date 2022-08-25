import {profileAPI} from "../api/api_requests";

const ADD_POST = 'ADD-POST'
// const TEXT_CHANGE = 'TEXT-CHANGE'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, name: 'Пост один', likes: 15},
        {id: 2, name: 'Пост два', likes: 11},
        {id: 3, name: 'Пост три', likes: 4}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let postItem = {
                name: action.text,
                id: Math.random(),
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, postItem],
                // postText: ''
            };
        // case TEXT_CHANGE:
        //     return {
        //         ...state,
        //         postText: action.text
        //     }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text})

// export const changeTextActionCreator = (text) => {
//     return {type: TEXT_CHANGE, text: text}
// }

export const setUserProfile = (profile) => ({type: SET_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfileInfo = (id) => {
    return dispatch => {
        profileAPI.getProfileInfo(id)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatus = (id) => {
    return dispatch => {
        profileAPI.getProfileStatus(id)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateUserStatus = (status) => {
    return dispatch => {
        profileAPI.putProfileStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}


export default profileReducer