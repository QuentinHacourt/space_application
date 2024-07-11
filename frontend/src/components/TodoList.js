import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/todos/')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const deleteTodo = (id) => {
    fetch(`http://127.0.0.1:8000/api/todos/${id}/`, {
      method: 'DELETE',
    })
      .then(() => setTodos(todos.filter(todo => todo.id !== id)));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <Link to={`/edit/${todo.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add</Link>
    </div>
  );
};

export default TodoList;
