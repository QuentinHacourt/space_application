import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoDetails from './components/TodoDetails';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todos/:id" element={<TodoDetails />} />
        <Route path="/add" element={<TodoForm />} />
        <Route path="/edit/:id" element={<TodoForm />} />
      </Routes>
    </Router>
  );
};

export default App;
