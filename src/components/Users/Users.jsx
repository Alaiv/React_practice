import React from 'react';
import User from "./User/User";
import userPhoto from "../../images/user.png";
import Paginator from "../common/paginator/Paginator";

const Users = (props) => {

    return (
        <div>
            <Paginator totalCount={props.totalCount} pageSize={props.pageSize}
                       selectedPage={props.selectedPage} updateCurrentPage={props.updateCurrentPage}/>
            {
                props.users.map(u => (
                    <User key={u.id} name={u.name} status={u.status}
                          ava={u.photos.small !== null ? u.photos.small : userPhoto}
                          id={u.id} followed={u.followed}
                          isFollowing={props.isFollowing}
                          unfollowDisable={props.unfollowDisable}
                          followDisable={props.followDisable}
                    />
                ))}
        </div>
    )
}

export default Users;