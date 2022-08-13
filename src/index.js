import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

function reRender(state) {
    root.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />
    );
}

reRender(store.getState())

store.subscriber(reRender)



