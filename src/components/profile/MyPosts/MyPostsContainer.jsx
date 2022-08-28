import React from 'react';
import {addPostActionCreator, deletePost} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator, deletePost})(MyPosts)

export default MyPostsContainer;
