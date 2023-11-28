import React, { useState } from 'react';

const EditTaskForm = ({ task, onSave }) => {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(task.description);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleSave = () => {
    const editedTask = {
      ...task,
      name: editedTaskName,
      description: editedTaskDescription,
      priority: editedPriority,
    };

    onSave(editedTask);
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <label>
        Task Name:
        <input
          type="text"
          value={editedTaskName}
          onChange={(e) => setEditedTaskName(e.target.value)}
        />
      </label>
      <label>
        Task Description:
        <textarea
          value={editedTaskDescription}
          onChange={(e) => setEditedTaskDescription(e.target.value)}
        />
      </label>
      <label>
        Priority:
        <select value={editedPriority} onChange={(e) => setEditedPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditTaskForm;
