import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">Lista de Tareas</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese una tarea..."
          />
          <button type="submit" className="btn btn-primary">Agregar</button>
        </div>
      </form>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
