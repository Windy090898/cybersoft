import React, { Component } from 'react'

export default class Car extends Component {
    state = {
        color: "red",
    };
    handleChangeColor = (value) => {
        this.setState({ color: value });
    }
    render() {
        let { color } = this.state;
    return (
      <div className="container row">
        <img
          src={`./img/CarBasic/products/${color}-car.jpg`}
          alt=""
          className="col-4"
        />
        {/* <div className="col-6">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.handleChangeColor("black");
            }}
          >
            <img src="./img/CarBasic/icons/icon-black.jpg" alt="" />
          </button>
        </div> */}
      </div>
    );
  }
}
