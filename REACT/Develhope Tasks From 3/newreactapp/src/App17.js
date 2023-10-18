import React, { Component } from 'react';

class ClickTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastButtonPressed: null,
    };
  }

  handleButtonClick = (event) => {
    const lastButtonPressed = event.target.innerText;
    this.setState({ lastButtonPressed });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Button 1</button>
        <button onClick={this.handleButtonClick}>Button 2</button>
        <button onClick={this.handleButtonClick}>Button 3</button>
        {this.state.lastButtonPressed && (
          <h1>Last Button Pressed: {this.state.lastButtonPressed}</h1>
        )}
      </div>
    );
  }
}

export default ClickTracker;
