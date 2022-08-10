import React from 'react';
import cl from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    const dialogRef = React.createRef()

    const addMessage = () => {
        props.addMessage()
    }

    const changeText = () => {
        props.msgChangeText(dialogRef.current.value);
    }

    const dialogs = props.state.dialogs.map(d => <Dialog key={d.id} name={d.name} link={d.id}/>)
    const messages = props.state.messages.map(m => <Messages ava={m.ava} key={m.id} message={m.msg}/>)

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialog__list}>
                <div className={cl.title}>Dialogs</div>
                {dialogs}
            </div>
            <div className={cl.messages__list}>
                {messages}
                <div className={cl.dialogArea}>
                <textarea
                    ref={dialogRef}
                    className={cl.area}
                    value={props.messageText}
                    onChange={changeText}
                />
                <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;