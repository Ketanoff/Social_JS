import React from 'react';
import s from './Friends.module.css';


function Friends(props) {
    // let statte = props.friends;
    let friend = props.friends.map(f => <div id={f.id} className={s.name}>{f.name}
        <img className={s.img} src={f.avatar} alt=''/>
    </div>);
    return <div>
        <h4 className={s.title}>friends :</h4>
        <div className={s.friends}>
            {friend}
        </div>
    </div>;
}

export default Friends;

// <ul>
//     <li>Name</li>
//     <li>{ <img src="" alt="AVA"/> }</li>
// </ul>