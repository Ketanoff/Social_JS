import React from 'react';
import Posts from './Posts/Posts';

const MyPosts = ( props ) => {

    let postsElements = props.posts.map ( p => <Posts message={ p.message } likesCount={ p.likesCount }/> );

    return <div>
        <h3>My Posts</h3>
        <div>
            <textarea>Введите сообщение</textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div>
            { postsElements }
        </div>
    </div>;
};

export default MyPosts;