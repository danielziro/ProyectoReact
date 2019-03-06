const postsReducerDefaultState = [];
 
export default (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_post':
            return [
                ...state,
                action.post
            ];
        case 'REMOVE_post':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_post':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    };
                } else {
                    return post;
                }
            });
        case 'GET_posts':
            return action.posts;
        default:
            return state;
    }
};