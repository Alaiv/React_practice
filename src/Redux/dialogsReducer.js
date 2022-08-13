const ADD_MESSAGE = 'ADD-MESSAGE'
const MSG_TEXT_CHANGE = 'MSG-TEXT-CHANGE'


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                msg: state.messageText,
                id: Math.random(),
                ava: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
            }
            const arr = [...state.messages];
            state.messages = arr.concat(message)
            state.messageText = '';
            return state;
        case MSG_TEXT_CHANGE:
            state.messageText = action.text;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const changeMsgTextActionCreator = (text) => {
    return  {
        type: MSG_TEXT_CHANGE,
        text: text
    }
}

export default dialogsReducer