// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import TaskContextProvider from './components/TaskContext';
import './components/styles.css';

const App = () => {
  return (
    <TaskContextProvider>
      <Router>
        <div className="container">
          <header>
            <h1>Task Manager</h1>
          </header>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<AddTaskForm />} />
            <Route path="/edit/:taskId" element={<EditTaskForm />} />
          </Routes>
        </div>
      </Router>
    </TaskContextProvider>
  );
};

export default App;
