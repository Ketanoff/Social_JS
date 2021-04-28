import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return <div>
        <div>
            <img className={s.img}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfoNaT5DrQdPkXE2_3W5ITt4yPACHhIGpAgg&usqp=CAU'
                 alt='ff'/>
        </div>
        <div>
            <img src={props.profile.photos.small} alt=''/>
            <p>{props.profile.aboutMe}</p>
            <p>Name: {props.profile.fullName}</p>
        </div>
    </div>;
};

export default ProfileInfo;
