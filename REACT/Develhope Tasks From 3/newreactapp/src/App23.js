import React, { Component } from 'react';

class UncontrolledLogin extends Component {
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  componentDidMount() {
    // Automatically focus the username input when the component mounts
    this.usernameInput.current.focus();
  }

  handleLogin = () => {
    const username = this.usernameInput.current.value;
    const password = this.passwordInput.current.value;

    if (username && password) {
      this.props.onLogin({ username, password });
    }
  };

  handleReset = () => {
    this.usernameInput.current.value = '';
    this.passwordInput.current.value = '';
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Username"
          ref={this.usernameInput}
        />
        <input
          type="password"
          placeholder="Password"
          ref={this.passwordInput}
        />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default UncontrolledLogin;
