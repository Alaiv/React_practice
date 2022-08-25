import React from 'react';
import {addPostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.profile
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts)

export default MyPostsContainer;
