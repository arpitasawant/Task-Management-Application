import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const { id, name, description, priority, completed } = task;

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={onComplete} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name} - {description} - {priority}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
