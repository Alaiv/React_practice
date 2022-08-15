// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sideBarReducer from "./sideBarReducer";
//
// let store = {
//
//     _state: {
//         profile: {
//             posts: [
//                 {id: 1, name: 'Пост один', likes: 15},
//                 {id: 2, name: 'Пост два', likes: 11},
//                 {id: 3, name: 'Пост три', likes: 4}
//             ],
//             postText: ''
//         },
//
//         dialogs: {
//             messages: [
//                 {
//                     msg: "Hello there, how'r u?",
//                     id: 1,
//                     ava: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
//                 },
//                 {msg: "I'm good, u?", id: 2, ava: 'https://itcrumbs.ru/wp-content/uploads/2019/09/privatnost1.jpg'},
//                 // {msg: "I'm goo", id: 3, ava: 'https://uprostim.com/wp-content/uploads/2021/03/image097-75.jpg'},
//                 // {msg: "I'm", id: 4, ava:'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg'},
//                 // {msg: "I'm go?", id: 5, ava: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg'}
//             ],
//             dialogFriends: [
//                 {name: 'Sasha', id: 1},
//                 {name: 'Pasha', id: 2},
//                 {name: 'Vasya', id: 3},
//                 {name: 'Leha', id: 4},
//                 {name: 'Masha', id: 5}
//             ],
//             messageText: ''
//         },
//
//         sideBar: {
//             friends: [
//                 {name: 'Sasha', id: 1, ava: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {name: 'Pasha', id: 2, ava: 'https://itcrumbs.ru/wp-content/uploads/2019/09/privatnost1.jpg'},
//                 {name: 'Vasya', id: 3, ava: 'https://uprostim.com/wp-content/uploads/2021/03/image097-75.jpg'},
//             ]
//         }
//     },
//     _callSubscriber(v) {},
//
//     subscriber(observer) {
//         this._callSubscriber = observer
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     dispatch(action) {
//         this._state.profile = profileReducer(this._state.profile, action)
//         this._state.dialogs = dialogsReducer(this._state.dialogs, action)
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action)
//
//         this._callSubscriber(this._state)
//     }
// }
//
//
//
//
//
//
// export default store