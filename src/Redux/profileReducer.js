import {profileAPI} from "../api/api_requests";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const UPDATE_AVATAR = 'UPDATE_AVATAR'
const UPDATE_FIELD_SUCCESS = 'UPDATE_FIELD_SUCCESS'

let initialState = {
    posts: [],
    profile: null,
    status: '',
    fieldUpdated: false
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
                    return val.id !== action.id
                })]
            }
        case UPDATE_AVATAR:
            return {
                ...state,
                profile: {...state.profile, photos: action.avatars}

            }
        case UPDATE_FIELD_SUCCESS:
            return {
                ...state,
                fieldUpdated: action.isIt ? true : false
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text})

export const setUserProfile = (profile) => ({type: SET_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const deletePost = (id) => ({type: DELETE_POST, id})

export const updateAvatar = (avatars) => ({type: UPDATE_AVATAR, avatars})

const updateFieldSuccess = (isIt) => ({type: UPDATE_FIELD_SUCCESS, isIt})


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

export const addAvatar = (ava) => async dispatch => {
    const response = await profileAPI.putProfileAva(ava)
    if (response.data.resultCode === 0) {
        dispatch(updateAvatar(response.data.data.photos))
    }
}

export const addProfileInfo = (id, info) => async dispatch => {
    const response = await profileAPI.putProfileFullInfo(info)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileInfo(id))
        dispatch(updateFieldSuccess(true))
    } else if (response.data.resultCode === 1) {
        dispatch(updateFieldSuccess(false))
        const parsedError =
            response.data.messages.join('').split(' ')[3].replace(/[)(->]/g, ' ').trim().toLowerCase().split(' ')
        const contacts = parsedError[0]
        const field = parsedError[2]
        let msg = response.data.messages.length > 0 ? response.data.messages[0] : 'Undefined error'
        dispatch(stopSubmit('editProfile', {[contacts]: {[field]: msg}}))
        // return Promise.reject(response.data.messages[0])
    }

}


export default profileReducer