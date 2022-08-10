import React from 'react';
import cl from './FriendList.module.css'
import {Link} from "react-router-dom";
const FriendList = (props) => {
    return (
            <Link to={`${props.id}`} className={cl.list}>
                <img className={cl.avatar} src={props.ava}/>
                {props.name}
            </Link>
    );
};

export default FriendList;