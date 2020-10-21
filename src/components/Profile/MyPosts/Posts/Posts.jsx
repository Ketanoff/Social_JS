import React from 'react';
import s from './Posts.module.css';

const Posts = ( props ) => {
    return (
        <div className={ s.item }>

            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStT_1kqvFCBfCzV0UMEMM3R4k1KkHHE4JpPA&usqp=CAU'
                alt=''/>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>

    );
};
// function f() {
//
// }
export default Posts;