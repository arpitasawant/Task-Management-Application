// AddTaskForm.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TaskContext } from './TaskContext';

const AddTaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if taskName is empty
    if (taskName.trim() === '') {
      setError('Task Name is required.');
      return;
    }

    // Reset error if taskName is not empty
    setError('');

    // Add the task
    addTask({ name: taskName, description: taskDescription, priority });
    navigate('/');
  };

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <label>
          Task Description:
          <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        </label>
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there is an error */}
        <button type="submit">Add Task</button>
      </form>
      <Link to="/">Back to Task List</Link>
    </div>
  );
};

export default AddTaskForm;
