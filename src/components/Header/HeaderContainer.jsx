import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserInfo, setAvatar, setUserData, toggleLoader} from "../../Redux/authReducer";
import {headerAPI} from "../../api/api_requests";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserInfo()
    }

    render() {
        return (
            <Header {...this.props.state.auth}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {...state}
    }
}

export default connect(mapStateToProps, {getAuthUserInfo})(HeaderContainer);