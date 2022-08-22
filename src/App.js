import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Pages from "./components/Pages/Pages";
import SideBarContainer from "./components/sidebar/SideBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
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


export default App;

