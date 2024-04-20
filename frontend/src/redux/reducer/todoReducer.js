import {ADD_TODO, FETCH_TODOS_SUCCESS} from '../action/todoActions';

const initialState = {
    todos: [],
};

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
}
