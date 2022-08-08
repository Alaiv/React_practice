import React from 'react';
import cl from './PostList.module.css'
import PostItem from "./PostItem/PostItem";

const PostList = () => {
    return (
        <div className={cl.list}>
            <PostItem name="Пост один" likes="15"/>
            <PostItem name="Пост два" likes="20"/>
        </div>
    );
};

export default PostList;