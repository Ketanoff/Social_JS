import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/images1.png';
import s from './Users.module.css';

export class Users extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    
    render() {
        
        return <div className={s.users}>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <span>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </span>
                    <div>
                        {u.followed
                            ? <button onClick={() => {this.props.unFollow(u.id);}}>UnFollow</button>
                            : <button onClick={() => {this.props.follow(u.id);}}>Follow</button>}
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
        
    }
}