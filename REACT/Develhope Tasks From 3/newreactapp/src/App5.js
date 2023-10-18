import React from 'react';
import './App.css';

// Hello component
function Hello() {
  return <div>Hello</div>;
}

// Message component
function Message() {
  return <div>It's time to learn React!!!</div>;
}

// Welcome component
class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age && <p>Your age is {age}</p>}
      </div>
    );
  }
}

// Set default props for the Welcome component
Welcome.defaultProps = {
  name: 'Guest',
};

function App() {
  const name = <strong>John</strong>; // Wrap the value in a <strong> tag
  const age = 30;

  return (
    <div className="App">
      <Hello />
      <Message />
      <Welcome name={name} age={age} />
    </div>
  );
}

export default App;
