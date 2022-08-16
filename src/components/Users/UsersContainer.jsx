import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsers, setUsersAC, unfollowAC} from "../../Redux/usersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersp.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFollow: (userId) =>  dispatch(followAC(userId)),
        onUnFollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
