import React from 'react';
import cl from './MyButton.module.css'
const MyButton = (props) => {
    return (
        <div>
            <button onClick={props.add} className={cl.btn}>Send</button>
        </div>
    );
};

export default MyButton;