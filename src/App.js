import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Homepage />
      <Projects />
      <About />
      <ContactForm />
      <Footer />
    </div>
  </Router>
);

export default App;
