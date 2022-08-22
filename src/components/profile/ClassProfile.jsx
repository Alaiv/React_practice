import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileInfo, setUserProfile} from "../../Redux/profileReducer";
import withRouter from "./MyPosts/WithRouter";
import withAuth from "../common/withAuth";
import {compose} from "redux";

class ClassProfile extends React.Component {
    componentDidMount() {
        let id = this.props.router.params.id
        this.props.getUserProfileInfo(id)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
    }
}

export default compose(
    withAuth,
    withRouter,
    connect(mapStateToProps, {setUserProfile, getUserProfileInfo})
)(ClassProfile)