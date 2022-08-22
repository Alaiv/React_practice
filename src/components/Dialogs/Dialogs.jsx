import React from 'react';
import cl from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import { Navigate } from "react-router-dom"

const Dialogs = (props) => {

    const addMessage = () => {
        props.onAddMessage()
    }

    const changeText = (e) => {
        let text = e.target.value
        props.onMsgTextChange(text)
    }

    const dialogs = props.state.dialogFriends.map(d => <Dialog key={d.id} name={d.name} link={d.id}/>)
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
                    value={props.state.messageText}
                    onChange={changeText}
                />
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;