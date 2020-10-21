import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={ s.img }>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfoNaT5DrQdPkXE2_3W5ITt4yPACHhIGpAgg&usqp=CAU"
            alt='ff'/>
        <div>ava + description</div>
    </div>;
};

export default ProfileInfo;
