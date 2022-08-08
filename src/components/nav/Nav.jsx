import React from 'react';
import cl from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={cl.navbar}>
            <div className={cl.items}>
                <a className={`${cl.item} ${cl.active}`} href="/profile">Profile</a>
                <a className={cl.item} href="/dialogs">Dialogs</a>
                <a className={cl.item} href="/news">News</a>
                <a className={cl.item} href="/music">Music</a>
                <a className={cl.item} href="/settings">Settings</a>
            </div>
        </nav>
    );
};

export default Nav;