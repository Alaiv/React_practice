import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/sidebar/sideBar";
import {BrowserRouter} from "react-router-dom";
import Pages from "./components/Pages/Pages";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper ">
                <Header/>
                <SideBar state={props.state}/>
                <Pages
                    state={props.state}
                    dispatch={props.dispatch}
                />
            </div>
        </BrowserRouter>
    );
}


export default App;


