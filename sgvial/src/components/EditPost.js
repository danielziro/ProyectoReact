import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { editPost } from '../actions/Post';
 
const EditPost = (props) => (
    <div className='container__box'>
        <PostForm
            Post={props.Post}
            onSubmitPost={(Post) => {
                props.dispatch(editPost(props.Post.id, Post));
                props.history.push('/');
            }}
        />
    </div>
);
 
const mapStateToProps = (state, props) => {
    return {
        Post: state.Posts.find((Post) =>
            Post.id === props.match.params.id)
    };
};
 
export default connect(mapStateToProps)(EditPost);