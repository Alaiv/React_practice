import React from 'react';
import {Route, Routes} from "react-router-dom";
import Profile from "../profile/Profile";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import './../../App.css'
import DialogsContainer from "../Dialogs/DialogsContainer";

const Pages = (props) => {
    return (
        <div className="app-wrapper__content">
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/dialogs" element={<DialogsContainer/>}/>
                <Route path="/news" element={<News/>}></Route>
                <Route path="/music" element={<Music/>}></Route>
                <Route path="/settings" element={<Settings/>}></Route>
            </Routes>
        </div>
    );
};

export default Pages;