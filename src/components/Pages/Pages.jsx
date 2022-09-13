import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import './../../App.css'
import ClassProfile from "../profile/ClassProfile";
import Login from "../login/Login";
import Preloader from "../common/Preloader";
import {Navigate} from "react-router-dom";

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('../Users/UsersContainer'));

const Pages = (props) => {
    return (
        <div className="app-wrapper__content">
            <Suspense fallback={<Preloader/>}>
                <Routes>
                    <Route path="/" element={<Navigate to={'/profile'}/>}>
                        <Route path={'React_practice'}/>
                    </Route>
                    <Route path="/profile" element={<ClassProfile/>}>
                        <Route path=":id" element={<ClassProfile/>}/>
                    </Route>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}></Route>
                    <Route path="/music" element={<Music/>}></Route>
                    <Route path="/users" element={<UsersContainer/>}></Route>
                    <Route path="/settings" element={<Settings/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="*" element={<div>NOT FOUND 404</div>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default Pages;