import React from 'react';
import c from './User.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../../api/api_requests";

const User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    <img className={c.img} src={props.ava} alt=""/>
                </NavLink>
                {
                    props.followed
                        ? <button id={props.id} onClick={() => {
                            usersAPI.unFollowUser(props.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.onUnFollow(props.id)
                                    }
                                })
                        }}>Unfollow</button>
                        : <button id={props.id} onClick={() => {
                            usersAPI.followUser(props.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.onFollow(props.id)
                                    }
                                })
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