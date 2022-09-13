import React from 'react';
import cl from './ModalWindow.module.css'

const ModalWindow = (props) => {
    return (
        <div className={cl.modal}>
            {props.message}
        </div>
    );
};

export default ModalWindow;