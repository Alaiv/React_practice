import React from 'react';
import cl from './MyPosts.module.css'
import MyButton from "../../button/MyButton";
import PostList from "./PostIList/PostList";

const MyPosts = (props) => {
    return (
        <div className={cl.posts}>
            <div className={cl.area}>
                <textarea style={{width: 850, height: 200}} placeholder='Введите описание поста...'/>
            </div>
            <div className={cl.btn}>
                <MyButton/>
            </div>
            <PostList posts={props.posts}/>
        </div>
    );
};

export default MyPosts;