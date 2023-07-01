import React, { Component } from "react";

export default class CardPhoneItem extends Component {
    render() {
     console.log(this.props)
        let { name, price, brand, image} = this.props.item;
    return (
      <div>
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={image} alt="img" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{brand}</p>
            <p className="card-text">{price}</p>
            <p>{this.props.hoTen}</p>
            <button
              onClick={() => {
                this.props.thayDoiHoTen("Khanh");
              }}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    );
  }
}
