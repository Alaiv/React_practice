import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Pages from "./components/Pages/Pages";
import SideBarContainer from "./components/sidebar/SideBarContainer";


const App = (props) => {
    return (
        <BrowserRouter>
                <div className="app-wrapper ">
                    <Header/>
                    <SideBarContainer/>
                    <Pages/>
                </div>
        </BrowserRouter>
    );
}


export default App;


