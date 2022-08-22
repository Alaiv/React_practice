import React from 'react';
import {connect} from "react-redux";
import {followDisable, selectPage, unfollowDisable, usersGet} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import withAuth from "../common/withAuth";
import {compose} from "redux";

class UsersClass extends React.Component {

    componentDidMount = () => {
        this.props.usersGet(this.props.selectedPage, this.props.pageSize)
    }

    updateCurrentPage = (page) => {
        this.props.selectPage(page)
        this.props.usersGet(this.props.selectedPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   selectedPage={this.props.selectedPage}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   updateCurrentPage={this.updateCurrentPage}
                   isFollowing={this.props.isFollowing}
                   unfollowDisable={this.props.unfollowDisable}
                   followDisable={this.props.followDisable}
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
        isFetching: state.usersp.isFetching,
        isFollowing: state.usersp.isFollowing,
    }
}

export default compose(
    withAuth,
    connect(mapStateToProps, {
        selectPage,
        usersGet,
        unfollowDisable,
        followDisable
    })
)(UsersClass);
