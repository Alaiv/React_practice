import React from 'react';
import cl from './AvatarInfo.module.css'
import Preloader from "../../common/Preloader";

const AvatarInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={cl.avaInfo}>
            <img
                className={cl.img}
                src="https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750"
            />
            <img
                className={cl.avatar__img}
                src={props.profile.photos.large}
            />
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.github}</div>
            <div className={cl.info}>{props.profile.fullName}</div>
            <div className={cl.info}>{props.profile.aboutMe}</div>
            <div className={cl.info}>{props.profile.lookingForAJobDescription}</div>
            <div className={cl.info}>{props.profile.lookingForAJob ? <span>nice</span> : <span>not nice</span>}</div>
        </div>
    );
};

export default AvatarInfo;