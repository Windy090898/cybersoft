import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form className="text-dark container formContainer mt-4">
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-5 d-flex text-white">
              <label htmlFor="name">Name</label>
              <input className="form-control ms-4" type="text" id="name" />
            </div>
            <div className="col-5 d-flex text-white">
              <label htmlFor="seatSelected">Seat Selected</label>
              <input
                className="form-control"
                type="text"
                id="seatSelected"
                name="seatSelected"
                disabled
                defaultValue={this.props.arrActive
                  .map((item) => item.seat)
                  .join(",")}
              />
            </div>
          </div>
        </div>
        <div className="card-footer mt-3">
          <button className="btn btn-light" type="submit">
            Confirm Selection
          </button>
        </div>
      </form>
    );
  }
}
