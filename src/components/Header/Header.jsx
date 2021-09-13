import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcLJmMvZWgKjCoHNcUCVl3NtM--vqHVqo_6A&usqp=CAU'
             alt=''/>
    
    </header>;
};

export default Header;