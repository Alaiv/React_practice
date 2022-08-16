const ADD_POST = 'ADD-POST'
const TEXT_CHANGE = 'TEXT-CHANGE'

let initialState = {
    posts: [
        {id: 1, name: 'Пост один', likes: 15},
        {id: 2, name: 'Пост два', likes: 11},
        {id: 3, name: 'Пост три', likes: 4}
    ],
    postText: ''
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

export default profileReducer