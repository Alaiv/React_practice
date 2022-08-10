import React from 'react';
import cl from './Nav.module.css'
import {NavLink} from "react-router-dom";

const active = ({isActive}) => isActive ? cl.activeLink : cl.item;

const Nav = (props) => {
    return (
        <div className={cl.items}>
            <NavLink className={active} to="/profile">Profile</NavLink>
            <NavLink className={active} to="/dialogs">Dialogs</NavLink>
            <NavLink className={active} to="/news">News</NavLink>
            <NavLink className={active} to="/music">Music</NavLink>
            <NavLink className={active} to="/settings">Settings</NavLink>
        </div>
    );
};

export default Nav;