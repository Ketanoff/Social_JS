import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        follow  : (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        }
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);