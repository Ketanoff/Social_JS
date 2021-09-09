import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress, toggleIsFetching, unFollow} from '../../redux/users-reducer';
import {userAPI} from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }
    
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />;
        </>;
    }
}

let mapStateToProps = (state) => {
    return {
        users              : state.usersPage.users,
        pageSize           : state.usersPage.pageSize,
        totalUsersCount    : state.usersPage.totalUsersCount,
        currentPage        : state.usersPage.currentPage,
        isFetching         : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers          : (users) => {
//             dispatch(setUsersAC(users));
//         },
//         follow            : (userId) => {
//             dispatch(followAC(userId));
//         },
//         unFollow          : (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setCurrentPage    : (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching  : (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     };
// };

export default connect(mapStateToProps, {
    setUsers, follow, unFollow, setCurrentPage,
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
})(UsersContainer);