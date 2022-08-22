import React from 'react';
import c from './User.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    <img className={c.img} src={props.ava} alt=""/>
                </NavLink>
                {
                    props.followed
                        ? <button disabled={props.isFollowing.some(id => id === props.id)}
                                  onClick={() => {
                                      props.unfollowDisable(props.id)
                                  }}>Unfollow</button>
                        : <button disabled={props.isFollowing.some(id => id === props.id)}
                                  onClick={() => {
                                      props.followDisable(props.id)
                                  }}>Follow</button>
                }
            </div>
            <div>
                {props.name}
                {props.status}
                {props.city}
            </div>
        </div>
    );
};

export default User;