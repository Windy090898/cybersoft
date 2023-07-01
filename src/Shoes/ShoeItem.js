import React, { Component } from "react";

export default class ShoeItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card text-dark bg-light col-4" key={item.id}>
        <img className="card-img-top" src={item.image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.price}$</p>
                <button className="btn btn-dark" onClick={() => {
                    this.props.viewDetail(item);
                }}>View Detail</button>
        </div>
      </div>
    );
  }
}
