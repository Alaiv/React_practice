import React from 'react';
import cl from "./AvatarInfo.module.css";

const ProfileItem = (props) => {
    return (
        <div>
            <img
                className={cl.avatar__img}
                src={props.profile.photos.large !== null ? props.profile.photos.large : 'https://repository-images.githubusercontent.com/26820798/b7bd1e00-8ba5-11e9-9c6a-b6eab7656e43'}
            />
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.github}</div>
            <div className={cl.info}>{props.profile.fullName}</div>
            <div className={cl.info}>{props.profile.aboutMe}</div>
            <div className={cl.info}>{props.profile.lookingForAJobDescription}</div>
            <div className={cl.info}>{props.profile.lookingForAJob ? <span>looking for it</span> : <span>not nice</span>}</div>
        </div>
    );
};

export default ProfileItem;