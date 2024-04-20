export const ADD_TODO = 'ADD_TODO';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    };
}

export function fetchTodosSuccess(todos) {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos,
    };
}
