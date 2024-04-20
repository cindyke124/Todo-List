import {fetchTodosSuccess, addTodo} from './todoActions';
// import {}

export function fetchTodos() {
    return function (dispatch) {
        fetch('http://127.0.0.1:8000/todos/')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                dispatch(fetchTodosSuccess(data));
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    };
}

export function createTodo(formData) {
    return function (dispatch) {
        return fetch('http://127.0.0.1:8000/todos/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(function (data) {
                dispatch(addTodo(data));
                return data;
            })
            .catch(function (error) {
                console.error('Error:', error);
                throw error;
            });
    };
}
