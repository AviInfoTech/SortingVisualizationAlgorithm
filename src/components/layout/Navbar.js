import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand" href="/" to='/'>
          <h5>Sorting Algorithm Visualizer</h5>
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                BUBBLE SORT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/selection">
                SELECTION SORT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Insertion">
                INSERTION SORT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/heap">
                HEAP SORT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
