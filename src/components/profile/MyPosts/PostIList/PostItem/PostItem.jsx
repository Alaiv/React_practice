import React from 'react';
import cl from './PostItem.module.css'

const PostItem = (props) => {
    return (
        <div className={cl.item}>
            <i className={cl.circle}></i>
            {props.name}
            <span>Likes: {props.likes}</span>
        </div>
    );
};

export default PostItem;