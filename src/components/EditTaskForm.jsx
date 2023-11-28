// EditTaskForm.js
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Change this line
import { TaskContext } from './TaskContext';

const EditTaskForm = () => {
  const { tasks, editTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const navigate = useNavigate(); // Change this line
  const { taskId } = useParams();

  useEffect(() => {
    const task = tasks.find((task) => task.id === parseInt(taskId));
    if (task) {
      setTaskName(task.name);
      setTaskDescription(task.description);
      setPriority(task.priority);
    }
  }, [tasks, taskId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;
    editTask(taskId, { name: taskName, description: taskDescription, priority });
    navigate('/'); // Change this line
  };

  return (
    <div>
      <h1>Edit Task</h1>
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
        <button type="submit">Save Changes</button>
      </form>
      <Link to="/">Back to Task List</Link>
    </div>
  );
};

export default EditTaskForm;
