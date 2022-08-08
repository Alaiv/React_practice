import React from 'react';
import cl from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className="profile__avatar">
            <img
                className={cl.avatar__img}
                src="https://e7.pngegg.com/pngimages/911/1005/png-clipart-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper.png"
            />
        </div>
    );
};

export default Avatar;