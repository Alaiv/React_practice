import {usersAPI} from "../api/api_requests";
import {mapHelper} from "../components/common/Helper";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SELECT_PAGE = 'SELECT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_LOADER = 'TOGGLE_LOADER'
const IS_FOLLOWING = 'IS_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    selectedPage: 1,
    isFetching: true,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: mapHelper(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: mapHelper(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SELECT_PAGE:
            return {
                ...state, selectedPage: action.selectedPage
            }
        case SET_USERS_COUNT:
            return {
                ...state, totalCount: action.count
            }
        case TOGGLE_LOADER:
            return {
                ...state, isFetching: action.isFetching
            }
        case IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFetching
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export const onFollow = (userId) => ({type: FOLLOW, userId})

export const onUnFollow = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const selectPage = (selectedPage) => ({type: SELECT_PAGE, selectedPage})

export const setTotalUsers = (count) => ({type: SET_USERS_COUNT, count})

export const toggleLoader = (isFetching) => ({type: TOGGLE_LOADER, isFetching})

export const disableFollow = (isFetching, id) => ({type: IS_FOLLOWING, isFetching, id})

export const usersGet = (selectedPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleLoader(true))
        usersAPI.getUsers(selectedPage, pageSize).then(data => {
            dispatch(toggleLoader(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsers(data.totalCount))
        })
    }
}


const followUnfollow = async (dispatch, userId, apiCall, actionC) => {
    dispatch(disableFollow(true, userId))
    const data = await apiCall(userId)
    if (data.resultCode === 0) {
        dispatch(actionC(userId))
    }
    dispatch(disableFollow(false, userId))
}


export const unfollowDisable = (userId) => {
    return async (dispatch) => {
        const apiCall = usersAPI.unFollowUser.bind(usersAPI)

        await followUnfollow(dispatch, userId, apiCall, onUnFollow)
    }
}

export const followDisable = (userId) => {
    return async (dispatch) => {
        const apiCall = usersAPI.followUser.bind(usersAPI)

        await followUnfollow(dispatch, userId, apiCall, onFollow)
    }
}

export default usersReducer