import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const getUsername = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedUser?.username;
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedUser");
    props.logout();
  }

  return (
    <nav>
      <div className="title">
        <h1>Observations</h1>
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {props.isLoggedIn ? (
            <li>
                <NavLink to="/save">Save</NavLink>
            </li>
          ) : (null)}
        </ul>
      </div>
      {props.isLoggedIn ? (
        <>
          <div className="navusername">
            <NavLink to="/user">{getUsername()}</NavLink>
          </div>
          <div className="navloginlink">
            <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
          </div>
        </>
      ) : (
        <div className="navloginlink">
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
