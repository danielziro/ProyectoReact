import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePost } from '../actions/Post';
 
const Post = ({ id, Nombre, Asignatura, Nota, dispatch }) => (
    <div>
        <Link to={`/Post/${id}`}>
            <h4>{Nombre} ({Asignatura})</h4>
        </Link>
        <p>Nota: {Nota}</p>
        {Asignatura && <p>{Asignatura}</p>}
        <button onClick={() => {
            dispatch(removePost({ id }));
        }}>Remove</button>
    </div>
);
 
export default connect()(Post);