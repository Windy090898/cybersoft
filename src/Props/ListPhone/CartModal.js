import React, { Component } from "react";

export default class CartModal extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Gio hang</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {cart.map((item, index) => {
                return (
                  <div className="container">
                    <div className="row" key={index}>
                      <div className="col-3">
                        <img src={item.hinhAnh} alt="" width={80} height={80} />
                      </div>
                      <div className="col-9">
                        <h4>{item.tenSP}</h4>
                        <p>{Number(item.giaBan).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
