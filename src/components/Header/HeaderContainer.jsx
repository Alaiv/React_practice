import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {unAuthorizeUser} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props.state.auth} unAuthorizeUser={this.props.unAuthorizeUser}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {...state}
    }
}

export default connect(mapStateToProps, {unAuthorizeUser})(HeaderContainer);