import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class Detail extends Component {
  render() {
    return (
      <div>
        Detail
      <Outlet/>
      </div>
    )
  }
}
