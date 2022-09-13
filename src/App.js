import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Pages from "./components/Pages/Pages";
import SideBarContainer from "./components/sidebar/SideBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader";
import {handleAllRejections, initializeApp} from "./Redux/appReducer";
import store from "./Redux/reduxStore";
import ModalWindow from "./components/common/ModalWindow";

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

    handleAllUncaughtRejection = (reason) => {
        this.props.handleAllRejections(reason.reason.message)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.handleAllUncaughtRejection)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.handleAllUncaughtRejection)
    }

    render() {
         if (!this.props.initialized) return <Preloader/>
        return (
            <div className="app-wrapper ">
                {this.props.isShowErrorNeeded && <ModalWindow message={this.props.modalErrorMsg}/>}
                <HeaderContainer/>
                <SideBarContainer/>
                <Pages/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.init,
        isShowErrorNeeded: state.app.showErrorModal,
        modalErrorMsg: state.app.errorMessageModal,
    }
}

const ContainerApp = connect(mapStateToProps, {initializeApp, handleAllRejections})(App);


export default MainApp

