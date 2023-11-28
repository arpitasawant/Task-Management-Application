import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/Tasklist';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/add" component={AddTaskForm} />
          <Route path="/edit/:taskId" component={EditTaskForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
