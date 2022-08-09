import React from 'react';
import cl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Background from "./Background/Background";
import AvatarInfo from "./AvatarInfo/AvatarInfo";

const Profile = (props) => {
    return (
        <div>
            <Background/>
            <AvatarInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;