import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";

class Form extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <form className="text-dark container formContainer mt-4">
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-5 d-flex text-white">
                <label htmlFor="name">Name</label>
                <input
                  onChange={(e) => this.props.setBuyerName(e.target.value)}
                  className="form-control ms-4"
                  type="text"
                  id="name"
                  value={this.props.buyerName}
                />
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
            <button
              onClick={() => {
                this.props.handleBuyTicket({
                  buyerName: this.props.buyerName,
                  arrActive: this.props.arrActive,
                });
                this.props.setBuyerName("");
              }}
              className="btn btn-light"
              type="button"
            >
              Confirm Selection
            </button>
          </div>
        </form>
        <List />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  arrActive: state.seat.arrActive,
  buyerName: state.seat.buyerName,
});

const mapsDispatchToProps = (dispatch) => ({
  setBuyerName: (value) => dispatch({ type: "SET_BUYER_NAME", payload: value }),
  handleBuyTicket: (value) => dispatch({ type: "HANDLE_BUY_TICKET", payload: value }),
});

export default connect(mapStateToProps, mapsDispatchToProps)(Form);
