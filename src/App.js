import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/nav/Nav";
import {BrowserRouter} from "react-router-dom";
import Pages from "./components/Pages/Pages";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper ">
                <Header/>
                <Nav/>
                <Pages posts={props.posts} dialog={props.dialogArr} message={props.messageArr}/>
            </div>
        </BrowserRouter>
    );
}


export default App;

