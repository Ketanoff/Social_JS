import React from 'react';
import ProfileInfo from './Profile/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo status={props.status} profile={props.profile}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
