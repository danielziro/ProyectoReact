import { createStore, combineReducers, applyMiddleware } from "redux";
import PostReducer from '../reducers/Post';
import thunk from 'redux-thunk';
 

 
export default () => {
    return createStore(
        combineReducers({
            Post: PostReducer      
        }),
        applyMiddleware(thunk));
};