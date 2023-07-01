import React, { Component } from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" href="" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a> */}

                <NavLink
                  style={({ isActive }) =>
                    isActive ? { background: "red" } : {}
                  }
                  className={({ isActive }) =>
                    isActive ? "nav-link bg-danger" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/detail">
                  Detail
                </a> */}
                <NavLink
                  // Cách 1
                  style={({ isActive }) =>
                    isActive ? { background: "blue" } : {}
                  }
                  // Cách 2
                  className={({ isActive }) =>
                    isActive ? "nav-link bg-danger" : "nav-link"
                  }
                  to="/detail"
                >
                  Detail
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/detail">
                  Detail
                </a> */}
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/form" className={'nav-link'}>Form</NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Outlet></Outlet>
        <div className="bg-dark text-white text-center fs-3">Footer</div>
      </div>
    );
  }
}
