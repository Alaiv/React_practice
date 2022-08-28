import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Pages from "./components/Pages/Pages";
import SideBarContainer from "./components/sidebar/SideBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./Redux/appReducer";
import store from "./Redux/reduxStore";


const MainApp = (props) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ContainerApp/>
            </BrowserRouter>
        </Provider>

    )
}

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="app-wrapper ">
                <HeaderContainer/>
                <SideBarContainer/>
                <Pages/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.init
    }
}

const ContainerApp = connect(mapStateToProps, {initializeApp})(App);


export default MainApp

