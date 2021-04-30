import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ObservationContainer from './containers/ObservationContainer';
import About from './components/About';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path="/" exact component={ObservationContainer} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Router>
    </div>
  );
}

export default App;