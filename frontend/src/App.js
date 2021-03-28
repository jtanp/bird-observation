import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ObservationContainer from './containers/ObservationContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ObservationContainer/>
      </Router>
    </div>
  );
}

export default App;
