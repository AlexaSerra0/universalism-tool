import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <NavLink to="/" className="nav-text nav-logo">
                 Universalism Tool
            </NavLink>
            <NavLink to="/" className="nav-text nav-home">
                 Home
            </NavLink>
        </nav>
    );
}

export default Navbar;