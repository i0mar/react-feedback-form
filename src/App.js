import React from 'react';
import './App.css';
import FeedbackForm from "./FeedbackForm";
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/feedback/:userID" component={FeedbackForm} />
        <Route path="/" component={FeedbackForm} />
      </Switch>
      
    </div>
  );
}

export default App;
