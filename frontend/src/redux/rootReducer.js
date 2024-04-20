import {combineReducers} from 'redux';
import {todoReducer} from './reducer/todoReducer';

// combine all reducers into a single root reducer
export const rootReducer = combineReducers({
    // assign the todoReducer to handle state under the 'todos' key
    todos: todoReducer,
});
