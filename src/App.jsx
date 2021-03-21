import './App.css';
import {Router} from '@reach/router';
import React from 'react';
import Home from './components/Home';
import DisplayChoice from './components/DisplayChoice';
import HelloRedBlue from './components/HelloRedBlue';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <DisplayChoice path="/:input"/>
        <HelloRedBlue path="/:input/:textColor/:bkrnColor"/>
      </Router>
    </div>
  );
}

export default App;
