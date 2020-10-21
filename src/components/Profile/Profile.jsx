import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profile/ProfileInfo';

const Profile = ( props ) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={ props.posts }/>
        </div>
    );
};

export default Profile;
