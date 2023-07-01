import React, { Component } from "react";
import "./style.css";
import { NavLink, Outlet } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div className="container page">
        <div className="row">
          <div className="col-4 bg-info text-center">
            <div className="navigator">
              <img
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="Avatar"
                width={200}
                id="avatar"
              />
              <ul className="list-unstyled fs-4">
                <li className="text-uppercase">
                  <NavLink className={({isActive}) => isActive ? 'text-decoration-none navi-item active' : 'text-decoration-none navi-item'} to="/">about</NavLink>
                </li>
                <li className="text-uppercase ">
                  <NavLink className={({isActive}) => isActive ? 'text-decoration-none navi-item active' : 'text-decoration-none navi-item'} to="/experience">experience</NavLink>
                </li>
                <li className="text-uppercase ">
                  <NavLink className={({isActive}) => isActive ? 'text-decoration-none navi-item active' : 'text-decoration-none navi-item'} to="/education">education</NavLink>
                </li>
                <li className="text-uppercase ">
                  <NavLink className={({isActive}) => isActive ? 'text-decoration-none navi-item active' : 'text-decoration-none navi-item'} to="/skill">skills</NavLink>
                </li>
                <li className="text-uppercase ">
                  <NavLink className={({isActive}) => isActive ? 'text-decoration-none navi-item active' : 'text-decoration-none navi-item'} to="/interest">interest</NavLink>
                </li>
                <li className="text-uppercase ">
                  <NavLink className={({isActive}) => isActive ? 'text-decoration-none navi-item active' : 'text-decoration-none navi-item'} to="/award">award</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8 my-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
