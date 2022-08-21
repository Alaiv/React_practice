const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SELECT_PAGE = 'SELECT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_LOADER = 'TOGGLE_LOADER'

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    selectedPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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


export default usersReducer