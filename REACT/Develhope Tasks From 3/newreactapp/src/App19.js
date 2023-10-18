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
      </div>
    );
  }
}

class App extends Component {
  handleLogin = (userData) => {
    // Handle login logic with userData (username and password)
    console.log('Logging in with:', userData);
  };

  render() {
    return (
      <div className="App">
        <h1>Login App</h1>
        <Login onLogin={this.handleLogin} />
      </div>
    );
  }
}

export default App;
