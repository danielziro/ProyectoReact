import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { addPost } from '../actions/Post';
 
const AddPost = (props) => (
    <div>
        <h3>asignar Informacion Post</h3>
        <PostForm
            onSubmitPost={(Post) => {
                props.dispatch(addPost(Post));
                props.history.push('/');
            }}
        />
    </div>
);
 
export default connect()(AddPost);