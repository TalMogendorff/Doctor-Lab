import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-xl navbar-light bg-light fixed-top shadow rounded ">
        <Link className="navbar-brand mx-2" to="/">
          <img
            src="https://doctor.com/png"
            alt="Doctor logo"
            width="120"
          />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-heartbeat text-dark border-bottom border-dark p-2"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto font-weight-bold mx-2 text-center">
            {user && (
              <li className="nav-item">
                <NavLink className="nav-link text-dark " to="/all-projects">
                  <i className="fas fa-project-diagram  pr-1"></i> All Projects
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ml-auto mx-2  font-weight-bold text-center">
            {!user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link text-dark" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-dark" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <li className="nav-item dropdown font-weight-bold">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user-md fa-2x mr-2"></i>
                    <span className="h5">DR.</span> {user.name}
                  </NavLink>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink
                      className="dropdown-item bg-white text-dark "
                      to="/create-new-project"
                    >
                      <i className="fas fa-file-medical-alt pr-1"></i> Create
                      Project
                    </NavLink>

                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="/my-projects"
                    >
                      <i className="fas fa-book-medical pr-1"></i> My Projects
                    </NavLink>

                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="/favorites"
                    >
                      <i className="fas fa-bookmark pr-1"></i> My Favorites
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="/logout">
                      <i className="fas fa-sign-out-alt pr-1"></i> Logout
                    </NavLink>
                  </div>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
