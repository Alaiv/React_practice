import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {ultimateForm} from "../common/FormControls/FormAssets";
import {maxLength, minLength, required} from "../../utilities/validator";
import {getLoginValues} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";
import cl from './../common/FormControls/FormAssets.module.css'


const maxLogin = maxLength(20)
const maxPass = maxLength(12)
const minLogin = minLength(6)
const minPass = minLength(6)
const someFunc = (props) => {
    return ultimateForm({...props}, 'input')
}

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type='text' placeholder={'Введите логин'} name={'login'} component={someFunc}
                        validate={[required, maxLogin, minLogin]}/></div>
            <div><Field type='password' placeholder={'Введите пароль'} name={'password'} component={someFunc}
                        validate={[required, maxPass, minPass]}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={'input'}/>Запомнить меня</div>
            <div>
                <button>Войти в систему</button>
            </div>
            {props.error
                ? <div className={cl.massError}>
                    <span>{props.error}</span>
                </div>
                : ''}
            <div hidden={props.hide}><Field type="text" name={'captcha'} component={'input'}/>Капча</div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getLoginValues(formData)
    }

    if (props.isAuth) return <Navigate to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} hide={props.hideCaptcha}/>
            <div><img src={props.captcha}/></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        // errMsg: state.auth.errMsg,
        captcha: state.auth.captcha,
        hideCaptcha: state.auth.hideCaptcha
    }
}

export default connect(mapStateToProps, {getLoginValues})(Login);