import React from 'react';
import './App.css';
import FeedbackForm from "./FeedbackForm";
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Route path="/feedback/:userID" component={FeedbackForm} />
      
    </div>
  );
}

export default App;
