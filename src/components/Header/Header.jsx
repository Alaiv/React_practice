import React from 'react';
import cl from './Header.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader";

const Header = (props) => {
    return (
        <header className={cl.header}>
            <img className={cl.header__img}
                 src="https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png"/>
            <div className={cl.login_window}>
                {props.isFetching ? <Preloader/> : ''}
                {props.isAuth
                    ? <div>
                        <img className={cl.ava} src={props.avatar}/>
                        {props.login}
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;