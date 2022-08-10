import React from 'react';
import cl from './sideBar.module.css'
import FriendList from "./friendList/FriendList";
import Nav from "./navBar/Nav";


const SideBar = (props) => {
    const friends = props.state.sideBar.friends.map(v => (<FriendList id={v.id} ava={v.ava} name={v.name} key={v.id}/>))

    return (
        <div className={cl.sidebar}>
            <Nav/>
            <div className={cl.friends}>
                <h1>Friends</h1>
                {friends}
            </div>
        </div>
    );
};

export default SideBar;