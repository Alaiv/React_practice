import React from 'react';
import cl from './MyPosts.module.css'
import MyButton from "../../button/MyButton";
import PostList from "./PostIList/PostList";
import {addPostActionCreator, changeTextActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let changeText = (e) => {
        props.dispatch(changeTextActionCreator(e.target.value))
    }

    return (
        <div className={cl.posts}>
            <div className={cl.area}>
                <textarea
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