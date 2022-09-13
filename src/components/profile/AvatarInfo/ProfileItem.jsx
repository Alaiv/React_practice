import React, {useState} from 'react';
import cl from "./AvatarInfo.module.css";
import {ProfileInfo} from "./ProfileInfo";
import {ProfileInfoEditRedux} from "./ProfileInfoEdit";

const ProfileItem = (props) => {
    const [editMode, setEditMode] = useState(false)

    const selectMainPhoto = (e) => {
        if (e.target.files.length) {
            props.addAvatar(e.target.files[0])
        }
    }

    const onSubmitProfileInfo = (formData) => {
        props.addProfileInfo(props.profile.userId, formData)
        props.isUpdated && setEditMode(false)
        // props.addProfileInfo(props.profile.userId, formData)
        //     .then(() => {
        //         setEditMode(false)
        //     })
    }
    return (
        <div>
            <img
                className={cl.avatar__img}
                src={props.profile.photos.large !== null
                    ? props.profile.photos.large
                    : 'https://repository-images.githubusercontent.com/26820798/b7bd1e00-8ba5-11e9-9c6a-b6eab7656e43'}
            />
            {props.isOwner && <input type="file" onChange={selectMainPhoto}/>}
            {editMode
                ? <ProfileInfoEditRedux initialValues={props.profile} onSubmit={onSubmitProfileInfo}
                                        profile={props.profile} setEditMode={setEditMode}/>
                : <ProfileInfo profile={props.profile} isOwner={props.isOwner} setEditMode={setEditMode}
                />}
        </div>
    );
};

export default ProfileItem;