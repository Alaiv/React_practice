import React from 'react';
import cl from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.link}`} className={cl.item}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;