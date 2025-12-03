import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-4">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Task Manager</span>
        <ul className="navbar-nav flex-row">
          <li className="nav-item mx-2">
            <NavLink to="/" className="nav-link text-white">
              TaskList
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/add" className="nav-link text-white">
              AddTask
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
