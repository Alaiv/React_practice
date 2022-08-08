import React from 'react';
import cl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Background from "./Background/Background";
import Avatar from "./Avatar/Avatar";

const Profile = () => {
    return (
        <div>
            <Background/>
            <Avatar/>
            <MyPosts/>
        </div>
    );
};

export default Profile;