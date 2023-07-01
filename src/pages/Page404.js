import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Page404 extends Component {
    state = {
        status: false,
    }
    render() {
        if (this.state.status) {
            return <Navigate to='/' replace={true} />
        }
    return (
        <div>Page404
            <button onClick={() => {
                this.setState({status: true});
            }} className='btn btn-danger'>Back Home</button>
      </div>
    )
  }
}
