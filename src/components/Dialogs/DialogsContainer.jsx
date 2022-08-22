import React from 'react';
import {addMessageActionCreator, changeMsgTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuth from "../common/withAuth";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogs,
        // isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMsgTextChange: (txt) => {
            dispatch(changeMsgTextActionCreator(txt))
        }
    }
}


//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuth(Dialogs))

export default compose(
    withAuth,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);