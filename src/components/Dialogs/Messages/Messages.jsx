import React from 'react';
import cl from './Messages.module.css'

const Messages = (props) => {
    return (
        <div
            className={cl.messages__item}>
            {props.message}
        </div>
    );
};

export default Messages;