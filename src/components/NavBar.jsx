import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="col-12 my-2">
      <div className="row ">
        <nav className="d-flex flex-row">
          <div className="m-2">
            <NavLink to="/task">TaskList</NavLink>
          </div>
          <div className="m-2">
            <NavLink to="./AddTask">AddTask</NavLink>
          </div>
          <div className="m-2">
            <NavLink to="./">HomePage</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
