import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users          : state.usersPage.users,
        pageSize       : state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage    : state.usersPage.currentPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers          : (users) => {
            dispatch(setUsersAC(users));
        },
        follow            : (userId) => {
            dispatch(followAC(userId));
        },
        unFollow          : (userId) => {
            dispatch(unFollowAC(userId));
        },
        setCurrentPage    : (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);