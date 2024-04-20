import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './rootReducer';

// configure the Redux store
export const store = createStore(
    rootReducer, // use the rootReducer to handle updates to the state
    applyMiddleware(thunk)
);

