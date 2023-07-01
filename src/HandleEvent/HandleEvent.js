import React, { Component } from 'react'

export default class HandleEvent extends Component {
    thayDoiNoiDung = (value) => {
        document.querySelector("h1").innerHTML = value;
    }
  render() {
    return (
        <div>
            <h1>Hello World</h1>
        <div className="form-group">
          <label>Change content</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="helpId"
            placeholder="Input content"
            onChange={(e) => {
                this.thayDoiNoiDung(e.target.value)
            }}
          />
        </div>
      </div>
    );
  }
}
