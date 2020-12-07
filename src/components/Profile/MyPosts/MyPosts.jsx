import React from 'react';
import Posts from './Posts/Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map(p => <Posts
        message={p.message} likesCount={p.likesCount}/>);
    
    let newPostElement = React.createRef();
    
    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    };
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // props.dispatch ({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        // props.dispatch (updateNewPostTextActionCreator (text))
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    
    return <div>
        <h3>My Posts</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>;
};

export default MyPosts;