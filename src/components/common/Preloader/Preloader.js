import s from '../../Users/Users.module.css';
import preloader from '../../../assets/preloader/preloader.gif';
import React from 'react';

let Preloader = (props) => {
    return <div className={s.cont}><img className={s.preloader} src={preloader}/></div>;
};

export default Preloader;