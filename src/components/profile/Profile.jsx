import React from 'react';
import cl from './Profile.module.css'
import Background from "./Background/Background";
import AvatarInfo from "./AvatarInfo/AvatarInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <Background/>
            <AvatarInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;