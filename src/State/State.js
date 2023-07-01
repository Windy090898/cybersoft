import React, { Component } from 'react'

export default class State extends Component {
    state = {
        quantity: 10,
    };
    handleIncrease = () => {
        this.setState({
            quantity: this.state.quantity + 1,
        })
    };
    handleDecrease = () => {
        if (this.state.quantity === 0) {
            return
        }
        this.setState({
          quantity: this.state.quantity - 1,
        });
    };
  render() {
    return (
      <div>
            <button className="btn btn-danger" onClick={this.handleDecrease}>-</button>
            <span className='mx-3'>{ this.state.quantity }</span>
            <button className="btn btn-success" onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}
