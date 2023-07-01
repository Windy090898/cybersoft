import React, { Component } from 'react'
import CartModal from './CartModal';

export default class PhoneDetail extends Component {
    render() {
      let {item} = this.props
    return (
      <div className="border shadow text-center py-3">
        <img className="" src={item.hinhAnh} alt="" width={300} height={300} />
        <h2>{item.tenSP}</h2>
        <div className="row justify-content-center gap-3">
          <button
            className="btn btn-success col-3"
            onClick={() => {
              this.props.viewDetail(item);
            }}
          >
            Xem chi tiet
          </button>
          <button
            className="btn btn-warning col-4"
            onClick={() => {
              this.props.addToCart(item);
            }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Them gio hang
          </button>
        </div>
      </div>
    );
  }
}
