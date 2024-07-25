import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="headerNav">
            <nav className="nav container">
                <div className="nav-text nav-logo">
                    Universalism Tool
                </div>
                <div>
                <NavLink to="/" className="nav-text nav-home">
                    Home
                </NavLink>
                <NavLink to="/documents" className="nav-text nav-home" style={{paddingLeft:'1rem'}}>
                    Documents
                </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;