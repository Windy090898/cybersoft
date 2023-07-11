import React, { Component } from 'react'
import { connect } from 'react-redux';

class List extends Component {
  render() {
    console.log(this.props)
    return (
      <table className="table table-striped table-primary tableTicket">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Seats</th>
            <th>Seats</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.arrBought.map((item, index) => (
            <tr key={index}>
              <td>{item.buyerName}</td>
              <td>{item.arrActive.length}</td>
              <td>{item.arrActive.map((item) => item.seat).join(",")}</td>
              <td><button onClick={() => this.props.cancelBuyTicket(index)} className='cancel-btn'>Cancel</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  arrBought: state.seat.arrBought,
})

const mapsDispatchToProps = dispatch => ({
  cancelBuyTicket: (index) => dispatch({
    type: 'CANCEL_BUY_TICKET',
    payload: index
  })
})

export default connect(mapStateToProps, mapsDispatchToProps)(List);