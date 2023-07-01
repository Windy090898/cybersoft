import React, { Component } from "react";
import Form from "./Form";

export default class Seat extends Component {
  seatRange = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  seatNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  arrSeat = () => {
    const arrSeat =[]
    for (let seat of this.seatRange) {
      for (let number of this.seatNumber) {
        arrSeat.push({
          seat: seat + number,
          status: 'empty'
        })
      }
    }
    return arrSeat
  };
  state = {
    arrSeat: this.arrSeat(),
  };

  handleActive = (index) => {
    let newArr = [...this.state.arrSeat];
    if (newArr[index].status === 'empty') {
      newArr[index].status = 'active';
    } else if (newArr[index].status === 'active') {
      newArr[index].status = 'empty';
    } else {
      alert('This seat is already occupied')
    }
    this.setState({
          arrSeat: newArr
        });
  };

  renderSeat = () => {
    return this.state.arrSeat.map((item, index) => {
      return (
        <div
          className="col-1"
          key={item.seat}
          onClick={() => {
            this.handleActive(index);
          }}
        >
          <div className={`p1 seatItem ${item.status}`}>{item.seat}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="text-center text-white seatContainer">
        <div className="screenContainer">
          <div className="screen"></div>
          <p>Screen</p>
        </div>
        <div className="seat">
          <div className="container overflow-hidden">
            <div className="row gx-4 gy-3">{this.renderSeat()}</div>
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
        <Form arrActive={this.state.arrSeat.filter(item => item.status === 'active')} />
      </div>
    );
  }
}
