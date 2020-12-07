import React from 'react';
import s from './Friends.module.css'


function Friends (props) {
let friend = props.friends.map(f => (
    <div className={s.name}>{f.name} <img className={s.img} src={f.avatar} alt="AVA"/></div>))
    {/*<li> <img className={s.img} src={f.avatar} alt="AVA"/> </li>*/}
{/*</ul>)*/}
    return (
        <div >
            <h4 className={s.title}>friends :</h4>
            <div className={s.friends}>
            {friend}
            </div>
        </div>
    );
}

export default Friends;

// <ul>
//     <li>Name</li>
//     <li>{ <img src="" alt="AVA"/> }</li>
// </ul>