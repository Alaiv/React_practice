import React from 'react';
import cl from './MyPosts.module.css'
import MyButton from "../../button/MyButton";
import PostList from "./PostIList/PostList";

const MyPosts = (props) => {
    const postRef = React.createRef()

    const addPost = () => {
        props.addPost();
    }

    const changeText = () => {
        props.textChange(postRef.current.value)
    }

    return (
        <div className={cl.posts}>
            <div className={cl.area}>
                <textarea
                    ref={postRef}
                    value={props.postText}
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
            <PostList posts={props.posts}/>
        </div>
    );
};

export default MyPosts;