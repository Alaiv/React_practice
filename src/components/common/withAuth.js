import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserInfo} from "../../Redux/authReducer";

function withAuth(Component) {
    function ComponentWithAuthProp(props) {
        if (!props.isAuth) return <Navigate to='/login'/>
        return (
            <Component {...props}/>
        );
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps, {getAuthUserInfo})(ComponentWithAuthProp)
}

export default withAuth