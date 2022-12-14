import React from 'react';
import AvatarInfo from "./AvatarInfo/AvatarInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <AvatarInfo
                profile={props.profile} updateUserStatus={props.updateUserStatus}
                status={props.status} isOwner={props.isOwner} addAvatar={props.addAvatar}
                addProfileInfo={props.addProfileInfo} isUpdated={props.isUpdated}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;