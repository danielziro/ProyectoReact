import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import getVisiblePosts from '../selectors/Post';
 
const PostList = (props) => (
    <div>
        Post List:
        <ul>
           {props.post.map(post => {
                return (
                    <li key={Post.id}>
                        <Post {...Post} />
                    </li>
                );
            })}
        </ul>
    </div>
);
const mapStateToProps = (state) => {
    return {
        Posts: getVisiblePosts(state.Post, state.filters)
    };
}
 
export default connect(mapStateToProps)(PostList);
