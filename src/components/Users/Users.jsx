import React from 'react';
import User from "./User/User";
import c from './Users.module.css'


const Users = (props) => {

    return (
        <div>
            {props.users.map(u => (
                // <div key={u.id}>
                //     <div>
                //         <img className={c.img} src={u.ava} alt=""/>
                //         {u.followed
                //             ? <button onClick={() => props.onUnFollow(u.id)}>Unfollow</button>
                //             : <button onClick={() => props.onFollow(u.id)}>Follow</button>}
                //     </div>
                //     <div>
                //         <span>{u.userItem.name}</span>
                //         <span>{u.userItem.status}</span>
                //     </div>
                //     <div>
                //         <span>{u.userItem.location}</span>
                //     </div>
                // </div>
                <User key={u.id} name={u.userItem.name} status={u.userItem.status}
                      ava={u.ava} id={u.id} city={u.userItem.city} followed={u.followed}
                      onFollow={props.onFollow} onUnFollow={props.onUnFollow}
                />
            ))}
        </div>
    );
};

export default Users