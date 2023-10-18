import React from 'react';
import './App.css';

// Welcome component
class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return <p>Welcome, {name}!</p>;
  }
}

function App() {
  // Pass a name prop to the Welcome component
  const name = 'John'; // You can change 'John' to any name you prefer
  return (
    <div className="App">
      <Hello />
      <Message />
      {/* Render the Welcome component with the name prop */}
      <Welcome name={name} />
    </div>
  );
}

export default App;