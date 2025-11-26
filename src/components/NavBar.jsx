import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="col-12">
      <nav>
        <div>
          <NavLink to="/TaskList">TaskList</NavLink>
        </div>
        <div>
          <NavLink to="./AddTask">AddTask</NavLink>
        </div>
        <div>
          <NavLink to="./">HomePage</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
