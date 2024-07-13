import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const TodoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`http://127.0.0.1:8000/api/todos/${id}/`)
        .then(response => response.json())
        .then(data => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const url = id ? `http://127.0.0.1:8000/api/todos/${id}/` : `http://127.0.0.1:8000/api/todos/`;

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
      .then(() => navigate('/'));
  };

  return (
    <div className="container">
      <h1>{id ? 'Edit Todo' : 'Add Todo'}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label htmlFor="desciption">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default TodoForm;
