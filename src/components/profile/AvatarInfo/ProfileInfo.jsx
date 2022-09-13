import React from 'react';
import cl from "./AvatarInfo.module.css";

export const ProfileInfo = ({profile, isOwner, setEditMode}) => {
    const fullContacts = Object.keys(profile.contacts).map((key) =>
        <Contacts key={key} contactKey={key} contactValue={profile.contacts[key]}/>)

    return (
        <div>
            <div className={cl.info}><b>FullName: </b> {profile.fullName}</div>
            <div className={cl.info}>{profile.lookingForAJob ? <span><b>Looking for job: </b>yes</span> :
                <span><b>Looking for job: </b>No</span>}</div>
            {profile.lookingForAJob && <div className={cl.info}>{profile.lookingForAJobDescription}</div>}
            <div className={cl.info}><b>About me: </b> {profile.aboutMe}</div>
            {fullContacts}
            {isOwner && <button onClick={() => setEditMode(true)}>edit mode</button>}
        </div>
    );
};


const Contacts = ({contactKey, contactValue}) => {
    return (
        <div><b>{contactKey}: </b>{contactValue}</div>
    )
}
