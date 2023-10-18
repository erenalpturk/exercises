import React, { Component } from 'react';
import './App.css';

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
    }, this.props.incrementInterval || 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
    </div>
  );
}

export default App;
