import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ObservationContainer from './containers/ObservationContainer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path="/" exact component={ObservationContainer} />
        <Route path="/about" exact component={About} />
      </Router>
    </div>
  );
}

export default App;
