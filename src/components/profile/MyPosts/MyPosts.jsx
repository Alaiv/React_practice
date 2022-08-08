import React from 'react';
import cl from './MyPosts.module.css'
import MyButton from "../../button/MyButton";
import PostList from "./PostIList/PostList";

const MyPosts = () => {
    return (
        <div className={cl.posts}>
            <div className={cl.title}>
                <textarea style={{width: 850, height: 200}} placeholder='Введите описание поста...'/>
                <MyButton/>
            </div>
            <PostList/>
        </div>
    );
};

export default MyPosts;