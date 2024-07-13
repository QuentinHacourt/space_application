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
    <div className="container">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span className="todo-title">
              <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            </span>
            <div className="todo-buttons">
              <Link to={`/edit/${todo.id}`} className="button edit">Edit</Link>
              <button onClick={() => deleteTodo(todo.id)} className="button delete">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/add" className="button">Add New Todo</Link>
    </div>
  );
};

export default TodoList;
