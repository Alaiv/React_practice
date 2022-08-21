import React from 'react';
import {Route, Routes} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import './../../App.css'
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ClassProfile from "../profile/ClassProfile";

const Pages = (props) => {
    return (
        <div className="app-wrapper__content">
            <Routes>
                <Route path="/profile/" element={<ClassProfile/>}>
                    <Route path=":id" element={<ClassProfile/>}/>
                </Route>
                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                <Route path="/news" element={<News/>}></Route>
                <Route path="/music" element={<Music/>}></Route>
                <Route path="/users" element={<UsersContainer/>}></Route>
                <Route path="/settings" element={<Settings/>}></Route>
            </Routes>
        </div>
    );
};

export default Pages;