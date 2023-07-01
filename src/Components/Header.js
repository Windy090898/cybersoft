// rcc (react-class-component)
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
    //   Only return 1 object -> must wrap all element in a element
    return (
        <div className="bg-primary text-white">
            Header component
      </div>
    )
  }
}
