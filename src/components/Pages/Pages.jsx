import React from 'react';
import {Route, Routes} from "react-router-dom";
import Profile from "../profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import './../../App.css'

const Pages = (props) => {
    return (
        <div className="app-wrapper__content">
            <Routes>
                <Route path="/profile" element={<Profile
                    state={props.state.profile}
                    addPost={props.addPost}
                    textChange={props.textChange}/>
                }/>
                <Route path="/dialogs" element={<Dialogs
                    state={props.state.dialogs}
                    addMessage={props.addMessage}
                    msgChangeText={props.msgTextChange}
                />
                }/>
                <Route path="/news" element={<News/>}></Route>
                <Route path="/music" element={<Music/>}></Route>
                <Route path="/settings" element={<Settings/>}></Route>
            </Routes>
        </div>
    );
};

export default Pages;