import React from 'react';
import SideBar from "./sideBar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.sideBar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default SideBarContainer;