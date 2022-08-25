// import {headerAPI} from "../api/api_requests";
// import {Navigate} from "react-router-dom";
//
// const LOGIN = 'LOGIN'
//
// let initialState = {
//     login: null,
//     password: null,
//     rememberMe: false
// }
//
// const loginReducer = (state = initialState, action) => {
//
//     switch (action.type) {
//         // case LOGIN:
//         //     return {
//         //         ...state,
//         //         login: action.values.login,
//         //         password: action.values.password,
//         //         rememberMe: action.values.rememberMe,
//         //     }
//
//         default:
//             return state;
//     }
// }
//
//
// // export const setLoginValues = (values) => ({type: LOGIN, values})
//
// export const getLoginValues = (val) => {
//     return dispatch => {
//         headerAPI.authorizeUser(val)
//         // .then(response => {
//         //     if (response.resultCode === 0) {
//         //         dispatch(setLoginValues(val))
//         //     }
//         // })
//     }
// }
//
// export const unAuthorizeUser = () => {
//     return dispatch => {
//         headerAPI.unAuthorizeUser()
//     }
// }
// export default loginReducer