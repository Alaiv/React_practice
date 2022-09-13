import React from 'react';
import cl from './PostList.module.css'
import PostItem from "./PostItem/PostItem";

const PostList = (props) => {

    return (
        <div className={cl.list}>
            {props.posts.map(p => (<PostItem key={p.id} name={p.name} likes={p.likes} id={p.id} deletePost={props.deletePost}/>))}
        </div>
    );
};

export default PostList;