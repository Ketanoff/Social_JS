import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/images1.png';
import {createPages} from './PageCreator';

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

export default Users;