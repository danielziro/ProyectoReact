import database from '../firebase/firebase';
 
const _addPost = (Post) => ({
    type: 'ADD_Post',
    Post
});
 
export const addPost = (PostData = {
    Nombre: '',
    Asignatura: '',
    Nota: '',
}) => {
    return (dispatch) => {
        const Post = {
            Nombre: PostData.Nombre,
            Asignatura: PostData.Asignatura,
            Nota: PostData.Nota,
        };
 
        return database.ref('Post').push(Post).then(ref => {
            dispatch(_addPost({
                id: ref.key,
                ...Post
            }));
        });
    };
};
 
const _removePost = ({ id } = {}) => ({
    type: 'REMOVE_Post',
    id
});
 
export const removePost = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`Post/${id}`).remove().then(() => {
            dispatch(_removePost({ id }));
        })
    }
};
 
const _editPost = (id, updates) => ({
    type: 'EDIT_Post',
    id,
    updates
});
 
export const editPost = (id, updates) => {
    return (dispatch) => {
        return database.ref(`Posts/${id}`).update(updates).then(() => {
            dispatch(_editPost(id, updates));
        });
    }
};
 
const _getPosts = (Posts) => ({
    type: 'GET_Posts',
    Posts
});
 
export const getPosts = () => {
    return (dispatch) => {
        return database.ref('Posts').once('value').then(snapshot => {
            const Posts = [];
 
            snapshot.forEach(item => {
                Posts.push({
                    id: item.key,
                    ...item.val()
                });
            });
 
            dispatch(_getPosts(Posts));
        });
    };
};