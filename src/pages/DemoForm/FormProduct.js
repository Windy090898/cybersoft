import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    values: {
      id: "",
      image: "",
      name: "",
      productType: "",
      price: "",
      description: "",
    },
    errors: {
      id: "",
      image: "",
      name: "",
      productType: "",
      price: "",
      description: "",
    },
    activeButton: false,
  };
  getValueInput = (e) => {
    let { id, value } = e.target;

    let newValue = this.state.values;
    newValue[id] = value

    // validation
    // Check blank values
    let newError = this.state.errors;
    let type = e.target.dataset.type;

    if (newValue[id] == "") {
      newError[id] = `${id} khong duoc de rong`
    } else {

      // Check number
      switch (type) {
        case "number": {
          let regexNumber = /^\d+$/;
          let res = regexNumber.test(newValue[id])
          newError[id] = res ? "" : `${id} phai la so`
        }
          break;
        //Check string
        case 'string': {
          let regexLetter = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
          let res = regexLetter.test(newValue[id])
          newError[id] = res ? "" : `${id} phai la chu`;
        }
          break;
        default:
          newError[id] = ''
          
      }
    }

    let valid = true;
    for (let item in this.state.errors) {
      if (this.state.errors[item] !== '' || this.state.values[item] === '') {
        valid = false;
      }
    }

    this.setState({ activeButton: false })
    if (valid) {
      this.setState({ activeButton: true });
    }

    this.setState({
      values: newValue,
      errors: newError,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSanPham({ ...this.state.values });
  };

  
  render() {
    // console.log(this.state)
    const {id, image, name, productType, price, description} = this.state.errors
    return (
      <form onSubmit={this.handleSubmit} class="card text-dark bg-light">
        <div class="card-body">
          <div className="row">
            <div className="col-6">
              <label htmlFor="id">Id</label>
              <input
                onChange={this.getValueInput}
                className="form-control"
                type="text"
                id="id"
                value={this.state.values.id}
              />
              <p>{id}</p>
            </div>
            <div className="col-6">
              <label htmlFor="image">image</label>
              <input
                onChange={this.getValueInput}
                className="form-control"
                type="text"
                id="image"
                value={this.state.values.image}
              />
              <p>{image}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="name">name</label>
              <input
                onChange={this.getValueInput}
                className="form-control"
                type="text"
                id="name"
                value={this.state.values.name}
                data-type="string"
              />
              <p>{name}</p>
            </div>
            <div className="col-6">
              <label htmlFor="productType">productType</label>
              <input
                onChange={this.getValueInput}
                className="form-control"
                type="text"
                id="productType"
                value={this.state.values.productType}
              />
              <p>{productType}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="price">price</label>
              <input
                onChange={this.getValueInput}
                className="form-control"
                type="text"
                id="price"
                value={this.state.values.price}
                data-type="number"
              />
              <p>{price}</p>
            </div>
            <div className="col-6">
              <label htmlFor="description">description</label>
              <input
                onChange={this.getValueInput}
                className="form-control"
                type="text"
                id="description"
                value={this.state.values.description}
              />
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button
            disabled={!this.state.activeButton}
            className="btn btn-primary"
            type="submit"
          >
            Tao sp
          </button>
          <button className="btn btn-warning" onClick={() => {
            let sanPham = { ...this.state.values }
            this.props.updateSanPham(sanPham)
          }} type="button">Cap nhat</button>
        </div>
      </form>
    );
  }
}
