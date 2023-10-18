import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    if (username && password) {
      this.props.onLogin(this.state);
    }
  };

  handleReset = () => {
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    const { username, password } = this.state;
    const isButtonDisabled = !username || !password;

    return (
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.handleLogin} disabled={isButtonDisabled}>
          Login
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Login;
