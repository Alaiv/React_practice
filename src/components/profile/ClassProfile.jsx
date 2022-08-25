import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileInfo, getUserStatus, setUserProfile, updateUserStatus} from "../../Redux/profileReducer";
import withRouter from "./MyPosts/WithRouter";
import {compose} from "redux";


class ClassProfile extends React.Component {
    componentDidMount() {
        let id = this.props.router.params.id
        if(!id){
             id = this.props.usid
            if(!id) {
              return setTimeout(() => {this.props.router.navigate('/login', {replace: true})})
            }
        }
        this.props.getUserStatus(id)
        this.props.getUserProfileInfo(id)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
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
        isAuth: state.auth.isAuth
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setUserProfile, getUserProfileInfo, getUserStatus, updateUserStatus})
)(ClassProfile)