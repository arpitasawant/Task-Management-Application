// TaskList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name} - Status: {task.completed ? 'Completed' : 'Not Completed'}
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <div>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <Link to={`/edit/${task.id}`}>Edit</Link>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Task</Link>
    </div>
  );
};

export default TaskList;
