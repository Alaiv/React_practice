import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const dialogsInfo = [
    {name: 'Sasha', id: 1},
    {name: 'Pasha', id: 2},
    {name: 'Vasya', id: 3},
    {name: 'Leha', id: 4},
    {name: 'Masha', id: 5}
]


const messageInfo = [
    {msg: "Hello there, how'r u?", id: 1},
    {msg: "I'm good, u?", id: 2},
    {msg: "I'm goo", id: 3},
    {msg: "I'm", id: 4},
    {msg: "I'm go?", id: 5}
]

const posts = [
    {id: 1, name: 'Пост один', likes: 15},
    {id: 2, name: 'Пост два', likes: 11},
    {id: 3, name: 'Пост три', likes: 4},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App dialogArr={dialogsInfo} messageArr={messageInfo} posts={posts}/>
);


