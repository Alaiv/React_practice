import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
export function reRender(state, addPost, textChange, addMessage, msgTextChange) {
    root.render(
        <App
            state={state}

            addPost={addPost}
            textChange={textChange}

            addMessage={addMessage}
            msgTextChange={msgTextChange}
        />
    );
}

