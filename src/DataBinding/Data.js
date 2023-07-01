import React, { Component } from 'react'

export default class Data extends Component {
    year = '2023';

    showImage() {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
    }

    render() {
        let name = "Uyen"
        let DOB = "09/08/1998"
        return (
            <div>
                <img src={this.showImage()} alt=""></img>
                <p>{ name }</p>
                <p>{DOB} </p>
                <p>{this.year}</p>
            </div>
        )
  }
}
