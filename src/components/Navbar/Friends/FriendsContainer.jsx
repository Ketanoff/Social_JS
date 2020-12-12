import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';

// function _FriendsContainer() {
//     let state = store.getState().sideBar.friends;
//     let friend = state.map(f => (
//         <div id={f.id} className={s.name}>{f.name} <img className={s.img} src={f.avatar} alt=''/>
//         </div>));
//     return <div>
//         <h4 className={s.title}>friends :</h4>
//         <div className={s.friends}>
//             {friend}
//         </div>
//     </div>;
// }

let mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends
    };
};

let mapDispatchToProps = (dispatch) => {
    return {};
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;

// <ul>
//     <li>Name</li>
//     <li>{ <img src="" alt="AVA"/> }</li>
// </ul>