import React from 'react';
import cl from './Header.module.css'

const Header = () => {
    return (
        <header className={cl.header}>
            <img className={cl.header__img}
                 src="https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png"/>
        </header>
    );
};

export default Header;