import {Navigate} from "react-router-dom";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {connect} from "react-redux";

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

    return connect(mapStateToProps)(ComponentWithAuthProp)
}

export default withAuth