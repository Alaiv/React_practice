import React from 'react';
import {connect} from "react-redux";
import {followDisable, selectPage, unfollowDisable, usersGet} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getSelectedPage,
    getTotalCount,
    superGetUsers
} from "../../Redux/userSelectors";

class UsersClass extends React.Component {

    componentDidMount = () => {
        const {selectedPage, pageSize} = this.props
        this.props.usersGet(selectedPage, pageSize)
    }

    updateCurrentPage = (page) => {
        this.props.selectPage(page)
        const {pageSize} = this.props
        this.props.usersGet(page, pageSize)
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
        users: superGetUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        selectedPage: getSelectedPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        selectPage,
        usersGet,
        unfollowDisable,
        followDisable
    })
)(UsersClass);
