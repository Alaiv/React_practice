import React from 'react';
import cl from './MyButton.module.css'
const MyButton = () => {
    return (
        <div>
            <button className={cl.btn}>Send</button>
        </div>
    );
};

export default MyButton;