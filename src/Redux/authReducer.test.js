import authReducer, {setAvatar} from "./authReducer";
let state = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: '',
    hideCaptcha: true,
    avatar: ''
}


it('image should equal to passed', () => {
    let action = setAvatar('https://pbs.twimg.com/profile_images/1381794212329353216/GUB0WjQg_400x400.jpg')
    let newState = authReducer(state, action)
    expect(newState.avatar).toBe('https://pbs.twimg.com/profile_images/1381794212329353216/GUB0WjQg_400x400.jpg')
});