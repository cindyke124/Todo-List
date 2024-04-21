import {ADD_TODO, FETCH_TODOS_SUCCESS} from '../action/todoActions';

// define the initial state for the todos part
const initialState = {
    todo_list: [],
};

// reducer function to handle actions related to todos
export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            // handle adding a new record by prepending it to the current list of todos
            return {
                ...state,
                todo_list: [action.payload, ...state.todo_list],
            };
        case FETCH_TODOS_SUCCESS:
            // handle fetching todos successfully by replacing the existing list with the new one
            return {
                ...state,
                todo_list: action.payload,
            };
        default:
            return state;
    }
}
