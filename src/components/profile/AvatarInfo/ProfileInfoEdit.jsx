import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utilities/validator";
import {ultimateForm} from "../../common/FormControls/FormAssets";
import MyButton from "../../button/MyButton";
import cl from "../../common/FormControls/FormAssets.module.css";


let maxL25 = maxLength(25)
let minL2 = minLength(2)

const inputForm = (props) => {
    return ultimateForm({...props}, 'input')
}
const areaForm = (props) => {
    return ultimateForm({...props}, 'textarea')
}


const ProfileInfoEdit = ({profile, setEditMode, ...props}) => {
    const fullContacts = Object.keys(profile.contacts).map((key) =>
        <div key={key}><Field name={`contacts.${key}`} component={inputForm} placeholder={key} validate={[required, maxL25, minL2]}/></div>)

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <MyButton>Submit</MyButton>
                <Field component={inputForm} name={'fullName'} placeholder={'Full Name'} validate={[required, maxL25, minL2]}></Field>
                <span>Looking for a job?</span>
                <Field component='input' type='checkbox' name={'lookingForAJob'}></Field>
                <Field component={areaForm} name={'lookingForAJobDescription'}
                       placeholder='Job search process...' validate={[required, maxL25, minL2]}></Field>
                <Field component={areaForm} name={'aboutMe'} placeholder='About me...' validate={[required, maxL25, minL2]}></Field>
                <b>contacts:</b> {fullContacts}
                {props.error
                    ? <div className={cl.massError}>
                        <span>{props.error}</span>
                    </div>
                    : ''}
            </form>
            <div><button onClick={() => setEditMode(false)}>Exit edit mode</button></div>
        </>
    )
}

export const ProfileInfoEditRedux = reduxForm({
    form: "editProfile"
})(ProfileInfoEdit)