import React from 'react';
import cl from './AvatarInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusFunc from "../ProfileStatusFunc";
import ProfileItem from "./ProfileItem";

const AvatarInfo = (props) => {
    console.log(props.profile)

    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={cl.avaInfo}>
            <ProfileItem {...props}/>
            <ProfileStatusFunc updateUserStatus={props.updateUserStatus} status={props.status}/>
        </div>
    );
};

export default AvatarInfo;