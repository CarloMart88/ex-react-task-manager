import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="col-12">
      <nav>
        <NavLink to="/TaskList">TaskList</NavLink>
        <NavLink to="./AddTask">AddTask</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
