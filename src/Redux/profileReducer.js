import {profileAPI} from "../api/api_requests";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [],
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
            };
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
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(val => {
                   return  val.id !== action.id
                })]
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text})

export const setUserProfile = (profile) => ({type: SET_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const deletePost = (id) => ({type: DELETE_POST, id})


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