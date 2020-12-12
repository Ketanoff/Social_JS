import React from 'react';
import s from './Friends.module.css';
import StoreContext from '../../../StoreContext';


function Friends() {
    return <StoreContext>
        {(store) => {
            let state = store.getState().sideBar.friends;
            let friend = state.map(f => (
                <div id={f.id} className={s.name}>{f.name} <img className={s.img} src={f.avatar} alt=''/>
                </div>));
            return <div>
                <h4 className={s.title}>friends :</h4>
                <div className={s.friends}>
                    {friend}
                </div>
            </div>;
        }}
    </StoreContext>;
}

export default Friends;

// <ul>
//     <li>Name</li>
//     <li>{ <img src="" alt="AVA"/> }</li>
// </ul>