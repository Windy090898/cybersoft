import React, { Component } from 'react'

export default class DemoState extends Component {
    state = {
        isLogin: false,
    };
    renderButton = () => {
        if (this.state.isLogin) {
            return <button onClick={this.handleLogout}>Log out</button>
        } else {
            return <button onClick={this.handleLogin}>Login</button>
        }
    };
    handleLogin = () => {
        this.setState({ isLogin: true });
    };
    handleLogout = () => {
        this.setState({ isLogin: false });
    }
    render() {
    return (
      <div>
        DemoState
        {this.renderButton()}
      </div>
    );
  }
}
