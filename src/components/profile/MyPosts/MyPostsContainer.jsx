import React from 'react';
import {addPostActionCreator, changeTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => dispatch(addPostActionCreator()),
        onTextChange: val => dispatch(changeTextActionCreator(val))
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
