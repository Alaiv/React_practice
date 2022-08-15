const ADD_MESSAGE = 'ADD-MESSAGE'
const MSG_TEXT_CHANGE = 'MSG-TEXT-CHANGE'


let initialState = {
    messages: [
        {
            msg: "Hello there, how'r u?",
            id: 1,
            ava: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
        },
        {msg: "I'm good, u?", id: 2, ava: 'https://itcrumbs.ru/wp-content/uploads/2019/09/privatnost1.jpg'},
        // {msg: "I'm goo", id: 3, ava: 'https://uprostim.com/wp-content/uploads/2021/03/image097-75.jpg'},
        // {msg: "I'm", id: 4, ava:'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg'},
        // {msg: "I'm go?", id: 5, ava: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg'}
    ],
    dialogFriends: [
        {name: 'Sasha', id: 1},
        {name: 'Pasha', id: 2},
        {name: 'Vasya', id: 3},
        {name: 'Leha', id: 4},
        {name: 'Masha', id: 5}
    ],
    messageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                msg: state.messageText,
                id: Math.random(),
                ava: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
            }
            const arr = {...state};
            arr.messages = [...state.messages]
            arr.messages.push(message)
            arr.messageText = '';
            return arr;
        case MSG_TEXT_CHANGE:
            const arrTwo = {...state};
            arrTwo.messageText = action.text;
            return arrTwo;
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