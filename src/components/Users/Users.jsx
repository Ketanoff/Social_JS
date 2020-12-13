import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/images.png';

export const Users = (props) => {
    
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
        }
    };
    
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <span>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </span>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unFollow(u.id);}}>UnFollow</button>
                            : <button onClick={() => {props.follow(u.id);}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>;
    
};