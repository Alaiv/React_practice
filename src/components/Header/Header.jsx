import React from 'react';
import cl from './Header.module.css'
import {Link, Navigate, NavLink} from "react-router-dom";
import Preloader from "../common/Preloader";

const Header = (props) => {
    const unAuthorizeUser = () => {
        props.unAuthorizeUser()
    }

    return (
        <header className={cl.header}>
            <img className={cl.header__img}
                 src='https://www.svgrepo.com/show/77891/weibo-social-logo.svg'/>
            <div className={cl.login_window}>
                {props.isFetching ? <Preloader/> : ''}
                {props.isAuth
                    ? <div>{
                        <button onClick={unAuthorizeUser} className={cl.btn}>Выйти из системы</button>
                    } <img className={cl.ava} src={props.avatar}/>
                        {props.login}
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;