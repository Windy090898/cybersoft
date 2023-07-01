import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <table className="table table-striped table-primary tableTicket">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Seats</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
