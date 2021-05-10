import React from "react";
import {
  Nav,
  NavTitle,
  NavLinks,
  NavButton,
  NavUsername,
  Link,
  LinkItem,
  LinkList,
} from "./NavbarElements";

const Navbar = (props) => {
  const getUsername = () => {
    if (localStorage.getItem("loggedUser") != null | undefined) {
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      return loggedUser?.username;
    }
    return null;
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedUser");
    props.logout();
  };

  return (
    <Nav>
      <NavTitle>Observations</NavTitle>
      <NavLinks>
        <LinkList>
          <LinkItem>
            <Link to="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/about">About</Link>
          </LinkItem>
          {props.isLoggedIn ? (
            <LinkItem>
              <Link to="/save">Save</Link>
            </LinkItem>
          ) : null}
        </LinkList>
      </NavLinks>
      {props.isLoggedIn ? (
        <>
          <NavUsername to="/profile">{getUsername()}</NavUsername>
          <NavButton to="/" onClick={handleLogout}>Logout</NavButton>
        </>
      ) : (
        <NavButton to="/login">Login</NavButton>
      )}
    </Nav>
  );
};

export default Navbar;
