import React from 'react';
import c from "./Users.module.css";
import User from "./User/User";
import userPhoto from "../../images/user.png";

const Users = (props) => {
    const pageCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.slice(0, 20).map(page => {
                return <span
                    key={Math.random()}
                    className={props.selectedPage === page ? c.selected : c.default}
                    onClick={() => props.updateCurrentPage(page)}
                >{page}
                    </span>
            })}
            {
                props.users.map(u => (
                    <User key={u.id} name={u.name} status={u.status}
                          ava={u.photos.small !== null ? u.photos.small : userPhoto}
                          id={u.id} followed={u.followed}
                          onFollow={props.onFollow} onUnFollow={props.onUnFollow}
                    />
                ))}
        </div>
    )
}

export default Users;