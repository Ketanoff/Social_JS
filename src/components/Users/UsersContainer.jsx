import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {follow, getUsers, setCurrentPage, unfollow} from '../../redux/users-reducer';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
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

/*export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    getUsers
})(UsersContainer);*/
export default compose(
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage, getUsers
    })
    // withAuthRedirect
)(UsersContainer);