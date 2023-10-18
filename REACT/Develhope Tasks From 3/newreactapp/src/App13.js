import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { count } = this.state;
      const { incrementAmount } = this.props;
      this.setState({ count: count + incrementAmount });
    }, this.props.incrementInterval || 1000); // Default to 1000 milliseconds (1 second) if not provided
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear the interval to avoid memory leaks
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;
