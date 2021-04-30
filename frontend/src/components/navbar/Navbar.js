import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="title">
                <h1>Observations</h1>
            </div>
            <div className="navlinks">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navloginlink">
                <NavLink to="/login">
                    Login
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;