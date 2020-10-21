import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = ( props ) => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 1, message: 'i\'m learn react', likesCount: 111 },
        { id: 1, message: 'i\'m learn GRID', likesCount: 9 },
        { id: 1, message: 'i\'m learn react', likesCount: 22 }
    ];

    let postsElements = posts.map ( p => <Posts message={ p.message } likesCount={ p.likesCount }/> );

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