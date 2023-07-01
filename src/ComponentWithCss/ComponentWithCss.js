import React, { Component } from 'react'
// import './style.css'; // global CSS, to avoid -> add an id to the biggest element or user style.module.css
import style from './style.module.css'; // module css, avoid using this
export default class ComponentWithCss extends Component {
  render() {
    return (
        <div id="component">
            <h1 className={`${style.demo} mb-2`}>This is component with css</h1>
      </div>
    )
  }
}
