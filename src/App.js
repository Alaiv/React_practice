import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Pages from "./components/Pages/Pages";
import SideBarContainer from "./components/sidebar/SideBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./Redux/appReducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className="app-wrapper ">
                    <HeaderContainer/>
                    <SideBarContainer/>
                    <Pages/>
                </div>
            </BrowserRouter>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.init
    }
}

export default connect(mapStateToProps,
    {
        initializeApp
    }
)(App);


