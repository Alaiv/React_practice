import React from 'react';

const Profile = () => {
    return (
        <div className='profile'>
            <img src="https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750"/>
            <div className="profile__avatar">
                <img
                    src="https://e7.pngegg.com/pngimages/911/1005/png-clipart-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper.png"/>
            </div>
            <div className="profile_posts">
                My posts
                <div className="profile__post-title">new post</div>
                <div className="profile__post-list">
                    <div className="profile__post-item">post 1</div>
                    <div className="profile__post-item">post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;