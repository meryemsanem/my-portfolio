import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Homepage />
      <Projects />
    </div>
  </Router>
);

export default App;
