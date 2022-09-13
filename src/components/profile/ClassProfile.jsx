import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addAvatar,
    addProfileInfo,
    getUserProfileInfo,
    getUserStatus,
    setUserProfile,
    updateUserStatus
} from "../../Redux/profileReducer";
import withRouter from "./MyPosts/WithRouter";
import {compose} from "redux";
import {Navigate} from "react-router-dom";


class ClassProfile extends React.Component {
    updateProfileInfo() {
        let id = this.props.router.params.id
        if (!id) {
            id = this.props.usid
            if (!id) {
                return setTimeout(() => {
                    this.props.router.navigate('/login', {replace: true})
                })
            }
        }
        this.props.getUserStatus(id)
        this.props.getUserProfileInfo(id)
    }

    componentDidMount() {
        this.updateProfileInfo()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.router.params.id !== this.props.router.params.id || !this.props.isAuth) {
            this.updateProfileInfo()
        }
    }

    render() {
        // if (!this.props.router.params.id && !this.props.usid) return <Navigate to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         isOwner={!this.props.router.params.id}
                         addAvatar={this.props.addAvatar}
                         addProfileInfo={this.props.addProfileInfo}
                         isUpdated={this.props.isUpdated}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        usid: state.auth.id,
        isAuth: state.auth.isAuth,
        isUpdated: state.profile.fieldUpdated
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,
        {
            setUserProfile,
            getUserProfileInfo,
            getUserStatus,
            updateUserStatus,
            addAvatar,
            addProfileInfo
        })
)(ClassProfile)