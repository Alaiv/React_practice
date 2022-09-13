import React from 'react';
import cl from './AvatarInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusFunc from "../ProfileStatusFunc";
import ProfileItem from "./ProfileItem";

const AvatarInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={cl.avaInfo}>
            <ProfileStatusFunc  updateUserStatus={props.updateUserStatus} status={props.status}/>
            <ProfileItem {...props} isOwner={props.isOwner}
                         addAvatar={props.addAvatar}
                         addProfileInfo={props.addProfileInfo}
                         isUpdated={props.isUpdated}
            />
        </div>
    );
};

export default AvatarInfo;