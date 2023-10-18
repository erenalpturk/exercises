import React, { Component } from 'react';

class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return <p>Welcome, {name}!</p>;
  }
}

class InteractiveWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '', // Initialize the input text as an empty string
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputText: event.target.value, // Update the input text in the component's state
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputText} // Set the input value from the component's state
          onChange={this.handleInputChange} // Handle input changes
        />
        <Welcome name={this.state.inputText} /> {/* Pass input text as name prop to Welcome */}
      </div>
    );
  }
}

export default InteractiveWelcome;
