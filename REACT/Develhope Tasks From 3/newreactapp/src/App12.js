import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      // Increment the count by 1 every second
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000); // 1000 milliseconds (1 second)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear the interval to avoid memory leaks
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;
