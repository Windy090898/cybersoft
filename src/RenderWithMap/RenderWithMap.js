import React, { Component } from 'react'
import { movieArr } from './dataMovie'

export default class RenderWithMap extends Component {
    renderListMovie = () => { 
        return movieArr.map(item => {
            let { hinhAnh, tenPhim, moTa, maPhim } = item
            return (
              <div key={maPhim} className="card text-left col-2">
                <img className="card-img-top" src={hinhAnh} alt="AVATAR" />
                <div className="card-body">
                  <h4 className="card-title">{tenPhim}</h4>
                  <p className="card-text">{moTa}</p>
                </div>
              </div>
            );

        })
     }
  
  
    render() {
    return (
      <div>
            <h2>RenderWithMap</h2>
            <div className='row'>{ this.renderListMovie() }</div>
      </div>
    );
  }
}
