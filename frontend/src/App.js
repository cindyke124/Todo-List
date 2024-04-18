import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoForm from './views/Todo/TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
