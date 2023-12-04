import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import About from './components/About';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Homepage />
      <Projects />
      <About />
    </div>
  </Router>
);

export default App;
