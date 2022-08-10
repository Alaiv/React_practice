import React from 'react';
import './index.css';
import {reRender} from "./Render";
import state, {addMessage, addPost, msgTextChange, textChange} from "./Reduks/State";

reRender(state, addPost, textChange, addMessage, msgTextChange);

