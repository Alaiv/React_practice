import React from 'react';
import cl from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={cl.messages__item}>
            <img src={props.ava}/>
            <div className={cl.message}>
                {props.message}
            </div>
        </div>
    );
};

export default Messages;