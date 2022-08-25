import React from 'react';
import cl from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {ultimateForm} from "../common/FormControls/FormAssets";
import {maxLength, minLength, required} from "../../utilities/validator";

let maxL20 = maxLength(20)
let minL3 = minLength(3)
const someFunc = (props) => {
    return ultimateForm({...props},'textarea')
}

const DialogArea = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={cl.dialogArea}>
                <Field
                    placeholder={'Введитe описание поста...'}
                    name={'dialogArea'}
                    component={someFunc}
                    validate={[required, maxL20, minL3]}
                />
                <button>Add message</button>
            </div>
        </form>
    )
}

const DialogReduxArea = reduxForm({
    form: 'dialogsArea'
})(DialogArea)

const Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.addMessageActionCreator(formData.dialogArea)
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
                <DialogReduxArea onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default Dialogs;