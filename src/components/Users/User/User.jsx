import React from 'react';
import c from './User.module.css'

const User = (props) => {
    let follow = (e) => {
        props.onFollow(+e.currentTarget.id)
    }

    let unFollow = (e) => {
        props.onUnFollow(+e.currentTarget.id)
    }
    return (
        <div>
            <div>
                <img className={c.img} src={props.ava} alt=""/>
                {
                    props.followed
                        ? <button id={props.id} onClick={unFollow}>Unfollow</button>
                        : <button id={props.id} onClick={follow}>Follow</button>
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