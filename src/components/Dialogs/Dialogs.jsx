import React from 'react';
import cl from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialog__list}>
                <div className={cl.title}>Dialogs</div>
                {props.dialog.map(d => <Dialog key={d.id} name={d.name} link={d.id}/>)}
            </div>
            <div className={cl.messages__list}>
                {props.message.map(m => <Messages key={m.id} message={m.msg}/>)}
            </div>
        </div>
    );
};

export default Dialogs;