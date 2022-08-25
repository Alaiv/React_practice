export const getUsers = (state) => {
    return state.usersp.users
}

export const getPageSize = (state) => {
    return state.usersp.pageSize
}

export const getTotalCount = (state) => {
    return state.usersp.totalCount
}
export const getSelectedPage = (state) => {
    return state.usersp.selectedPage
}
export const getIsFetching = (state) => {
    return state.usersp.isFetching
}
export const getIsFollowing = (state) => {
    return state.usersp.isFollowing
}