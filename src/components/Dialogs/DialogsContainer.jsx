import React from 'react';
import {addMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuth from "../common/withAuth";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogs,
    }
}


export default compose(
    withAuth,
    connect(mapStateToProps, {addMessageActionCreator})
)(Dialogs);