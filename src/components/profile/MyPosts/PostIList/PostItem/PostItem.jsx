import React from 'react';
import cl from './PostItem.module.css'

const PostItem = ({id, name, likes, deletePost}) => {
    const removePosts = () => {
        deletePost(id)
    }
    return (
        <div className={cl.item}>
            <i className={cl.circle}></i>
            {name}
            <span>Likes: {likes}</span>
            <button onClick={removePosts}>Удалить пост</button>
        </div>
    );
};

export default PostItem;