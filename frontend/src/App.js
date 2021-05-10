import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Login, Register, Profile } from "./components/pages";
import ObservationContainer from "./containers/ObservationContainer";
import Navbar from './components/navbar/Navbar';
import styled from "styled-components";
import GlobalStyle from "./styles";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedUser")
  );

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppContainer>
      <Router>
        <GlobalStyle />
        <Navbar isLoggedIn={isLoggedIn} logout={logout} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route
          path="/save"
          exact
          component={() => <ObservationContainer isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/profile"
          exact
          component={() => <Profile isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/login"
          exact
          component={() => <Login login={login} />}
        />
        <Route path="/register" exact component={Register} />
      </Router>
    </AppContainer>
  );
}

export default App;
