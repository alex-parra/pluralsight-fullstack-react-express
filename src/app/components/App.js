import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from 'app/components/Dashboard';
import TaskDetail from './TaskDetail';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/task/:id" component={TaskDetail} />
    </Router>
  );
};

export default App;
