import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ObservationContainer from './containers/ObservationContainer';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedUser"));

  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} logout={logout} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/save" exact component={() => <ObservationContainer isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" exact render={props => (<Login login={login} />)} />
        <Route path="/register" exact component={Register} />
      </Router>
    </div>
  );
}

export default App;
