export const selectUserName = state => {
    return state.auth.user.name;
}

export const selectUserEmail = state => {
    return state.auth.user.email;
}

export const selectIsLoggedIn = state => {
    return state.auth.isLoggedIn
}

export const selectIsRefreshing = state => {
    return state.auth.isRefreshing
}