import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/images1.png';
import {createPages} from './PageCreator';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    createPages(pages, pagesCount, props.currentPage);
    
    return <div className={s.users}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.cursor}
                             onClick={(e) => {props.onPageChanged(p);}}>{p}-</span>;
            })}
            <div>Total ({pagesCount}pages)</div>
        
        </div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers        : {
                                        'API-KEY': '4a92b17f-3163-41f6-abf7-d5dd98a52bbd'
                                    }
                                }).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unFollow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                        }}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers        : {
                                        'API-KEY': '4a92b17f-3163-41f6-abf7-d5dd98a52bbd'
                                    }
                                }).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                        }}>Follow</button>}
                </div>
            </div>
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

export default Users;