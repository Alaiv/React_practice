import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter, Routes, Link} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper ">
                <Header/>
                <Nav/>
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}></Route>
                        <Route path="/dialogs" element={<Dialogs/>}></Route>
                        <Route path="/news" element={<News/>}></Route>
                        <Route path="/music" element={<Music/>}></Route>
                        <Route path="/settings" element={<Settings/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
