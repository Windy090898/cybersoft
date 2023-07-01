import React, { Component } from 'react'

export default class ItemDetail extends Component {
    render() {
        let url = window.location.href.split('/');
        let id = url[url.length - 1];
        console.log(id)
        console.log(url);
    return (
      <div>ItemDetail</div>
    )
  }
}
