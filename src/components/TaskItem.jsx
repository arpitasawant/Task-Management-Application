import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const { id,name, description, priority, completed } = task;

  // You can use 'id' somewhere in your component, or remove it if not needed
  // For example, you might want to use it in a link or button for editing the task

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
