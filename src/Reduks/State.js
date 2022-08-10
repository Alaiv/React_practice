import {reRender} from "../Render";

const state = {
    profile: {
        posts: [
            {id: 1, name: 'Пост один', likes: 15},
            {id: 2, name: 'Пост два', likes: 11},
            {id: 3, name: 'Пост три', likes: 4}
        ],
        postText: ''
    },

    dialogs: {
        messages: [
            {msg: "Hello there, how'r u?", id: 1, ava: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {msg: "I'm good, u?", id: 2, ava: 'https://itcrumbs.ru/wp-content/uploads/2019/09/privatnost1.jpg'},
            // {msg: "I'm goo", id: 3, ava: 'https://uprostim.com/wp-content/uploads/2021/03/image097-75.jpg'},
            // {msg: "I'm", id: 4, ava:'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg'},
            // {msg: "I'm go?", id: 5, ava: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg'}
        ],
        dialogs: [
            {name: 'Sasha', id: 1},
            {name: 'Pasha', id: 2},
            {name: 'Vasya', id: 3},
            {name: 'Leha', id: 4},
            {name: 'Masha', id: 5 }
        ],
        messageText: ''
    },

    sideBar: {
        friends: [
            {name: 'Sasha', id: 1, ava: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {name: 'Pasha', id: 2, ava: 'https://itcrumbs.ru/wp-content/uploads/2019/09/privatnost1.jpg'},
            {name: 'Vasya', id: 3, ava: 'https://uprostim.com/wp-content/uploads/2021/03/image097-75.jpg'},
        ]
    }

}

export let addPost = () => {
    let postItem = {
        name: state.profile.postText,
        id: state.profile.posts[state.profile.posts.length - 1].id + 1,
        likes: 0
    }

    state.profile.posts.push(postItem)
    state.profile.postText = '';
    reRender(state, addPost, textChange, addMessage, msgTextChange)
}

export let addMessage = () => {
    let message = {
        msg: state.dialogs.messageText,
        id: state.dialogs.messages[state.dialogs.messages.length - 1].id + 1,
        ava: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
    }

    state.dialogs.messages.push(message)
    state.dialogs.messageText = '';
    reRender(state, addPost, textChange, addMessage, msgTextChange)
}

export let textChange = (text) => {
    state.profile.postText = text;
    reRender(state, addPost, textChange, addMessage, msgTextChange)
}

export let msgTextChange = (text) => {
    state.dialogs.messageText = text;
    reRender(state, addPost, textChange, addMessage, msgTextChange)
}

export default state