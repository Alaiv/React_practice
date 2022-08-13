const ADD_POST = 'ADD-POST'
const TEXT_CHANGE = 'TEXT-CHANGE'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let postItem = {
                name: state.postText,
                id: Math.random(),
                likes: 0
            }
            const arr = [...state.posts];
            state.posts = arr.concat(postItem);
            state.postText = '';
            return state;
        case TEXT_CHANGE:
            state.postText = action.text;
            return state;
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