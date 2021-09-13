import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '13324';
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
        // this.props.updateUserStatus(this.props.status);
    }
    
    render() {
        return (
            <div>
                <Profile {...this.props} status={this.props.status}
                         profile={this.props.profile}
                         updateUserStatus={this.props.updateUserStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status : state.profilePage.status
});

/*let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));*/
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    // withAuthRedirect,
    withRouter
)(ProfileContainer);