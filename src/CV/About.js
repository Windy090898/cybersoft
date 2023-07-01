import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="content">
        <h1>Nguyen Van A</h1>
        <h3 className="text-uppercase">
          3542 Berry street - cheyenne wells, CD 808010 (312) 3585 846
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className="social list-unstyled d-flex gap-2 fs-3">
          <li className="social-item bg-dark text-white py-3 px-4">
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li className="social-item bg-dark text-white py-3 px-4">
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li className="social-item bg-dark text-white py-3 px-4">
            <i class="fa-brands fa-linkedin"></i>
          </li>
        </ul>
      </div>
    );
  }
}
