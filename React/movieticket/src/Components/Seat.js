import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form";

class Seat extends Component {
  render() {
    return (
      <div className="text-center text-white seatContainer">
        <div className="screenContainer">
          <div className="screen"></div>
          <p>Screen</p>
        </div>
        <div className="seat">
          <div className="container overflow-hidden">
            <div className="row gx-4 gy-3">
              {this.props.arrSeat.map((item, index) => {
                return (
                  <div
                    className="col-1"
                    key={item.seat}
                    onClick={() => {
                      this.props.toggleActiveSeat(index);
                    }}
                  >
                    <div className={`p1 seatItem ${item.status}`}>
                      {item.seat}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="status container mt-3">
          <div className="row">
            <div className="col-2 statusItem d-flex selected d-flex">
              <div className="box me-2"></div>
              <span>Selected Seat</span>
            </div>
            <div className="col-2 statusItem d-flex reserved">
              <div className="box me-2"></div>
              <span>Reserved Seat</span>
            </div>
            <div className="col-2 statusItem d-flex empty">
              <div className="box me-2"></div>
              <span>Empty Seat</span>
            </div>
          </div>
        </div>
        <Form />
      </div>
    );
  }
}

const mapsStateToProps = (state) => ({
  arrSeat: state.seat.arrSeat,
});

const mapsDispatchToProps = (dispatch) => ({
  toggleActiveSeat: (index) =>
    dispatch({ type: "TOGGLE_ACTIVE_SEAT", payload: index }),
});

export default connect(mapsStateToProps, mapsDispatchToProps)(Seat);
