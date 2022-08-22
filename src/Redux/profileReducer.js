import {profileAPI} from "../api/api_requests";

const ADD_POST = 'ADD-POST'
const TEXT_CHANGE = 'TEXT-CHANGE'
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    posts: [
        {id: 1, name: 'Пост один', likes: 15},
        {id: 2, name: 'Пост два', likes: 11},
        {id: 3, name: 'Пост три', likes: 4}
    ],
    postText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let postItem = {
                name: state.postText,
                id: Math.random(),
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, postItem],
                postText: ''
            };
        case TEXT_CHANGE:
            return {
                ...state,
                postText: action.text
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const changeTextActionCreator = (text) => {
    return {
        type: TEXT_CHANGE,
        text: text
    }
}

export const setUserProfile = (profile) => ({type: SET_PROFILE, profile})

export const getUserProfileInfo = (id) => {
    return dispatch => {
        profileAPI.getProfileInfo(id)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export default profileReducer