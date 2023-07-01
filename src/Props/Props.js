import React, { Component } from "react";
import CardPhoneItem from "./CardPhoneItem";

export default class Props extends Component {
  arrObject = [
    {
      name: "Galaxy",
      price: 30000,
      brand: "Samsung",
      image:
        "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119_2.jpg",
    },
    {
      name: "Iphone 8",
      price: 50000,
      brand: "Iphone",
      image:
        "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119_2.jpg",
    },
    {
      name: "Redmi 13C",
      price: 20000,
      brand: "Xiaomi ",
      image:
        "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119_2.jpg",
    },
  ];
  state = {
    hoTen: "Uyen",
  };
  thayDoiHoTen = (string) => {
    this.setState({hoTen: string})
  }
  render() {
    return (
      <div>
        <h1>Demo Props React</h1>
        <div className="container">
          <div className="row">
              {/* <CardPhoneItem item={this.phoneItem} /> */}
              {this.arrObject.map((item, index) => {
                return (
                  <div className="col-4">
                    <CardPhoneItem
                      item={item}
                      hoTen={this.state.hoTen}
                      key={index}
                      thayDoiHoTen={this.thayDoiHoTen}
                    />
                  </div>
                );
              })}

          </div>
        </div>
      </div>
    );
  }
}
