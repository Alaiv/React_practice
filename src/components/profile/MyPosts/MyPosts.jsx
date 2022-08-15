import React from 'react';
import cl from './MyPosts.module.css'
import MyButton from "../../button/MyButton";
import PostList from "./PostIList/PostList";

const MyPosts = (props) => {
    let addPost = () => {
        props.onAddPost();
    }

    let changeText = (e) => {
        props.onTextChange(e.target.value)
    }

    return (
        <div className={cl.posts}>
            <div className={cl.area}>
                <textarea
                    value={props.state.postText}
                    onChange={changeText}
                    placeholder='Введите описание поста...'
                />
            </div>
            <div className={cl.btn}>
                <MyButton
                    add={addPost}
                    onClick={addPost}
                    />
            </div>
            <PostList posts={props.state.posts}/>
        </div>
    );
};

export default MyPosts;