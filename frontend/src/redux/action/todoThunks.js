import {fetchTodosSuccess, addTodo} from './todoActions';

// for fetching todos from the backend
export function fetchTodos() {
    return function (dispatch) {
        fetch('http://127.0.0.1:8000/todos/') // send a GET request to backend API endpoint
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                dispatch(fetchTodosSuccess(data)); // dispatch action to update todos in the store
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    };
}

// for creating a new item
export function createTodo(formData) {
    return function (dispatch) {
        return fetch('http://127.0.0.1:8000/todos/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData) // stringifies the data for sending in the request body
        })
            .then(function (response) {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(function (data) {
                dispatch(addTodo(data)); // dispatch action to add newly created item to the store
                return data;
            })
            .catch(function (error) {
                console.error('Error:', error);
                throw error;
            });
    };
}
