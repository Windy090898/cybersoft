import React, { Component } from "react";
import ShoeItem from "./ShoeItem";
import dataShoe from "./data.json";

export default class ListShoes extends Component {
  shoeList = dataShoe;
  state = {
    shoeItem: this.shoeList[0],
  };
  viewDetail = (item) => {
    this.setState({ shoeItem: item });
  };
  render() {
    const { image, name, price, description, quantity } = this.state.shoeItem;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 my-auto text-center">
            <ul className="list-unstyled fs-4">
              <li>Home</li>
              <li>Shoe</li>
              <li>Detail</li>
            </ul>
            <img src={image} alt="" className="w-75" />
            <table className="table">
              <tr>
                <td>Name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>price</td>
                <td>{price}</td>
              </tr>
              <tr>
                <td>description</td>
                <td>{description}</td>
              </tr>
              <tr>
                <td>quantity</td>
                <td>{quantity}</td>
              </tr>
            </table>
          </div>
          <div className="col-9">
            <h3>Shopes Shop</h3>
            <div className="container">
              <div className="row justify-content-around">
                {this.shoeList.map((item) => {
                  return <ShoeItem item={item} viewDetail={this.viewDetail} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
