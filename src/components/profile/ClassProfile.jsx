import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import withRouter from "./MyPosts/WithRouter";

class ClassProfile extends React.Component {
    componentDidMount() {
        let id = this.props.router.params.id
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + (id === undefined ? "24972" : id))
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    return{
       profile: state.profile.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ClassProfile))


// export default ClassProfileContainer;