import React from 'react';
import {connect} from "react-redux";
import {onFollow, onUnFollow, selectPage, setTotalUsers, setUsers, toggleLoader} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api_requests";

class UsersClass extends React.Component {

    componentDidMount = () => {
        this.props.toggleLoader(true)
        usersAPI.getUsers(this.props.state, this.props.pageSize).then(data => {
            this.props.toggleLoader(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsers(data.totalCount)
        })
    }

    updateCurrentPage = (page) => {
        this.props.toggleLoader(true)
        this.props.selectPage(page)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleLoader(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   selectedPage={this.props.selectedPage}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   updateCurrentPage={this.updateCurrentPage}
                   onFollow={this.props.onFollow}
                   onUnFollow={this.props.onUnFollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersp.users,
        pageSize: state.usersp.pageSize,
        totalCount: state.usersp.totalCount,
        selectedPage: state.usersp.selectedPage,
        isFetching: state.usersp.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    onFollow,
    onUnFollow,
    setUsers,
    selectPage,
    setTotalUsers,
    toggleLoader,
})(UsersClass)

export default UsersContainer;
