import React from 'react';
import cl from './MyPosts.module.css'
import MyButton from "../../button/MyButton";
import PostList from "./PostIList/PostList";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utilities/validator";
import {ultimateForm} from "../../common/FormControls/FormAssets";

let maxL25 = maxLength(25)
let minL2 = minLength(2)
const someFunc = (props) => {
    return ultimateForm({...props},'input')
}

const PostsText = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Введите описание поста...'} name={'area'} component={someFunc} validate={[required, maxL25, minL2]}/></div>
            <MyButton>Добавить пост</MyButton>
        </form>
    );
};

const PostsTextRedux = reduxForm({
    form: "postsArea"
})(PostsText)


const MyPosts = (props) => {
    const onSubmit = (formData) => {
        props.addPostActionCreator(formData.area)
        formData.area = ''
    }

    return (
        <div className={cl.posts}>
            <PostsTextRedux onSubmit={onSubmit}/>
            <PostList posts={props.state.posts}/>
        </div>
    );
};

export default MyPosts;