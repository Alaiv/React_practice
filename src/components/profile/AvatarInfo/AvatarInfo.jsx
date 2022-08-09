import React from 'react';
import cl from './AvatarInfo.module.css'

const AvatarInfo = () => {
    return (
        <div className={cl.avaInfo}>
            <img
                className={cl.avatar__img}
                src="https://e7.pngegg.com/pngimages/911/1005/png-clipart-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper.png"
            />
            <div className={cl.info}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati.</div>
        </div>
    );
};

export default AvatarInfo;