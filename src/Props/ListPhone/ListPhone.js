import React, { Component } from "react";
import PhoneDetail from "./PhoneDetail";
import TablePhone from "./TablePhone";
// import CartModal from "./CartModal";
// import dataPhone from './img/dataPhone.json'

export default class ListPhone extends Component {
  render() {
    const {dataPhone, viewDetail, phoneItem, addToCart} = this.props;
    return (
      <div>
        <h1 className="text-center">Danh sach san pham</h1>
        <div className="container">
          <div className="row">
            {dataPhone.map((item, index) => {
              return (
                <div className="col-4" key={item.maSP}>
                  <PhoneDetail item={item} viewDetail={viewDetail} addToCart={addToCart} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="row mt-4 justify-content-center">
            <div className="col-4">
              <img
                className="w-100"
                src={phoneItem.hinhAnh}
                alt=""
              />
            </div>
            <div className="col-6">
              <TablePhone phoneItem={phoneItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
