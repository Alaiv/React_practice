import React from 'react';
import AvatarInfo from "./AvatarInfo/AvatarInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <AvatarInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;