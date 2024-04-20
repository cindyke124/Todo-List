export const ADD_TODO = 'ADD_TODO';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';

// action creator for adding a new item
export function addTodo(todo) {
    return {
        type: ADD_TODO, // identifies the type of action being performed
        payload: todo, // contains the new item data
    };
}

// action creator for setting the list when fetching successfully
export function fetchTodosSuccess(todos) {
    return {
        type: FETCH_TODOS_SUCCESS, // identifies that fetching is successful
        payload: todos, // contains the fetched list
    };
}
