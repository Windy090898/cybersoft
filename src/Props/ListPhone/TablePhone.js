import React, { Component } from 'react'

export default class TablePhone extends Component {
    render() {
      const {phoneItem} = this.props
    return (
      <div>
        <h2>Thong so ky thuat</h2>
        <table cellPadding={"10px"}>
          <tr>
            <td>Ten san pham</td>
            <td>{phoneItem.tenSP}</td>
          </tr>
          <tr>
            <td>Man hinh</td>
            <td>{phoneItem.manHinh}</td>
          </tr>
          <tr>
            <td>He dieu hanh</td>
            <td>{phoneItem.heDieuHanh}</td>
          </tr>
          <tr>
            <td>cameraTruoc</td>
            <td>{phoneItem.cameraTruoc}</td>
          </tr>
          <tr>
            <td>cameraSau</td>
            <td>{phoneItem.cameraSau}</td>
          </tr>
          <tr>
            <td>ram</td>
            <td>{phoneItem.ram}</td>
          </tr>
          <tr>
            <td>rom</td>
            <td>{phoneItem.rom}</td>
          </tr>
          <tr>
            <td>giaBan</td>
            <td>{phoneItem.giaBan}</td>
          </tr>
        </table>
      </div>
    );
  }
}
