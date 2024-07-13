import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/todos/${id}/`)
      .then(response => response.json())
      .then(data => setTodo(data));
  }, [id]);

  if (!todo) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{todo.title}</h1>
      <h2>Description:</h2>
      <p>{todo.description}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default TodoDetails;
