import React, { Component, createRef } from "react";
import FormProduct from "./FormProduct";

export default class ProductList extends Component {
  constructor() {
    super()
    this.ref = createRef()
  } 
  state = {
    arrProduct: [],
  };

  themSanPham = (sanPham) => {
    this.setState({ arrProduct: [...this.state.arrProduct, sanPham] });
  };
  xoaSanPham = (index) => {
    let newArr = [...this.state.arrProduct];
    newArr.splice(index, 1);
    this.setState({ arrProduct: newArr });
  };
  getSanPham = (item) => {
    this.ref.current.setState({ ...this.ref.current.state, values: item });
    // this.ref.current.focus()
  }
  updateSanPham = (sanPham) => {
    let index = this.state.arrProduct.findIndex(item => item.id === sanPham.id);
    if (index !== -1) {
      let newArr = [...this.state.arrProduct]
      newArr[index] = sanPham
      this.setState({arrProduct: newArr})
    }
  }
  
  render() {
    return (
      <div>
        <h1>Create Product</h1>
        <div className="container">
          <FormProduct
            themSanPham={this.themSanPham}
            ref={this.ref}
            updateSanPham={this.updateSanPham}
          />
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.arrProduct.map((item, index) => {
                  const { id, image, name, price, description, productType } =
                    item;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>
                        <img src={image} alt="" width={100} />
                      </td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td>{description}</td>
                      <td>{productType}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.xoaSanPham(index);
                          }}
                        >
                          Xoa
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => this.getSanPham(item)}
                        >
                          Sua
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
