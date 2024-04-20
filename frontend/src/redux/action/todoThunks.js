import { fetchTodosSuccess, addTodo } from './todoActions';

export function fetchTodos() {
  return function(dispatch) {
    fetch('http://127.0.0.1:8000/todos/')
      .then(response => response.json())
      .then(data => dispatch(fetchTodosSuccess(data)))
      .catch(error => console.error('Error:', error));
  };
}

export function createTodo(formData) {
  return function(dispatch) {
    fetch('http://127.0.0.1:8000/todos/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => dispatch(addTodo(data)))
    .catch(error => console.error('Error:', error));
  };
}
