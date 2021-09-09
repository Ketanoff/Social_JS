import s from '../../Users/Users.module.css';
import preloader from '../../../assets/preloader/preloader11-05022017-011.gif';
import React from 'react';

let Preloader = () => {
    return <div className={s.cont}><img className={s.preloader} src={preloader}/></div>;
};

export default Preloader;