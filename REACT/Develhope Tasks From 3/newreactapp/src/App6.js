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

// Age component
function Age({ age }) {
  return <p>Your age is {age}</p>;
}

// Welcome component
class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age && <Age age={age} />} {/* Render the Age component */}
      </div>
    );
  }
}

// Set default props for the Welcome component
Welcome.defaultProps = {
  name: 'Guest',
};

function App() {
  const name = <strong>John</strong>;
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
