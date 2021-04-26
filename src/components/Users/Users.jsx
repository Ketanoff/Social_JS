import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/images1.png';
import s from './Users.module.css';
import {createPages} from './PageCreator';

export class Users extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {this.props.setUsers(response.data.items);});
    };
    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        createPages(pages, pagesCount, this.props.currentPage);
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i);
        // }
        return <div className={s.users}>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : s.cursor}
                                 onClick={(e) => {this.onPageChanged(p);}}>{p}-</span>;
                })}
                <div>Total ({pagesCount}pages)</div>
            
            </div>
            {this.props.users.map(u => <div key={u.id}>
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